import React, { useState, useEffect } from 'react'
import { Formik,  useFormik,Form } from "formik";
import {  FormField, Dropdown, Button, Segment,Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import CandidateLanguageService from 'services/candidate/candidateLanguageService';
import LanguageLevelService from 'services/candidate/languageLevelService';


export default function LanguageUpdate({
    id,
    language,
    levelId,
}) {


    let languageService = new CandidateLanguageService();

    const [languageLevels, setLanguageLevels] = useState([]);

    useEffect(() => {
        let languageLevelService = new LanguageLevelService();
        languageLevelService.getLanguageLevel().then((result) => setLanguageLevels(result.data.data));
        
    }, []);



    const languageLevelOptions = languageLevels.map((level) => ({
        key: level.id,
        text: level.name,
        value: level.id,
    }));


    const formik= useFormik({
         initialValues : {
            language: '',
            levelId: ''
        },
    
        onSubmit : (values) => {
        values.id=id
            console.log(values);

            let language = {

                language: values.language,
                languageLevel: { id: values.levelId },  // languageLevel objesinin içerisindeki id: ye values: den gelen level in idsini ata.
                id:  values.id 
            };


           
            languageService
                .update(language)
                .then(
                    (result) => console.log(result.data.data),
                    toast.success("Dil Bilgisi Güncellendi"),
                   // window.location.reload()
                );
        }
    
    })
   

    return (
        <div>

            <Formik >
            
                <Segment color="blue">
                   <Form
                     onSubmit={formik.handleSubmit}>

                    <FormField >
                        <Input id="language"
                            placeholder="Yabancı Dil..."
                            
                            style={{ marginRight: "1em", marginTop: "1em" }}

                            onChange={formik.handleChange} value={formik.values.language}></Input>
                        {formik.errors.language && formik.touched.language && (
                            <p style={{ color: "red" }}>{formik.errors.language}</p>
                        )}
                    </FormField>
<br />
                    <FormField>
                        <Dropdown
                            button
                            placeholder="Seviyeniz..."
                            
                            search
                            selection
                            id="levelId"
                            options={languageLevelOptions}
                            onChange={(event, data) =>
                                formik.setFieldValue("levelId", data.value)
                            }

                            value={formik.values.id}
                        />
                        {formik.errors.levelId && formik.touched.levelId && (
                            <div className={"ui pointing red basic label"}>
                                {formik.errors.levelId}
                            </div>
                        )}
                    </FormField>
                    <br />
                    <Button color="blue" type="submit">Güncelle</Button>

                </Form>

                </Segment>
                
                               
            

            </Formik>



        </div>
    )
}
