import React, { Fragment, useState, useCallback, useMemo } from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { tableDataPatients } from '../../../Data/DummyTableData';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Breadcrumbs, H5 } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import TooltipForm from './TooltipForm';

const Patients = () => {

  const [data, setData] = useState(tableDataPatients);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const tableColumns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: 'Code',
      selector: (row) => row.code,
      sortable: true,
      center: true,
    },
    {
      name: 'Identification',
      selector: (row) => row.identification,
      sortable: true,
      center: true,
    },
    {
      name: 'Identification Type',
      selector: (row) => row.identificationType,
      sortable: true,
      center: true,
    },
    {
      name: 'Node Relation',
      selector: (row) => row.nodeRelation,
      sortable: true,
      center: true,
    },
    {
      name: 'Creat_on',
      selector: (row) => row.creat_on,
      sortable: true,
      center: true,
    },
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
      <Breadcrumbs parent="Menu" title="Patients" mainTitle="Patients" />
      <Container fluid={true} className="datatables">
        <Row>
          <Col sm="12">
          <Card>
            <CardHeader className="pb-0">
                <H5>Create a new Patient</H5>
            </CardHeader>
            <CardBody>
                <TooltipForm />
            </CardBody>
          </Card>
            <Card>
              <HeaderCard title="List of Patients" />
              <CardBody>
                <DataTable
                  data={data}
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

export default Patients;