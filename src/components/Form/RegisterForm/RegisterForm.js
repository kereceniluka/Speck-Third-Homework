import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormGeneralError,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';
import { PageTitle } from '../../../lib/styles/GeneralStyles';

// Services
import { registerUser } from '../../../services/register';

// Components
import LoadingIcon from '../../LoadingIcon/LoadingIcon';


const RegisterForm = (props) => {
    const history = useHistory();
    const { register, handleSubmit, setValue, errors } = useForm({
        validateCriteriaMode: 'all',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const onSubmit = data => {
        setIsLoading(true);
        registerUser(data)
            .then(res => {
                if(res.message) {
                    setIsLoading(false);
                    setValue('username', data.username);
                    setValue('password', data.password);
                    setError('Username already exists.');
                }else {
                    history.push('/login');
                }
            });
    }

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <PageTitle>Registration</PageTitle>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput type="text" name="username" ref={register({ required: true, minLength: 5 })} />
                {errors.username && errors.username.type === 'required' && (<FormInputValidation>Please fill out this field.</FormInputValidation>)}
                {errors.username && errors.username.type === 'minLength' && (<FormInputValidation>Username should be at least 5 characters long.</FormInputValidation>)}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" name="password" ref={register({ required: true, minLength: 8 })} />
                {errors.password && errors.password.type === 'required' && (<FormInputValidation>Please fill out this field.</FormInputValidation>)}
                {errors.password && errors.password.type === 'minLength' && (<FormInputValidation>Username should be at least 8 characters long.</FormInputValidation>)}
                {error && <FormGeneralError>{error}</FormGeneralError>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {isLoading ? 
                <>
                    <FormSubmitSuccess>Successfull registration, soon you will be redirected to login!</FormSubmitSuccess>
                    <LoadingIcon/>
                </> 
                : registerForm }
        </>
    );
}

export default RegisterForm;