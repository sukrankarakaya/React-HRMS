import React from 'react'
import { Formik, useFormik } from 'formik';
import { FormField, Form, Button, Input } from "semantic-ui-react";

import * as Yup from "yup";
import { toast } from 'react-toastify';
import CandidateSocialMediaService from 'services/candidate/candidateSocialMediaService';
import { useParams } from 'react-router';



export default function SocialMediaAdd() {

    let {id}=useParams() 
    let socialMediaService = new CandidateSocialMediaService()


    const formik = useFormik({
        initialValues: {

            gitHubLink: '',
            linkedinLink: '',
            candidateId: id
        },

        validationSchema: Yup.object({

            gitHubLink: Yup.string().required("Github Linki Zorunludur."),
            linkedinLink: Yup.string().required("Linkedin Linki Zorunludur."),
            candidateId: Yup.number().required("Candidate Zorunludur.")


        }),




        onSubmit: (values) => {

            let socialMedia = {

                githubLink: values.gitHubLink,
                linkedinLink: values.linkedinLink,

                candidate: { id: values.candidateId }
            };

            console.log(socialMedia);
            socialMediaService.add(socialMedia).then((result) => console.log(result.data.data));
            toast.success("Okul Bilgii Eklendi.")

        }

    }
    )


    return (
        <div>
            <Formik>
                <Form className="ui form"
                    onSubmit={formik.handleSubmit}>

                    <FormField >

                        <label>Linkedin Adresi:</label>
                        <Input id="linkedinLink"
                            placeholder="Linkedin..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.linkedinLink}></Input>
                        {formik.errors.linkedinLink && formik.touched.linkedinLink && (
                            <p style={{ color: "red" }}>{formik.errors.linkedinLink}</p>
                        )}
                    </FormField>

                    <FormField>
                        <label>GitHub Adresi:</label>
                        <Input id="gitHubLink"
                            placeholder="GitHub..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.gitHubLink}></Input>
                        {formik.errors.gitHubLink && formik.touched.gitHubLink && (
                            <p style={{ color: "red" }}>{formik.errors.gitHubLink}</p>
                        )}
                    </FormField>




                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>
        </div>
    )
}
