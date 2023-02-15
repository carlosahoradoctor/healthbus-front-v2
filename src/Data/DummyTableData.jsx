import React from 'react';

export const tableDataStandars = [
    {
        id: '1',
        code: 'aa-s1',
        name: 'Product Menu',
        version: '1.10',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'aa-s2',
        name: 'Category Menu',
        version: '1.10',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'aa-s3',
        name: 'Subcategory Menu',
        version: '1.10',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        code: 'aa-s4',
        name: 'Sales  Menu',
        version: '2',
        status: <i className="fa fa-circle font-danger f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        code: 'aa-s5',
        name: 'Vendor Menu',
        version: '1.12',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        code: 'aa-s6',
        name: 'Category Menu',
        version: '1.11',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataUsersProfile = [
    {
        id: '1',
        user: {
            name: 'Pedro'
        },
        phone: '112345678',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        user: {
            name: 'Jose'
        },
        phone: '112345778',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        user: {
            name: 'Ernesto'
        },
        phone: '165345678',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        user: {
            name: 'Juan'
        },
        phone: '112985678',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        user: {
            name: 'Guillermo'
        },
        phone: '195845678',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        user: {
            name: 'Emanuel'
        },
        phone: '112347416',
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataCompanies = [
    {
        id: '1',
        code: 'uys-12',
        name: 'Company1',
        userProfile: {
            name: 'UserProfile1',
            user: {
                name: 'Pedro'
            },
            phone: '112345678',
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'uys-13',
        name: 'Company2',
        userProfile: {
            name: 'UserProfile2',
            user: {
                name: 'Juan'
            },
            phone: '112345778',
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'uys-14',
        name: 'Company3',
        userProfile: {
            name: 'UserProfile3',
            user: {
                name: 'Guillermo'
            },
            phone: '165345678',
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        code: 'uys-15',
        name: 'Company4',
        userProfile: {
            name: 'UserProfile4',
            user: {
                name: 'Emanuel'
            },
            phone: '112985678',
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        code: 'uys-16',
        name: 'Company5',
        userProfile: {
            name: 'UserProfile5',
            user: {
                name: 'Julian'
            },
            phone: '195845678',
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        code: 'uys-17',
        name: 'Company6',
        userProfile: {
            name: 'UserProfile6',
            user: {
                name: 'Javier'
            },
            phone: '112347416',
        },
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataOrganizations = [
    {
        id: '1',
        code: 'oys-12',
        name: 'Organization1',
        address: {
            direction: 'Fake 123',
            city: 'Buenos Aires',
            country: 'Argentina'
        },
        company: {
            id: '1',
            code: 'uys-12',
            name: 'Company1',
            userProfile: {
                name: 'UserProfile1',
                user: {
                    name: 'Pedro'
                },
                phone: '112345778',
            },
            creat_on: '2022-04-18T00:00:00'
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'oys-13',
        name: 'Organization2',
        address: {
            direction: 'Fake 321',
            city: 'CABA',
            country: 'Argentina'
        },
        company: {
            id: '2',
            code: 'uys-12',
            name: 'Company1',
            userProfile: {
                name: 'UserProfile2',
                user: {
                    name: 'Juan'
                },
                phone: '112345778',
            },
            creat_on: '2022-04-18T00:00:00'
        },
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'oys-14',
        name: 'Organization3',
        address: {
            direction: 'Fake 456',
            city: 'Mato Groso',
            country: 'Brasil'
        },
        company: {
            id: '3',
            code: 'uys-13',
            name: 'Company3',
            userProfile: {
                name: 'UserProfile3',
                user: {
                    name: 'Guillermo'
                },
                phone: '165345678',
            },
            creat_on: '2022-04-18T00:00:00'
        },
        creat_on: '2022-04-18T00:00:00'
    },
];

export const tableDataResourceMapper = [
    {
        id: '1',
        code: 'rm-s1',
        name: 'ResourceMapper1',
        mapperStype: 'REST',
        endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'rm-s2',
        name: 'ResourceMapper2',
        mapperStype: 'REST',
        endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'rm-s3',
        name: 'ResourceMapper3',
        mapperStype: 'REST',
        endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        code: 'rm-s4',
        name: 'ResourceMapper4',
        mapperStype: 'SOAP',
        endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        code: 'rm-s5',
        name: 'ResourceMapper5',
        mapperStype: 'SOAP',
        endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        code: 'rm-s6',
        name: 'ResourceMapper6',
        mapperStype: 'REST',
        endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataResources = [
    {
        id: '1',
        code: 'rsm-s1',
        name: 'Resource1',
        standard: 'Standard1',
        structureMapper: 'structureMapper1',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'rsm-s2',
        name: 'Resource2',
        standard: 'standard2',
        structureMapper: 'structureMapper2',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'rsm-s3',
        name: 'Resource3',
        standard: 'standard3',
        structureMapper: 'structureMapper3',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        code: 'rsm-s4',
        name: 'Resource4',
        standard: 'standard4',
        structureMapper: 'structureMapper4',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        code: 'rsm-s5',
        name: 'Resource5',
        standard: 'standard5',
        structureMapper: 'structureMapper5',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        code: 'rsm-s6',
        name: 'Resource6',
        standard: 'standard6',
        structureMapper: 'structureMapper6',
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataNodeStructure = [
    {
        id: '1',
        code: 'nm-s1',
        name: 'Node1',
        structure: 'Resource1',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'nm-s2',
        name: 'Node2',
        structure: 'Resource2',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'nm-s3',
        name: 'Node3',
        structure: 'Resource3',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        code: 'nm-s4',
        name: 'Node4',
        structure: 'Resource4',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        code: 'nm-s5',
        name: 'Node5',
        structure: 'Resource5',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        code: 'nm-s6',
        name: 'Node6',
        structure: 'Resource6',
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataNodeResource = [
    {
        id: '1',
        status: 'nm-s1',
        name: 'NodeResource1',
        nodeStructure: 'Resource1',
        organization: 'Organization1',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        status: 'nm-s2',
        name: 'NodeResource1',
        nodeStructure: 'Resource2',
        organization: 'Organization2',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        status: 'nm-s3',
        name: 'NodeResource3',
        nodeStructure: 'Resource3',
        organization: 'Organization3',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        status: 'nm-s4',
        name: 'NodeResource4',
        nodeStructure: 'Resource4',
        organization: 'Organization4',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        status: 'nm-s5',
        name: 'NodeResource5',
        nodeStructure: 'Resource5',
        organization: 'Organization5',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        status: 'nm-s6',
        name: 'NodeResource5',
        nodeStructure: 'Resource5',
        organization: 'Organization6',
        creat_on: '2022-04-18T00:00:00'
    }
];

export const tableDataPatients = [
    {
        id: '1',
        code: 'nm-s1',
        identification: '34576978',
        identificationType: 'DNI',
        nodeRelation: 'nodeRelation1',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        code: 'nm-s2',
        identification: '234546567',
        identificationType: 'CI',
        nodeRelation: 'nodeRelation2',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        code: 'nm-s3',
        identification: '3456426',
        identificationType: 'PASSPORT',
        nodeRelation: 'nodeRelation3',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        code: 'nm-s4',
        identification: '54645362354',
        identificationType: 'DNI',
        nodeRelation: 'nodeRelation4',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        code: 'nm-s5',
        identification: '43256536',
        identificationType: 'DNI',
        nodeRelation: 'nodeRelation5',
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        code: 'nm-s6',
        identification: '123213',
        identificationType: 'CI',
        nodeRelation: 'nodeRelation6',
        creat_on: '2022-04-18T00:00:00'
    }
];


export const tableData = [
    {
        id: '1',
        name: 'Product Menu',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '2',
        name: 'Category Menu',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '3',
        name: 'Subcategory Menu',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '4',
        name: 'Sales  Menu',
        status: <i className="fa fa-circle font-danger f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '5',
        name: 'Vendor Menu',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2022-04-18T00:00:00'
    },
    {
        id: '6',
        name: 'Category Menu',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2022-04-18T00:00:00'
    }
];


