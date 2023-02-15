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

describe('NodeRelation e2e test', () => {
  const nodeRelationPageUrl = '/node-relation';
  const nodeRelationPageUrlPattern = new RegExp('/node-relation(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const nodeRelationSample = {};

  let nodeRelation: any;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/node-relations+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/node-relations').as('postEntityRequest');
    cy.intercept('DELETE', '/api/node-relations/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (nodeRelation) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/node-relations/${nodeRelation.id}`,
      }).then(() => {
        nodeRelation = undefined;
      });
    }
  });

  it('NodeRelations menu should load NodeRelations page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('node-relation');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response!.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('NodeRelation').should('exist');
    cy.url().should('match', nodeRelationPageUrlPattern);
  });

  describe('NodeRelation page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(nodeRelationPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create NodeRelation page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/node-relation/new$'));
        cy.getEntityCreateUpdateHeading('NodeRelation');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeRelationPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/node-relations',
          body: nodeRelationSample,
        }).then(({ body }) => {
          nodeRelation = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/node-relations+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [nodeRelation],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(nodeRelationPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details NodeRelation page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('nodeRelation');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeRelationPageUrlPattern);
      });

      it('edit button click should load edit NodeRelation page', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('NodeRelation');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeRelationPageUrlPattern);
      });

      it('last delete button click should delete instance of NodeRelation', () => {
        cy.intercept('GET', '/api/node-relations/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('nodeRelation').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', nodeRelationPageUrlPattern);

        nodeRelation = undefined;
      });
    });
  });

  describe('new NodeRelation page', () => {
    beforeEach(() => {
      cy.visit(`${nodeRelationPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('NodeRelation');
    });

    it('should create an instance of NodeRelation', () => {
      cy.get(`[data-cy="code"]`)
        .type('bf0ac515-918f-4ffb-947c-11a79a28e057')
        .invoke('val')
        .should('match', new RegExp('bf0ac515-918f-4ffb-947c-11a79a28e057'));

      cy.get(`[data-cy="status"]`).select('PAUSE');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(201);
        nodeRelation = response!.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(200);
      });
      cy.url().should('match', nodeRelationPageUrlPattern);
    });
  });
});
