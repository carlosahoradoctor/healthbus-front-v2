import React, { useState,Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { Btn } from '../../../AbstractElements';
import { FirstName, LastName, Username, State, City, Zip, SubmitForm } from '../../../Constant'
import axios from 'axios';

const TooltipForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validateClass, setValidateClass] = useState(false);

  const onSubmit = (e, data) => {
    const{code, name, version} = e;
    // e.preventDefault();
    if (data !== '') {
      axios.post(`https://healthbus-app.up.railway.app/api/standards/`, {code, name, version}).then(response => {
        console.log('[Standars response]', response);
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
      alert('You submitted the form and stuff!');
      window.location.reload();
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
          {/* <Col md="4 mb-3">
            <Label>Code</Label>
            <input className="form-control" name="code" type="text" placeholder="Code" {...register('code', { required: true })} />
            <span>{errors.code && 'Code is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col> */}
          <Col md="4 mb-3">
            <Label>Name</Label>
            <input className="form-control" name="name" type="text" placeholder="Name" {...register('name', { required: true })} />
            <span>{errors.name && 'Name is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Version</Label>
            <input className="form-control" name="version" type="text" placeholder="Version" {...register('version', { required: true })} />
            <span>{errors.version && 'Version is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>
        <Btn attrBtn={{ color: 'primary', type: 'submit', onClick: setClickFunc }}>Save</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;