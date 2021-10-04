import React from 'react'
import * as Yup from "yup";
import { FormField, Form, Button, Input } from "semantic-ui-react";
import EmployerService from 'services/employerService'
import { Formik, useFormik } from 'formik';
import { toast } from 'react-toastify';



export default function AddEmployer() {

    let employerService = new EmployerService();

    const formik = useFormik({
        initialValues: {

            companyName: '',
            webAdress: '',
            phoneNumber: '',
            password: '',
            isChackPassword: '',
            email: ''

        },


        validationSchema : Yup.object({
            companyName: Yup.string().required("Firma Adı Zorunludur."),
            webAdress: Yup.string().required("Web Sitesi Zorunludur."),
            phoneNumber: Yup.number().required("Telefon Numarası Zorunludur."),
            password: Yup.number().required("Şifre Zorunludur."),
            isChackPassword: Yup.number().required("Şifre Tekrarı Şifreyle Aynı Olmak Zorunludur."),
            email: Yup.string().required("Mail Bilgisi Zorunludur.")

        }),

        onSubmit: (values) => {
            let employer = {
                companyName: values.companyName,
                webAdress: values.webAdress,
                email: values.email,
                phoneNumber: values.phoneNumber,
                password: values.password,
                isChackPassword: values.isChackPassword,

            }
            employerService.add(employer).then((result) => console.log(result.data.data));
            toast.success("Employer Eklendi Eklendi.")
            window.location.reload()
        }
    })


    return (
        <div>
            <Formik>
                <Form className="ui form"
                 onSubmit={formik.handleSubmit}
                // style={{ marginTop: "5em", marginBlockEnd: "30em", width: "20em", height: "2.5em" }}
                 >
                        <FormField >

                            <label>Firma Adı:</label>
                            <Input id="companyName" placeholder="Firma Adı..." fluid style={{ marginRight: "1em", marginTop: "1em" }}

                                onChange={formik.handleChange} value={formik.values.companyName}></Input>
                            {formik.errors.companyName && formik.touched.companyName && (
                                <p style={{ color: "red" }}>{formik.errors.companyName}</p>
                            )}
                        </FormField>

                        <FormField>
                        <label>Web Sitesi:</label>
                            <Input id="webAdress"
                                placeholder="Web Adresi..."
                                fluid
                                style={{ marginRight: "1em", marginTop: "1em" }}

                                onChange={formik.handleChange} value={formik.values.webAdress}></Input>
                            {formik.errors.webAdress && formik.touched.webAdress && (
                                <p style={{ color: "red" }}>{formik.errors.webAdress}</p>
                            )}
                        </FormField>
                        <FormField>
                        <label>E-Mail:</label>
                            <Input id="email"
                                placeholder="Email..."
                                fluid
                                style={{ marginRight: "1em", marginTop: "1em" }}

                                onChange={formik.handleChange} value={formik.values.email}></Input>
                            {formik.errors.email && formik.touched.email && (
                                <p style={{ color: "red" }}>{formik.errors.email}</p>
                            )}
                        </FormField>
                        <FormField>
                        <label>Telefon Numarası:</label>
                            <Input id="phoneNumber"
                                placeholder="Telefon Numaranız..."
                                fluid
                                style={{ marginRight: "1em", marginTop: "1em" }}

                                onChange={formik.handleChange} value={formik.values.phoneNumber}></Input>
                            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                <p style={{ color: "red" }}>{formik.errors.phoneNumber}</p>
                            )}
                        </FormField>
                        <FormField>
                        <label>Şifre:</label>
                            <Input id="password"
                                placeholder="Şifre..."
                                fluid
                                style={{ marginRight: "1em", marginTop: "1em" }}

                                onChange={formik.handleChange} value={formik.values.password}></Input>
                            {formik.errors.password && formik.touched.password && (
                                <p style={{ color: "red" }}>{formik.errors.password}</p>
                            )}
                        </FormField>
                        <FormField>
                        <label>Şifre Tekrarı:</label>
                            <Input id="isChackPassword"
                                placeholder="Şifre Tekrarı..."
                                fluid
                                style={{ marginRight: "1em", marginTop: "1em" }}

                                onChange={formik.handleChange} value={formik.values.isChackPassword}></Input>
                            {formik.errors.isChackPassword && formik.touched.isChackPassword && (
                                <p style={{ color: "red" }}>{formik.errors.isChackPassword}</p>
                            )}
                        </FormField>
                        

                        <Button color="green" type="submit">Ekle</Button>

                    </Form>

            </Formik>
        </div>
            )
}
