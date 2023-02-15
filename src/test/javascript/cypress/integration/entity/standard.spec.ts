import { entityItemSelector } from '../../support/commands';
import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Standard e2e test', () => {
  const standardPageUrl = '/standard';
  const standardPageUrlPattern = new RegExp('/standard(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const standardSample = {};

  let standard: any;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/standards+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/standards').as('postEntityRequest');
    cy.intercept('DELETE', '/api/standards/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (standard) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/standards/${standard.id}`,
      }).then(() => {
        standard = undefined;
      });
    }
  });

  it('Standards menu should load Standards page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('standard');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response!.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Standard').should('exist');
    cy.url().should('match', standardPageUrlPattern);
  });

  describe('Standard page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(standardPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Standard page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/standard/new$'));
        cy.getEntityCreateUpdateHeading('Standard');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', standardPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/standards',
          body: standardSample,
        }).then(({ body }) => {
          standard = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/standards+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [standard],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(standardPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Standard page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('standard');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', standardPageUrlPattern);
      });

      it('edit button click should load edit Standard page', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Standard');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', standardPageUrlPattern);
      });

      it('last delete button click should delete instance of Standard', () => {
        cy.intercept('GET', '/api/standards/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('standard').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', standardPageUrlPattern);

        standard = undefined;
      });
    });
  });

  describe('new Standard page', () => {
    beforeEach(() => {
      cy.visit(`${standardPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Standard');
    });

    it('should create an instance of Standard', () => {
      cy.get(`[data-cy="code"]`)
        .type('43b258d7-eeb7-4e2d-bc74-2d07d45d6def')
        .invoke('val')
        .should('match', new RegExp('43b258d7-eeb7-4e2d-bc74-2d07d45d6def'));

      cy.get(`[data-cy="name"]`).type('info-mediaries').should('have.value', 'info-mediaries');

      cy.get(`[data-cy="version"]`).type('enable').should('have.value', 'enable');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(201);
        standard = response!.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(200);
      });
      cy.url().should('match', standardPageUrlPattern);
    });
  });
});
