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

describe('NodeStructure e2e test', () => {
  const nodeStructurePageUrl = '/node-structure';
  const nodeStructurePageUrlPattern = new RegExp('/node-structure(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const nodeStructureSample = {};

  let nodeStructure: any;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/node-structures+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/node-structures').as('postEntityRequest');
    cy.intercept('DELETE', '/api/node-structures/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (nodeStructure) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/node-structures/${nodeStructure.id}`,
      }).then(() => {
        nodeStructure = undefined;
      });
    }
  });

  it('NodeStructures menu should load NodeStructures page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('node-structure');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response!.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('NodeStructure').should('exist');
    cy.url().should('match', nodeStructurePageUrlPattern);
  });

  describe('NodeStructure page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(nodeStructurePageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create NodeStructure page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/node-structure/new$'));
        cy.getEntityCreateUpdateHeading('NodeStructure');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeStructurePageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/node-structures',
          body: nodeStructureSample,
        }).then(({ body }) => {
          nodeStructure = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/node-structures+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [nodeStructure],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(nodeStructurePageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details NodeStructure page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('nodeStructure');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeStructurePageUrlPattern);
      });

      it('edit button click should load edit NodeStructure page', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('NodeStructure');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeStructurePageUrlPattern);
      });

      it('last delete button click should delete instance of NodeStructure', () => {
        cy.intercept('GET', '/api/node-structures/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('nodeStructure').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeStructurePageUrlPattern);

        nodeStructure = undefined;
      });
    });
  });

  describe('new NodeStructure page', () => {
    beforeEach(() => {
      cy.visit(`${nodeStructurePageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('NodeStructure');
    });

    it('should create an instance of NodeStructure', () => {
      cy.get(`[data-cy="code"]`)
        .type('c1292df9-5eb2-4724-a5fd-9ae5d8701167')
        .invoke('val')
        .should('match', new RegExp('c1292df9-5eb2-4724-a5fd-9ae5d8701167'));

      cy.get(`[data-cy="name"]`).type('Refined').should('have.value', 'Refined');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(201);
        nodeStructure = response!.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(200);
      });
      cy.url().should('match', nodeStructurePageUrlPattern);
    });
  });
});
