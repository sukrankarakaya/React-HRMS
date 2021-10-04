import React from 'react'

import { Formik, useFormik } from 'formik';
import { FormField, Form, Button, Input } from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import CandidateTechnologyService from 'services/candidate/candidateTegnologyService';
import { useParams } from 'react-router';


export default function TechnologyAdd() {

    let {id}=useParams()
    
    let technologyService = new  CandidateTechnologyService()


    const formik = useFormik({
        initialValues: {

            technology: '',
            candidateId: id
        },

        validationSchema: Yup.object({

            technology: Yup.string().required("Yetenek Bilgisi Zorunludur."),
            candidateId: Yup.number().required("Candidate Zorunludur.")


        }),




        onSubmit: (values) => {

            let technology = {

                technologyName: values.technology,
               
                candidate: { id: values.candidateId }
            };

            console.log(technology);
            technologyService.add(technology).then((result) => console.log(result.data.data));
            toast.success("Yetenek Bilgisi Eklendi.")

        }

    }
    )


    return (
        <div>
            <Formik>
                <Form className="ui form" 
                    onSubmit={formik.handleSubmit}>

                    <FormField >

                        <label>Yetenekleriniz:</label>
                        <Input id="technology"
                         
                            placeholder="Yetenek..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.technology}></Input>
                        {formik.errors.technology && formik.touched.technology && (
                            <p style={{ color: "red" }}>{formik.errors.technology}</p>
                        )}
                    </FormField>

                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>
            
        </div>
    )
}
