import React from 'react'
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { Formik ,Form} from "formik";
import {  FormGroup, Button, Segment} from "semantic-ui-react";
import { toast } from "react-toastify";
import CandidateService from 'services/candidate/candidateService'

export default function CandidateUpdate({
    id,
    birthDate,
    firstName,
    lastName,
    email

}) {


    let candidateService = new CandidateService();

    const initialValues = {
       
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        email: email
    }


    const onSubmit = (values) => {

        values.id = id;
        candidateService.update(values).then((result) => console.log(result.data.data),
            toast.success("Deneyim Bilgisi Güncellendi"),
            window.location.reload());


    }


    return (
        <div>
             <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Segment color="blue">
                    <Form  >
                        <FormGroup widths="equal" >
                              
                                <HrmsTexInput rows={2}

                                    name="firstName"
                                    type="text"
                                    
                                />
                                <br />

                                <HrmsTexInput rows={2}

                                    name="lastName"
                                    type="text"

                                />  <br />
                                <HrmsTexInput

                                    name="birthDate"
                                    type="date"

                                />  <br />
                                <HrmsTexInput
                                    name="email"
                                    type="email"

                                />
                                <br />
                                <Button color="blue">
                                    Güncelle
                                </Button>

                               <br />

                        </FormGroup>

                    </Form>
                </Segment>
            </Formik>

        </div>
    )
}
