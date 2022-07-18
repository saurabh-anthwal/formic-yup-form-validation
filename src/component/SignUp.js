import React from 'react';
import {Form,Formik} from "formik";
import TextFeild from './TextFeild';
import * as Yup from "yup";

const SignUp = ( ) => {
    const validate = Yup.object({
        firstName:Yup.string()
        .max(15, 'Must be 15 charecter or less')
        .required("Required"),
        lastName:Yup.string()
        .max(15, 'Must be 20 charecter or less')
        .required("Required"),
        email:Yup.string()
        .email(15, 'Email is invalid')
        .required("Email Required"),
        password:Yup.string()
        .min(6, 'pass atleast 6 char')
        .required("Pass Required"),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'password must match')
        .required("confirm password is required"),
        
    })
  return (
    <Formik 
    initialValues={{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }}
    validationSchema={validate}
    >
        {Formik=>(
            <div>
                <h1 className="my-4 font-weight-bold-display-4" >Sign Up</h1>
                {console.log(Formik.values) }
                <Form>
                <TextFeild type="text"  label="First Name" name="first name"/>
                <TextFeild type="text"  label="Last Name" name="lastName"/>
                <TextFeild type="email"  label="Email" name="email"/> 
                <TextFeild type="password"  label="Password" name="password"/>
                <TextFeild type="password"  label="Confirm-Password" name="confirm-password"/>
                <button className='btn btn-dark mt-3' type='submit'>Register</button>
                <button className='btn btn-danger mt-3' type='reset'>Reset</button>
                </Form>
            </div>
        )}
    </Formik>
  )
}

export default SignUp