import React from 'react'

import { Formik, useFormik } from 'formik';
import CandidateExperianceService from 'services/candidate/CandidateExperianceService';
import { FormField,  Form, Button, Input } from "semantic-ui-react";

import { toast } from 'react-toastify';
import { useParams } from 'react-router';





export default function ExperianceAdd() {

    let {id}=useParams()

    let experianceService = new CandidateExperianceService();


    const formik = useFormik({
        initialValues: {

            workPlace: "",
            position: "",
            startDate: "",
            endDate: "",
            candidateId: id

        },

        onSubmit: (values) => {

            let experiance = {

                workPlace: values.workPlace,
                position: values.position,
                startDate: values.startDate,
                endDate: values.endDate,
                candidate: { id: values.candidateId }
            };
            experianceService.add(experiance).then((result) => console.log(result.data.data));
            toast.success("Yabancı Dil Bilgii Eklendi.")
            window.location.reload()

        }

    })


    return (
        <div>
            <Formik>
                <Form className="ui form" 
                    onSubmit={formik.handleSubmit}>

                    <FormField >

                        <label>Maksimum Maaş</label>
                        <Input id="workPlace"
                            placeholder="Yabancı Dil..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.workPlace}></Input>
                        {formik.errors.workPlace && formik.touched.workPlace && (
                            <p style={{ color: "red" }}>{formik.errors.workPlace}</p>
                        )}
                    </FormField>
                    <FormField >

                        <label>Maksimum Maaş</label>
                        <Input id="position"
                            placeholder="Yabancı Dil..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.position}></Input>
                        {formik.errors.position && formik.touched.position && (
                            <p style={{ color: "red" }}>{formik.errors.position}</p>
                        )}
                    </FormField>
                    <FormField >

                        <label>Maksimum Maaş</label>
                        <Input id="startDate"
                            type="date"
                            placeholder="Yabancı Dil..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.startDate}></Input>
                        {formik.errors.startDate && formik.touched.startDate && (
                            <p style={{ color: "red" }}>{formik.errors.startDate}</p>
                        )}
                    </FormField>
                    <FormField >

                        <label>Maksimum Maaş</label>
                        <Input id="endDate"
                            type="date"
                            placeholder="Yabancı Dil..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.endDate}></Input>
                        {formik.errors.endDate && formik.touched.endDate && (
                            <p style={{ color: "red" }}>{formik.errors.endDate}</p>
                        )}
                    </FormField>


                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>
        </div>
    )
}
