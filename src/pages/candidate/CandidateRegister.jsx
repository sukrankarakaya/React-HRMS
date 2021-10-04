import { Formik, useFormik } from 'formik';
import React from 'react'

import * as Yup from "yup";
import { FormField, Form, Button, Input, Card, Checkbox, Icon, Header, Label } from "semantic-ui-react";

import { toast } from 'react-toastify';
import CandidateService from 'services/candidate/candidateService'
import { Link, NavLink } from 'react-router-dom';

export default function CandidateRegister() {

    let candidateService = new CandidateService();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            identityNumber: '',
            birthDate: '',
            password: '',
            isChackPassword: '',

        },
        validationSchema: Yup.object({
            firstName: Yup.string().required(" Ad Bilginiz Zorunludur."),
            lastName: Yup.string().required("Soyad Bilginiz Zorunludur."),
            identityNumber: Yup.number().required("Tc. No/Pasaport No Zorunludur."),
            password: Yup.number().required("Şifre Zorunludur."),
            isChackPassword: Yup.number().required("Şifre Tekrarı Şifreyle Aynı Olmak Zorundadır."),
            email: Yup.string().required("Mail Bilgisi Zorunludur."),
            birthDate: Yup.date().required("Dogum Tarihi Bilgisi Zorunludur."),
        }),


        onSubmit: (values) => {
            let candidate = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                identityNumber: values.identityNumber,
                birthDate: values.birthDate,
                password: values.password,
                isChackPassword: values.isChackPassword,
            }

            candidateService.add(candidate).then((result) => console.log(result.data.data));
            toast.success("Sisteme Başarıyla Kaydoldunuz.")


        }



    })

    return (
        <div>
            {/* </div> <Segment style={{ height: "55em", backgroundColor: "grey", with: "4em" }}> */}

            <Card style={{ backgroundColor: "#6372f2d4", height: "65em", width: "35em", left: "25em" }} >


                <Formik style={{ right: "5em" }}>
                    <Form className="ui form"
                        onSubmit={formik.handleSubmit}
                        style={{ marginTop: "3em", marginBlockEnd: "30em", width: "25em", height: "10em", left: "5em" }}
                    >
                    
                     
                        <FormField >
                            <label>Adınız: </label>
                            <Input id="firstName" placeholder="Adınız..."
                                onChange={formik.handleChange} value={formik.values.firstName}></Input>
                            {formik.errors.firstName && formik.touched.firstName && (
                                <p style={{ color: "red" }}>{formik.errors.firstName}</p>
                            )}
                        </FormField>

                        <FormField>
                            <label>Soyadınız:</label>
                            <Input id="lastName"
                                placeholder="Soyadınız..."

                                onChange={formik.handleChange} value={formik.values.lastName}></Input>
                            {formik.errors.lastName && formik.touched.lastName && (
                                <p style={{ color: "red" }}>{formik.errors.lastName}</p>
                            )}
                        </FormField>
                        <FormField>
                            <label>E-Mail:</label>
                            <Input id="email"
                                placeholder="Email..."


                                onChange={formik.handleChange} value={formik.values.email}></Input>
                            {formik.errors.email && formik.touched.email && (
                                <p style={{ color: "red" }}>{formik.errors.email}</p>
                            )}
                        </FormField>
                        <FormField>
                            <label>Tc No/Pasaport No: </label>
                            <Input id="identityNumber"
                                placeholder="Tc No/Pasport No..."

                                onChange={formik.handleChange} value={formik.values.identityNumber}></Input>
                            {formik.errors.identityNumber && formik.touched.identityNumber && (
                                <p style={{ color: "red" }}>{formik.errors.identityNumber}</p>
                            )}
                        </FormField>

                        <FormField>
                            <label>Dogum Tarihiniz: </label>
                            <Input type="date" id="birthDate"
                                placeholder="Dogum Tarihiniz..."


                                onChange={formik.handleChange} value={formik.values.birthDate}></Input>
                            {formik.errors.birthDate && formik.touched.birthDate && (
                                <p style={{ color: "red" }}>{formik.errors.birthDate}</p>
                            )}
                        </FormField>

                        <FormField>
                            <label>Şifre:</label>
                            <Input id="password"
                                placeholder="Şifre..."


                                onChange={formik.handleChange} value={formik.values.password}></Input>
                            {formik.errors.password && formik.touched.password && (
                                <p style={{ color: "red" }}>{formik.errors.password}</p>
                            )}
                        </FormField>
                        <FormField>
                            <label>Şifre Tekrarı:</label>
                            <Input id="isChackPassword"
                                placeholder="Şifre Tekrarı..."

                                onChange={formik.handleChange} value={formik.values.isChackPassword}></Input>
                            {formik.errors.isChackPassword && formik.touched.isChackPassword && (
                                <p style={{ color: "red" }}>{formik.errors.isChackPassword}</p>
                            )}
                        </FormField>

                        <Checkbox label="Gizlilik Sözleşmesi ve Üyelik Sözleşmesi 'ni okudum kabul ediyorum ve KVKK Metni'ni okudum, anladım." />
                        <br /><br />
                        <Button circular fluid color="red" as={NavLink} to="/employerRegister" type="submit">İş Veren Olarak Kayıt Ol</Button>
                       
                        <Button circular fluid color="blue" type="submit">Kayıt Ol</Button>
                        <br />
                        <label>
                            Zaten üye misin? <Link to="/login" style={{ color: "#001dba" }}>Giriş Yap</Link>
                        </label>
                        

                    </Form>


                </Formik>
            </Card>



            {/* </Segment> */}

        </div>
    )
}
