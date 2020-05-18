import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../lib/context/AuthContext';

import {
    Form,
    FormAdditionalLink,
    FormInputValidation,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

// Services
import { loginUser } from '../../../services/login';
import { PageTitle } from '../../../lib/styles/GeneralStyles';

// Components
import LoadingIcon from '../../LoadingIcon/LoadingIcon';


const LoginForm = (props) => {
    const history = useHistory();
    const { register, handleSubmit, setValue, errors } = useForm();
    const [isAuth, setIsAuth] = useContext(AuthContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmit = data => {
        setIsLoading(true);
        loginUser(data)
            .then(res => {
                if(res.message && res.token) {
                    localStorage.setItem('token', `${res.token}`);
                    setIsAuth(true);
                    history.push('/');
                } else {
                    setIsLoading(false);
                    setIsAuth(false);
                    setValue('username', data.username);
                    setValue('password', data.password);
                    setError('Incorrect username or password.');
                }
            });
    }

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <PageTitle>Login</PageTitle>
                <FormAdditionalLink to="/registration">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" name="username" ref={register({ required: true })} />
                {errors.username && <FormInputValidation>Please fill out this field.</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" name="password" ref={register({ required: true })} />
                {errors.password && <FormInputValidation>Please fill out this field.</FormInputValidation>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
            {error && <FormGeneralError>{error}</FormGeneralError>}
        </Form>;

    return (
        <>
            {isLoading ? 
                <>
                    <FormSubmitSuccess>Successfull login, soon you will be redirected to homepage!</FormSubmitSuccess>
                    <LoadingIcon/>
                </> 
                : loginForm }
        </>
    );
}

export default LoginForm;