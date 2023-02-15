import React, { Fragment, useState, useEffect, useCallback, useMemo } from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { tableDataUsersProfile } from '../../../Data/DummyTableData';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Breadcrumbs, H5 } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import TooltipForm from './TooltipForm';
import axios from "axios";

const UserProfiles = () => {

  const [data, setData] = useState(tableDataUsersProfile);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://healthbus-app.up.railway.app/api/user-profiles/",
      headers: {
        "accept": "*/*",
        //"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY3NDA2MDk2MH0.MYiJfg7Pf2ClLxDGZleZ63l0H5ynzWKHH7pGqV-DCOuMROuhA5Eo4g_fEdGAG6byzfX8HKdY8t9kOSYnaQQGJA"
      },
    };

    axios(options)
      .then((response) => {
        const profiles = response.data;
        setProfiles(profiles);
      })
      .catch((error) => console.log(error));
  }, []);

  const tableColumns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: 'User',
      selector: (row) => [row.user.firstName, , row.user.lastName],
      sortable: true,
      center: true,
    },
    {
      name: 'Company',
      selector: (row) => [row.companies[0].name],
      sortable: true,
      center: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      sortable: true,
      center: true,
    },
    {
      name: 'Email',
      selector: (row) => row.user.email,
      sortable: true,
      center: true,
    },
    // {
    //   name: 'Creat_on',
    //   selector: (row) => row.creat_on,
    //   sortable: true,
    //   center: true,
    // },
  ];
  
  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'name'));
        toast.success('Successfully Deleted !');
      }
    };

    return <button key="delete" className="btn btn-danger" onClick={handleDelete}>Delete</button>;
  }, [data, selectedRows, toggleCleared]);

  return (
    <Fragment>
      <Breadcrumbs parent="Menu" title="User Profiles" mainTitle="User Profiles" />
      <Container fluid={true} className="datatables">
        <Row>
          <Col sm="12">
          <Card>
            <CardHeader className="pb-0">
                <H5>Create a new User Profile</H5>
            </CardHeader>
            <CardBody>
                <TooltipForm />
            </CardBody>
          </Card>
            <Card>
              <HeaderCard title="List of User Profiles" />
              <CardBody>
                <DataTable
                  data={profiles}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  selectableRows
                  persistTableHead
                  contextActions={contextActions}
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};

export default UserProfiles;