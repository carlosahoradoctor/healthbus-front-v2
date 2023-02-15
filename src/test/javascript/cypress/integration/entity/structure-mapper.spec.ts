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

describe('StructureMapper e2e test', () => {
  const structureMapperPageUrl = '/structure-mapper';
  const structureMapperPageUrlPattern = new RegExp('/structure-mapper(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const structureMapperSample = {};

  let structureMapper: any;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/structure-mappers+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/structure-mappers').as('postEntityRequest');
    cy.intercept('DELETE', '/api/structure-mappers/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (structureMapper) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/structure-mappers/${structureMapper.id}`,
      }).then(() => {
        structureMapper = undefined;
      });
    }
  });

  it('StructureMappers menu should load StructureMappers page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('structure-mapper');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response!.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('StructureMapper').should('exist');
    cy.url().should('match', structureMapperPageUrlPattern);
  });

  describe('StructureMapper page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(structureMapperPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create StructureMapper page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/structure-mapper/new$'));
        cy.getEntityCreateUpdateHeading('StructureMapper');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structureMapperPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/structure-mappers',
          body: structureMapperSample,
        }).then(({ body }) => {
          structureMapper = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/structure-mappers+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [structureMapper],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(structureMapperPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details StructureMapper page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('structureMapper');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structureMapperPageUrlPattern);
      });

      it('edit button click should load edit StructureMapper page', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('StructureMapper');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structureMapperPageUrlPattern);
      });

      it('last delete button click should delete instance of StructureMapper', () => {
        cy.intercept('GET', '/api/structure-mappers/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('structureMapper').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response!.statusCode).to.equal(200);
        });
        cy.url().should('match', structureMapperPageUrlPattern);

        structureMapper = undefined;
      });
    });
  });

  describe('new StructureMapper page', () => {
    beforeEach(() => {
      cy.visit(`${structureMapperPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('StructureMapper');
    });

    it('should create an instance of StructureMapper', () => {
      cy.get(`[data-cy="code"]`)
        .type('ae9b2c34-4259-4cf8-90db-2618f19938c2')
        .invoke('val')
        .should('match', new RegExp('ae9b2c34-4259-4cf8-90db-2618f19938c2'));

      cy.get(`[data-cy="name"]`).type('panel synergies Lodge').should('have.value', 'panel synergies Lodge');

      cy.get(`[data-cy="mapperStype"]`).select('SOAP');

      cy.get(`[data-cy="endpoint"]`).type('calculating dynamic firmware').should('have.value', 'calculating dynamic firmware');

      cy.get(`[data-cy="structureBody"]`).type('Qatari').should('have.value', 'Qatari');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(201);
        structureMapper = response!.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response!.statusCode).to.equal(200);
      });
      cy.url().should('match', structureMapperPageUrlPattern);
    });
  });
});
