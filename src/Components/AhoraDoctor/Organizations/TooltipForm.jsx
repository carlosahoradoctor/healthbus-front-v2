import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { Btn } from '../../../AbstractElements';
import Select from 'react-select';
import { optionsCompanies, options2, options3, options4 } from '../../Forms/FormWidget/FormSelect2/OptionDatas';
import axios from 'axios';

const TooltipForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validateClass, setValidateClass] = useState(false);

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://healthbus-app.up.railway.app/api/user-profiles/",
      headers: {
        "accept": "*/*",
      },
    };

    axios(options)
      .then((response) => {
        const companies = response.data;
        // companies.map(company => {
        //   //console.log(company.companies[0].name)
        // })
        setCompanies(companies);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (e, data) => {
    e.preventDefault();
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
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
            <Label>Address</Label>
            <input className="form-control" name="address" type="text" placeholder="Address" {...register('address', { required: true })} />
            <span>{errors.address && 'Address is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="4 mb-3">
            <Label>City</Label>
            <input className="form-control" name="city" type="text" placeholder="City" {...register('city', { required: true })} />
            <span>{errors.address && 'City is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Country</Label>
            <input className="form-control" name="country" type="text" placeholder="Country" {...register('country', { required: true })} />
            <span>{errors.country && 'Country is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Company</Label>
            <Select
                    options={optionsCompanies}
                    className="js-example-basic-single col-sm-12"
                    {...register('company', { required: true })} />
            <span>{errors.company && 'Company is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          
          </Col>
        </Row>
        <Btn attrBtn={{ color: 'primary', type: 'submit', onClick: setClickFunc }}>Save</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;