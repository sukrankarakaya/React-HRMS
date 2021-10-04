import React from 'react'
import CandidateImageService from 'services/candidate/candidateImageService';

import { Formik, useFormik } from 'formik';
import { FormField, Form, Button, Input } from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
export default function ImageAdd() {

    let {id}=useParams()

    let imageService = new CandidateImageService()


    const formik = useFormik({
        initialValues: {

            image: '',
            candidateId: id
        },

        validationSchema: Yup.object().shape({
            image: Yup.mixed().required(),
        }),




        onSubmit: (values) => {

            let imege = {

                imageUrl: values.imege,
                candidate: { id: values.candidateId }
            };

            console.log(imege);
            imageService.add(imege).then((result) => console.log(result.data.data));
            toast.success("Fotoğraf Eklendi.")
        }

    })


    return (
        <div>
            <Formik>
                <Form className="ui form" 
                    onSubmit={formik.handleSubmit}>

                    <FormField >

                        <Input id="image"

                            type="file"
                            placeholder="Yetenek..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.image}></Input>
                        {formik.errors.image && formik.touched.image && (
                            <p style={{ color: "red" }}>{formik.errors.image}</p>
                        )}
                    </FormField>
                  

                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>
        </div>
    )
}
