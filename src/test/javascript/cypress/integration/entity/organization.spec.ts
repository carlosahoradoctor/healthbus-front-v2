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

describe('Organization e2e test', () => {
  const organizationPageUrl = '/organization';
  const organizationPageUrlPattern = new RegExp('/organization(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const organizationSample = {};

  let organization: any;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/organizations+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/organizations').as('postEntityRequest');
    cy.intercept('DELETE', '/api/organizations/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (organization) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/organizations/${organization.id}`,
      }).then(() => {
        organization = undefined;
      });
    }
  });

  it('Organizations menu should load Organizations page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('organization');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response!.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Organization').should('exist');
    cy.url().should('match', organizationPageUrlPattern);
  });

  describe('Organization page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(organizationPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Organization page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/organization/new$'));
        cy.getEntityCreateUpdateHeading('Organization');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', organizationPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/organizations',
          body: organizationSample,
        }).then(({ body }) => {
          organization = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/organizations+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [organization],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(organizationPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Organization page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('organization');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', organizationPageUrlPattern);
      });

      it('edit button click should load edit Organization page', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Organization');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', organizationPageUrlPattern);
      });

      it('last delete button click should delete instance of Organization', () => {
        cy.intercept('GET', '/api/organizations/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('organization').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', organizationPageUrlPattern);

        organization = undefined;
      });
    });
  });

  describe('new Organization page', () => {
    beforeEach(() => {
      cy.visit(`${organizationPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Organization');
    });

    it('should create an instance of Organization', () => {
      cy.get(`[data-cy="code"]`)
        .type('3b725ec7-fda9-4cad-a45b-ea14e08d606a')
        .invoke('val')
        .should('match', new RegExp('3b725ec7-fda9-4cad-a45b-ea14e08d606a'));

      cy.get(`[data-cy="name"]`).type('protocol payment Bedfordshire').should('have.value', 'protocol payment Bedfordshire');

      cy.get(`[data-cy="address"]`).type('Indiana Buckinghamshire').should('have.value', 'Indiana Buckinghamshire');

      cy.get(`[data-cy="city"]`).type('Bethlehem').should('have.value', 'Bethlehem');

      cy.get(`[data-cy="country"]`).type('Turkmenistan').should('have.value', 'Turkmenistan');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(201);
        organization = response!.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(200);
      });
      cy.url().should('match', organizationPageUrlPattern);
    });
  });
});
