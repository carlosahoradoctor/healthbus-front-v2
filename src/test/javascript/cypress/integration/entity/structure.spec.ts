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

describe('Structure e2e test', () => {
  const structurePageUrl = '/structure';
  const structurePageUrlPattern = new RegExp('/structure(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const structureSample = {};

  let structure: any;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/structures+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/structures').as('postEntityRequest');
    cy.intercept('DELETE', '/api/structures/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (structure) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/structures/${structure.id}`,
      }).then(() => {
        structure = undefined;
      });
    }
  });

  it('Structures menu should load Structures page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('structure');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response!.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Structure').should('exist');
    cy.url().should('match', structurePageUrlPattern);
  });

  describe('Structure page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(structurePageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Structure page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/structure/new$'));
        cy.getEntityCreateUpdateHeading('Structure');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structurePageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/structures',
          body: structureSample,
        }).then(({ body }) => {
          structure = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/structures+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [structure],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(structurePageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Structure page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('structure');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structurePageUrlPattern);
      });

      it('edit button click should load edit Structure page', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Structure');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structurePageUrlPattern);
      });

      it('last delete button click should delete instance of Structure', () => {
        cy.intercept('GET', '/api/structures/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('structure').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structurePageUrlPattern);

        structure = undefined;
      });
    });
  });

  describe('new Structure page', () => {
    beforeEach(() => {
      cy.visit(`${structurePageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Structure');
    });

    it('should create an instance of Structure', () => {
      cy.get(`[data-cy="code"]`)
        .type('130f7636-4797-4f80-bac2-e40022a1bb6a')
        .invoke('val')
        .should('match', new RegExp('130f7636-4797-4f80-bac2-e40022a1bb6a'));

      cy.get(`[data-cy="name"]`).type('enterprise Chief JSON').should('have.value', 'enterprise Chief JSON');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(201);
        structure = response!.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(200);
      });
      cy.url().should('match', structurePageUrlPattern);
    });
  });
});
