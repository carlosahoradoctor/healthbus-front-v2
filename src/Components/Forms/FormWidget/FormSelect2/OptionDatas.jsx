export const options = [
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'WY', label: 'Coming' },
    { value: 'WY', label: 'Hanry Die' },
    { value: 'WY', label: 'John Doe' },
];

export const options2 = [
    { label: 'Developer', isDisabled: true },
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { label: 'Designer', isDisabled: true },
    { value: 'WY', label: 'Coming' },
    { value: 'WY', label: 'Hanry Die' },
    { value: 'WY', label: 'John Doe' },
];

export const options3 = [
    { value: 'AL', label: 'First' },
    { value: 'WY', label: 'Second', isDisabled: true },
    { value: 'WY', label: 'Third' },
];

export const options4 = [
    { label: 'Developer', isDisabled: true },
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'WY', label: 'Coming' },
    { value: 'WY', label: 'Hanry Die' },
    { value: 'WY', label: 'John Doe' },
];

export const optionsUsers = [
    {
        value: {
            user: {
                name: 'Ernesto'
            },
        }, label: 'Ernesto'
    },
    {
        value: {
            user: {
                name: 'Pedro'
            },
        }, label: 'Pedro'
    },
    {
        value: {
            user: {
                name: 'Juan'
            },
        }, label: 'Juan'
    },
    {
        value: {
            user: {
                name: 'Guillermo'
            },
        }, label: 'Guillermo'
    },
    {
        value: {
            user: {
                name: 'Emanuel'
            },
        }, label: 'Emanuel'
    },
];

export const optionsUserProfiles = [
    {
        value: {
            user: {
                name: 'Ernesto'
            },
            phone: '165345678',
        }, label: 'UserProfile2'
    },
    {
        value: {
            user: {
                name: 'Pedro'
            },
            phone: '165345678',
        }, label: 'UserProfile3'
    },
    {
        value: {
            user: {
                name: 'Juan'
            },
            phone: '165345678',
        }, label: 'UserProfile4'
    },
    {
        value: {
            user: {
                name: 'Guillermo'
            },
            phone: '165345678',
        }, label: 'UserProfile5'
    },
    {
        value: {
            user: {
                name: 'Emanuel'
            },
            phone: '165345678',
        }, label: 'UserProfile6'
    },
];

export const optionsCompanies = [
    {
        value: {
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
        }, label: 'Company1'
    },
    {
        value: {
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
        }, label: 'Company2'
    },
    {
        value: {
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
        }, label: 'Company3'
    },
    {
        value: {
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
        }, label: 'Company4'
    },
    {
        value: {
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
        }, label: 'Company5'
    },
];

export const mapperStype = [
    { value: 'REST', label: 'REST' },
    { value: 'SOAP', label: 'SOAP' }
];

export const fhirResource = [
    { value: 'Resource1', label: 'Resource1' },
    { value: 'Resource2', label: 'Resource2' },
    { value: 'Resource3', label: 'Resource3' },
    { value: 'Resource4', label: 'Resource4' }
];

export const fhirResourceFile = [
    { value: 'File1.json', label: 'File1.json' },
    { value: 'File2.json', label: 'File2.json' },
    { value: 'File3.json', label: 'File3.json' },
    { value: 'File4.json', label: 'File4.json' }
]

export const standards = [
    {
        value: {
            id: '1',
            code: 'aa-s1',
            name: 'Product Menu',
            version: '1.10',
            status: <i className="fa fa-circle font-success f-12" />,
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Product Menu'
    },
    {
        value: {
            id: '2',
            code: 'aa-s2',
            name: 'Category Menu',
            version: '1.10',
            status: <i className="fa fa-circle font-warning f-12" />,
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Category Menu'
    },
    {
        value: {
            id: '3',
            code: 'aa-s3',
            name: 'Subcategory Menu',
            version: '1.10',
            status: <i className="fa fa-circle font-success f-12" />,
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Subcategory Menu'
    },
    {
        value: {
            id: '4',
            code: 'aa-s4',
            name: 'Sales  Menu',
            version: '2',
            status: <i className="fa fa-circle font-danger f-12" />,
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Sales  Menu'
    },
    {
        value: {
            id: '5',
            code: 'aa-s5',
            name: 'Vendor Menu',
            version: '1.12',
            status: <i className="fa fa-circle font-success f-12" />,
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Vendor Menu'
    },
    {
        value: {
            id: '6',
            code: 'aa-s6',
            name: 'Category Menu',
            version: '1.11',
            status: <i className="fa fa-circle font-warning f-12" />,
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Category Menu'
    }
]

export const structureMapper = [
    {
        value: {
            id: '1',
            code: 'rm-s1',
            name: 'ResourceMapper1',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'ResourceMapper1'
    },
    {
        value: {
            id: '2',
            code: 'rm-s2',
            name: 'ResourceMapper2',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'ResourceMapper2'
    },
    {
        value: {
            id: '3',
            code: 'rm-s3',
            name: 'ResourceMapper3',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'ResourceMapper3'
    },
    {
        value: {
            id: '4',
            code: 'rm-s4',
            name: 'ResourceMapper4',
            mapperStype: 'SOAP',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'ResourceMapper4'
    },
    {
        value: {
            id: '5',
            code: 'rm-s5',
            name: 'ResourceMapper5',
            mapperStype: 'SOAP',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'ResourceMapper5'
    },
    {
        value: {
            id: '6',
            code: 'rm-s6',
            name: 'ResourceMapper6',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'ResourceMapper6'
    }
]

export const structures = [
    {
        value: {
            id: '1',
            code: 'rm-s1',
            name: 'Resource1',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Resource1'
    },
    {
        value: {
            id: '2',
            code: 'rm-s2',
            name: 'Resource2',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Resource2'
    },
    {
        value: {
            id: '3',
            code: 'rm-s3',
            name: 'Resource3',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Resource3'
    },
    {
        value: {
            id: '4',
            code: 'rm-s4',
            name: 'Resource4',
            mapperStype: 'SOAP',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Resource4'
    },
    {
        value: {
            id: '5',
            code: 'rm-s5',
            name: 'Resource5',
            mapperStype: 'SOAP',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Resource5'
    },
    {
        value: {
            id: '6',
            code: 'rm-s6',
            name: 'Resource6',
            mapperStype: 'REST',
            endpoint: 'https://developer.mozilla.org/en-US/search?q=URL',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'Resource6'
    }
]

export const nodeRelationStatus = [
    { value: 'ON', label: 'ON' },
    { value: 'OFF', label: 'OFF' },
    { value: 'PAUSE', label: 'PAUSE' }
];

export const optionsOrganizations = [
    {
        value: {
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
        }, label: 'Organization1'
    },
    {
        value: {
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
        }, label: 'Organization2'
    },
    {
        value: {
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
        }, label: 'Organiaztion3'
    },

];

export const identificationType = [
    { value: 'DNI', label: 'DNI' },
    { value: 'CI', label: 'CI' },
    { value: 'PASSPORT', label: 'PASSPORT' },
    { value: 'DRIVER_LICENSE', label: 'DRIVER_LICENSE' }
];

export const nodeRelations = [
    {
        value: {
            id: '1',
            status: 'nm-s1',
            name: 'NodeResource1',
            nodeStructure: 'Resource1',
            organization: 'Organization1',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'NodeResource1'
    },
    {
        value: {
            id: '2',
            status: 'nm-s2',
            name: 'NodeResource2',
            nodeStructure: 'Resource2',
            organization: 'Organization2',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'NodeResource2'
    },
    {
        value: {
            id: '3',
            status: 'nm-s3',
            name: 'NodeResource3',
            nodeStructure: 'Resource3',
            organization: 'Organization3',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'NodeResource3'
    },
    {
        value: {
            id: '4',
            status: 'nm-s4',
            name: 'NodeResource4',
            nodeStructure: 'Resource4',
            organization: 'Organization4',
            creat_on: '2022-04-18T00:00:00'
        }, label: 'NodeResource4'
    }
];