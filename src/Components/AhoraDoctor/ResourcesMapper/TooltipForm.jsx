import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { Btn } from '../../../AbstractElements';
import Select from 'react-select';
import { mapperStype, fhirResource, fhirResourceFile, options4 } from '../../Forms/FormWidget/FormSelect2/OptionDatas';
import ReactJson from 'react-json-view-key-select';
import DragAndDrop from '../../../CommonElements/DragNDrop';

const TooltipForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validateClass, setValidateClass] = useState(false);
  const onSubmit = (e, data) => {
    // e.preventDefault();
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
    return false;
  };

  const myData = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: {
      k1: 'val12',
      k2: {
        p1: 'v1',
        p2: 'v2',
        p3: 'v3',
      },
    },
  };

  const setClickFunc = () => {
    setValidateClass(!validateClass)
  }

  return (
    <Fragment>
      <Form className={`needs-validation tooltip-validation ${validateClass ? 'validateClass' : ''}`} noValidate="" onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col md="4 mb-3">
            <Label>Code</Label>
            <input className="form-control" name="code" type="text" placeholder="Code" {...register('code', { required: true })} />
            <span>{errors.code && 'Code is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Name</Label>
            <input className="form-control" name="name" type="text" placeholder="Name" {...register('name', { required: true })} />
            <span>{errors.name && 'Name is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Mapper Stype</Label>
            <Select
                    options={mapperStype}
                    className="js-example-basic-single col-sm-12"
                    {...register('mapperStype', { required: true })} />
            <span>{errors.mapperStype && 'Mapper Stype is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="6 mb-3">
            <Label>Endpoint</Label>
            <input className="form-control" name="endpoint" type="url" placeholder="Endpoint" {...register('endpoint', { required: true })} />
            <span>{errors.endpoint && 'Endpoint is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="4 mb-3">
            <Label>Structure Body</Label>
            <Input className="custom-file-input" id="validatedCustomFile" type="file" required="" {...register('structureBody', { required: true })} />
            <span>{errors.structureBody && 'Structure Body is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
            <div className="invalid-feedback">{"Example invalid custom file feedback"}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>FHIR Resource</Label>
            <Select
                    options={fhirResource}
                    className="js-example-basic-single col-sm-12"
                    {...register('fhirResource', { required: true })} />
            <span>{errors.fhirResource && 'FHIR Resource is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>FHIR Resource File</Label>
            <Select
                    options={fhirResourceFile}
                    className="js-example-basic-single col-sm-12"
                    {...register('fhirResourceFile', { required: true })} />
            <span>{errors.fhirResourceFile && 'FHIR Resource File is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="6 mb-2">
            <Label>Este es el recurso o bundle a utilizar</Label>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="4 mb-3">
              <Label>Esta es tu estructura</Label>
              {/* <ReactJson src={myData} /> */}
              <DragAndDrop/>
          </Col>
        </Row>
        <Btn attrBtn={{ color: 'primary', type: 'submit', onClick: setClickFunc }}>Save</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;