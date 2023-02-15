
import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row, Button } from 'reactstrap'
import { Btn } from '../../../AbstractElements';
import Select from 'react-select';
import { optionsUserProfiles, options2, options3, options4 } from '../../Forms/FormWidget/FormSelect2/OptionDatas';
import axios from 'axios';

const TooltipForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [validateClass, setValidateClass] = useState(false);

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
      .then(async(response) => {
        const profiles = await response.data;
        setProfiles(profiles);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(profiles)

  const onSubmit = (e, data) => {
    const {code, name} = e;
    console.log(e)
    if (data !== '') {
      axios.post(`https://healthbus-app.up.railway.app/api/companies/`, {name}).then(response => {
        console.log(response);
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
          {/* <Col md="4 mb-3">
            <Label>User Profile</Label>
            <Select
                    options={optionsUserProfiles}
                    className="js-example-basic-single col-sm-12"
                    {...register('userProfile', { required: true })} />
            <span>{errors.userProfile && 'User Profile is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col> */}
        </Row>
        <Btn attrBtn={{ color: 'primary', type: 'submit', onClick: setClickFunc }}>Save</Btn>
      </Form>
    </Fragment >
  );
};

export default TooltipForm;