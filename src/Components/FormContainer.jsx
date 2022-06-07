import React from 'react';
import '../stylesheets/FormContainer.css';
import { Formik, Form } from 'formik';

function FormContainer(){
    return(
        <Formik
            initialValues={{
                name: 'username',
                mail:'email'
            }}

            onSubmit = {() => {
                console.log ('formulario enviado');
            }}

        >
            {({ handleChange , handleBlur}) =>(
                <Form className = 'form' >
                    <div>
                        <label htmlFor='username'> Username</label>
                        <input 
                            type= 'text' 
                            id='name' 
                            name='name' 
                            placeholder = 'username'
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                        />
                    </div>

                    <div>
                        <label htmlFor ='email'> email</label>
                        <input 
                            type = 'email' 
                            id='name' name='name' 
                            placeholder = 'email'
                            onChange = {handleChange}
                            onBlur = {handleBlur}
                        /> 
                    </div>
                    <button type = 'submit'>Login</button>
                </Form>
            )}
        </Formik>

    );
}

export default FormContainer;

