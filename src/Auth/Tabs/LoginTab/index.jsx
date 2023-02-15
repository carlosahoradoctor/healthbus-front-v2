import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../../AbstractElements';
import { EmailAddress, ForgotPassword, LoginWithJWT, Password, RememberPassword, SignIn } from '../../../Constant';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { firebase_app, Jwt_token } from '../../../Config/Config';
import man from '../../../assets/images/dashboard/1.png';
import { handleResponse } from '../../../Services/fack.backend';
import SocialAuth from './SocialAuth';

const LoginTab = ({ selected }) => {
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('test123');
    const [loading, setLoading] = useState(false);
    const [togglePassword, setTogglePassword] = useState(false);
    const history = useNavigate();

    const [value, setValue] = useState(
        localStorage.getItem('profileURL' || man)
    );
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('profileURL', value);
        localStorage.setItem('Name', name);
    }, [value, name]);

    const loginAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setValue(man);
        setName('Emay Walter');
        setEmail('test@gmail.com');
        setPassword('test123');
        try {
            await firebase_app.auth().signInWithEmailAndPassword(email, password).then(function () {
                setValue(man);
                setName('Emay Walter');
                setTimeout(() => {
                    history(`${process.env.PUBLIC_URL}/dashboard/default`);
                }, 200);
            });
        } catch (error) {
            setTimeout(() => {
                setLoading(false);
                toast.error('Oppss.. The password is invalid or the user does not have a password.');
            }, 200);
        }
    };

    const loginWithJwt = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: ({ email, password })
        };

        return fetch('/users/authenticate', requestOptions)
            .then(handleResponse)
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                setValue(man);
                setName('Emay Walter');
                localStorage.setItem('token', Jwt_token);
                window.location.href = `${process.env.PUBLIC_URL}/dashboard/default`;
                return user;
            });
    };


    return (
        <Fragment>
            <Form className="theme-form">
                <H4>{selected === 'firebase' ? 'Sign In With Firebase' : 'Sign In With Jwt'}</H4>
                <P>{'Enter your email & password to login'}</P>
                <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" required="" onChange={e => setEmail(e.target.value)} defaultValue={email} />
                </FormGroup>
                <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <Input className="form-control" type={togglePassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} defaultValue={password} required="" />
                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? '' : 'show'}></span></div>
                </FormGroup>
                <div className="form-group mb-0">
                    <div className="checkbox ms-3">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                    </div><a className="link" href="#javascript">{ForgotPassword}</a>
                    {selected === 'firebase' ?
                        <Btn attrBtn={{ color: 'primary', className: 'btn-block', disabled: loading ? loading : loading, onClick: (e) => loginAuth(e) }} >{loading ? 'LOADING...' : SignIn}</Btn>
                        :
                        <Btn attrBtn={{ color: 'primary', className: 'btn-block', disabled: loading ? loading : loading, onClick: (e) => loginWithJwt(e) }} >{loading ? 'LOADING...' : LoginWithJWT}</Btn>
                    }
                </div>
                <SocialAuth />
            </Form>
        </Fragment>
    );
};

export default LoginTab;