import React, { useEffect, useState } from 'react'
import CandidateLanguageService from 'services/candidate/candidateLanguageService'
import { Formik, useFormik } from 'formik';
import LanguageLevelService from 'services/candidate/languageLevelService';
import { FormField, Dropdown, Form, Button,Input } from "semantic-ui-react";

import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useParams } from 'react-router';


export default function LanguageAdd() {

   let {id}= useParams()

    const [languageLevels, setLanguageLevels] = useState([]);

    let languageService = new CandidateLanguageService()

    useEffect(() => {
        let languageLevelService = new LanguageLevelService();
        languageLevelService.getLanguageLevel().then(result => setLanguageLevels(result.data.data))

    }, [])


    const levelOption = languageLevels.map((level, index) => ({
        key: index,
        text: level.name,
        value: level.id,
    }));

    const formik = useFormik({
        initialValues: {

            language: '',
            level: '',
            candidateId: id
        },

        validationSchema: Yup.object({
            language: Yup.string().required("Yabandı Dil Zorunludur."),
            level: Yup.number().required("Seviye Zorunludur."),
            candidateId: Yup.number().required("Candidate Zorunludur.")

        }),


        onSubmit: (values) => {

            let language = {

                language: values.language,
                languageLevel: { id: values.level }, 
                candidate: { id: values.candidateId }
            };
            languageService.add(language).then((result) => console.log(result.data.data));
            toast.success("Yabancı Dil Bilgii Eklendi.")

        }

    }
    )


    return (
        <div>

            <Formik>
                <Form className="ui form" 
                     onSubmit={formik.handleSubmit}>

                    <FormField >

                        <label>Dil İsmi: </label>
                        <Input id="language"
                            placeholder="Yabancı Dil..."
                            fluid
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.language}></Input>
                        {formik.errors.language && formik.touched.language && (
                            <p style={{ color: "red" }}>{formik.errors.language}</p>
                        )}
                    </FormField>

                    <FormField>
                        <label>Seviyeniz :</label>
                        <Dropdown
                            button
                            placeholder="Seviyeniz..."
                            fluid
                            search
                            selection
                            id="level"
                            options={levelOption}
                            onChange={(event, data) =>
                                formik.setFieldValue("level", data.value)
                            }

                            value={formik.values.level}
                        />
                        {formik.errors.level && formik.touched.level && (
                            <div className={"ui pointing red basic label"}>
                                {formik.errors.level}
                            </div>
                        )}
                    </FormField>
                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>
        </div>
    )
}
