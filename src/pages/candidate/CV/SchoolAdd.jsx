import React from 'react'
import { Formik, useFormik } from 'formik';
import { FormField, Form, Button, Input } from "semantic-ui-react";

import * as Yup from "yup";
import { toast } from 'react-toastify';
import CandidateSchoolService from 'services/candidate/candidateSchoolService';
import { useParams } from 'react-router';


export default function SchoolAdd() {
    let {id}=useParams()
    

    let schoolService = new CandidateSchoolService()


    const formik = useFormik({
        initialValues: {

            schoolName: '',
            department: '',
            startDate: '',
            endDate: '',
            candidateId: id
        },

        validationSchema:Yup.object({

            schoolName:Yup.string().required("Okul Adı Zorunludur."),
            department: Yup.string().required("Bölüm Bilgisi Zorunludur."),
            startDate: Yup.string().required("Başlangıç Tarihi Zorunludur."),
            endDate: Yup.string().required("Bitiş Tarihi Zorunludur."),
            candidateId: Yup.number().required("Candidate Zorunludur.")


        }),

        


        onSubmit: (values) => {

            let school = {

                schoolName: values.schoolName,
                department: values.department,
                startDate: values.startDate,
                endDate: values.endDate,
                candidate: { id: values.candidateId }
            };
            schoolService.add(school).then((result) => console.log(result.data.data));
            console.log(school)
            toast.success("Okul Bilgii Eklendi.")
            window.location.reload()

        }

    }
    )


    return (
        <div>

            <Formik>
                <Form className="ui form"
                    onSubmit={formik.handleSubmit}>

                    <FormField >

                        <label>Okul Adı:</label>
                        <Input id="schoolName"
                            placeholder="Okul Adı..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.schoolName}></Input>
                        {formik.errors.schoolName && formik.touched.schoolName && (
                            <p style={{ color: "red" }}>{formik.errors.schoolName}</p>
                        )}
                    </FormField>

                    <FormField>
                    <label>Bölüm:</label>
                        <Input id="department"
                            placeholder="Bölümünüz..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.department}></Input>
                        {formik.errors.department && formik.touched.department && (
                            <p style={{ color: "red" }}>{formik.errors.department}</p>
                        )}
                    </FormField>
                    <FormField >

                        <label>Başlama Tarihi:</label>
                       
                        <Input type="date" 
                        id="startDate"
                         placeholder="Başlama Tarihi..."
                            fluid style={{ marginRight: "1em", marginTop: "1em" }}
                            onChange={formik.handleChange} value={formik.values.startDate}></Input>

                    
                        {formik.errors.startDate && formik.touched.startDate && (
                            <p style={{ color: "red" }}>{formik.errors.startDate}</p>
                        )}
                    </FormField>

                    <FormField>

                    <label>Mezuniyet Tarihi:</label>
                        <Input type="date" id="endDate" placeholder="Mezuniyet Tarihi..."
                        fluid style={{ marginRight: "1em", marginTop: "1em" }}
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
