import React from 'react'
import { FormField, Form, Button, Input,  Card,  Icon } from "semantic-ui-react";

import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import AuthService from 'services/authService';
import { userLogin } from 'store/actions/userActions';
import { useDispatch } from 'react-redux';

export default function Login() {
     const dispatch = useDispatch()

    const handleLogin = (user)=>{

        dispatch(userLogin(user))
    }
    const history =useHistory();
    
    let authService = new AuthService();

    const formik = useFormik({
        initialValues: {
            password: '',
            email: ''

        },


        validationSchema : Yup.object({
            password: Yup.number().required("Lütfen Şifrenizi Girin."),
            email: Yup.string().required("Lütfen Mail Adresinizi Girin.")

        }),

        onSubmit: (values) => {
           
            authService.userLogin(values).then((result) => {handleLogin(result.data.data)});
            toast.success("Giriş Yapıldı.");
            history.push("/")
           
        }
    })




    return (
        <div>
            <Card style={{ backgroundColor: "#6372f2d4", height: "45em", width: "35em", left: "25em" }} >


                <Formik>
                    <Form className="ui form"
                     onSubmit={formik.handleSubmit}
                        style={{ marginTop: "3em", marginBlockEnd: "30em", width: "25em", height: "10em", left: "5em" }}
                    >
                        <FormField >

                            <FormField>
                                <label>E-Mail:</label>
                                <Input id="email"
                                    placeholder="Email..."
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                
                            </FormField>

                            <FormField>
                                <label>Şifre:</label>
                                <Input id="password" type="password"
                                    placeholder="Şifre..."
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                
                            </FormField>

                            <br /><br />
                            <Button circular fluid color="blue" type="submit">Giriş Yap</Button>
                         <br />
                            <label>
                                Hesabınız yok mu? <Link to="/candidateRegister" style={{ color: "#001dba" }}>Kayıt Ol</Link>
                            </label>
                            <br /><br />

                            <Button circular fluid inverted style={{ backgroundColor: "#dd4b39" }} >
                                <Icon name='google plus g' size="large" />
                                Google İle Giriş Yap
                            </Button>
                            <Button circular fluid inverted style={{ backgroundColor: "#2867b2" }} >
                                <Icon name='linkedin' size="large" />
                                Linkedin İle Giriş Yap
                            </Button>
                            <Button circular fluid inverted style={{ backgroundColor: "#313b87" }}>
                                <Icon name='facebook f' size="large" />
                                Facebook İle Giriş Yap
                            </Button>
                            <Button circular fluid inverted style={{ backgroundColor: "#1f6aed" }} >
                                <Icon name='twitter' size="large" />
                                Twitter İle Giriş Yap
                            </Button>

                        </FormField>
                    </Form>

                    </Formik>

                </Card>
            
      </div>
           
           
           
    )
}
