import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';
import React from 'react'

import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormGroup, Segment, Button } from 'semantic-ui-react';
import EmployerService from 'services/employerService'
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';

export default function UpdateEmployer({
    id,
    companyName,
    webAdress,
    phoneNumber,
    password,
    isChackPassword,
    email,
}) {

    const { authItems } = useSelector(state => state.auth)



    let employerService = new EmployerService();

    const initialValues = {
        companyName: companyName,
        webAdress: webAdress,
        phoneNumber: phoneNumber,
        password: password,
        isChackPassword: isChackPassword,
        email: email
    }

    const onSubmit = (values) => {
        values.id = id;
        employerService.update(values).then((result) => console.log(result.data.data),
            toast.success("İş Veren Bilgisi Güncellendi."),
            
          
        )
        
         window.location.reload()
    }
render()
    
    return (
        <div>

            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Segment color="blue">
                    <Form >
                        <FormGroup widths="equal" >

                            <HrmsTexInput name="companyName" type="text" />
                            <br />
                            <HrmsTexInput name="webAdress" type="text" />
                            <br />
                            <HrmsTexInput name="phoneNumber" />
                            <br />
                            <HrmsTexInput name="email" type="email" />
                            <br />

                            <Button color="blue" as={NavLink} to="/"> 
                            Güncelle
                           </Button>

                        <br />

                    </FormGroup>

                </Form>
            </Segment>
        </Formik>
        </div >
    )
}

