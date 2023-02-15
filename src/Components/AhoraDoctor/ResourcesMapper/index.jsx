import React, { Fragment, useState, useCallback, useMemo } from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { tableDataResourceMapper } from '../../../Data/DummyTableData';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Breadcrumbs, H5 } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import TooltipForm from './TooltipForm';

const ResourcesMapper = () => {

  const [data, setData] = useState(tableDataResourceMapper);
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
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: 'Mapper Stype',
      selector: (row) => row.mapperStype,
      sortable: true,
      center: true,
    },
    {
      name: 'Endpoint',
      selector: (row) => row.endpoint,
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
      <Breadcrumbs parent="Menu" title="Resources Mapper" mainTitle="Resources Mapper" />
      <Container fluid={true} className="datatables">
        <Row>
          <Col sm="12">
          <Card>
            <CardHeader className="pb-0">
                <H5>Create a new Structure Mapper</H5>
            </CardHeader>
            <CardBody>
                <TooltipForm />
            </CardBody>
          </Card>
            <Card>
              <HeaderCard title="List of Resources Mapper" />
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

export default ResourcesMapper;