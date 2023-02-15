import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { Btn } from '../../../AbstractElements';
import Select from 'react-select';
import { optionsUsers, options2, options3, options4 } from '../../Forms/FormWidget/FormSelect2/OptionDatas';
import axios from 'axios';
import { split } from 'react-ace';

const TooltipForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validateClass, setValidateClass] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://healthbus-app.up.railway.app/api/companies/",
      headers: {
        "accept": "*/*",
      },
    };

    axios(options)
      .then(async (response) => {
        const companies = await response.data;
        setCompanies(companies);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (e, data) => {
    const {firstName, lastName, username, phone, email, password, company} = e;
    const companyDetail = company.split(',');
    // e.preventDefault();

    const usernameProfile = e.username;
    const firstNameProfile = e.firstName;
    const lastNameProfile = e.lastName;
    const emailProfile = e.email;

    const companyId =companyDetail[0];
    const companyName = companyDetail[1];

    if (data !== '') {
      axios.post(`https://healthbus-app.up.railway.app/api/users/`, {firstName, lastName, username, email, password}).then(response => {
        console.log(response);
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });

      axios.post(`https://healthbus-app.up.railway.app/api/user-profiles/`, {phone, 
                                                                              'user': { 'username': usernameProfile, 
                                                                                        'firstName': firstNameProfile, 
                                                                                        'lastName': lastNameProfile, 
                                                                                        'email': emailProfile}, 
                                                                              'companies': [{'id': companyId, 
                                                                                            'name': companyName}]})
      .then(response => {
        console.log(response);
        console.log(response.data);
      }).catch(error => {
          console.log(error);
        });
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
              <Label>First Name</Label>
              <input className="form-control" name="firstName" type="text" placeholder="First Name" {...register('firstName', { required: true })} />
              <span>{errors.phone && 'First name is required'}</span>
              <div className="valid-feedback">{'Looks good!'}</div>
            </Col>
            <Col md="4 mb-3">
              <Label>Last Name</Label>
              <input className="form-control" name="lastName" type="text" placeholder="Last Name" {...register('lastName', { required: true })} />
              <span>{errors.phone && 'Last name is required'}</span>
              <div className="valid-feedback">{'Looks good!'}</div>
            </Col>
            <Col md="4 mb-3">
              <Label>User Name</Label>
              <input className="form-control" name="username" type="text" placeholder="User name" {...register('username', { required: true })} />
              <span>{errors.phone && 'User name is required'}</span>
              <div className="valid-feedback">{'Looks good!'}</div>
            </Col>
        </Row>
        <Row className="g-3">
          <Col md="4 mb-3">
            <Label>Phone</Label>
            <input className="form-control" name="phone" type="text" placeholder="Phone" {...register('phone', { required: true })} />
            <span>{errors.phone && 'Phone is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Email</Label>
            <input className="form-control" name="email" type="text" placeholder="Email" {...register('email', { required: true })} />
            <span>{errors.phone && 'Email is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>Password</Label>
            <input className="form-control" name="password" type="text" placeholder="password" {...register('password', { required: true })} />
            <span>{errors.phone && 'Password is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md="4 mb-3">
            <Label>Company</Label>
            <select className="form-control"
            {...register('company', { required: true })}>
              <option select="true" disabled={false}>-- Select Company --</option>
              {companies.map((result) => (<option title={"Company ID: " + result.id} key={result.id} value={[result.id, result.name]}>{result.name}</option>))}
            </select>
            <span style={{color: 'red'}}>{errors.company && 'Company is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
        </Row>

        {/* <Col md="4 mb-3">
            <Label>User</Label>
            <Select
                    options={companies.map(result => result.name )}
                    className="js-example-basic-single col-sm-12"
                    {...register('user', { required: true })} />
            <span>{errors.user && 'User is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col> */}

        <Btn attrBtn={{ color: 'primary', type: 'submit', onClick: setClickFunc }}>Save</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;