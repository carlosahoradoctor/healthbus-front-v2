import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { Btn } from '../../../AbstractElements';
import Select from 'react-select';
import { structures, options2, options3, options4 } from '../../Forms/FormWidget/FormSelect2/OptionDatas';


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
            <Label>Structure</Label>
            <Select
                    options={structures}
                    className="js-example-basic-single col-sm-12"
                    {...register('structure', { required: true })} />
            <span>{errors.structure && 'Structure is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>
        <Btn attrBtn={{ color: 'primary', type: 'submit', onClick: setClickFunc }}>Save</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;