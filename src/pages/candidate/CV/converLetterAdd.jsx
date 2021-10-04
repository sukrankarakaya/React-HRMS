import { Formik, Form } from 'formik';
import { Button, FormField,  } from 'semantic-ui-react';
import React from 'react'
import * as Yup from "yup";
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { toast } from 'react-toastify';
import CandidateCoverLetterService from 'services/candidate/candidateCoverLetterService';
import { useParams } from 'react-router';


export default function ConverLetterAdd() {
    let {id}=useParams()

    let cvService =new CandidateCoverLetterService()
  
    const initialValues = {
        coverLetter: '',
        candidateId: id

    }

    const schema = Yup.object({
        coverLetter: Yup.string().required("Ön Yazı Zorunludur."),
        
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={
                    (values)=>{
                        let candidateCoverLetter={
                            coverLetter:  values.coverLetter,
                            candidate: {id: values.candidateId}
                        }
                        cvService.add(candidateCoverLetter).then((result) => console.log(result.data.data));
                        toast.success("Ön Yazı Eklendi.")
                        window.location.reload()
                    }
                }
            >
                <Form className="ui form" style={{marginTop:"5em",marginBlockEnd:"30em", width: "20em", height: "2.5em" }}>
                    <FormField >
                    <label>Ön Yazı:</label>
                        <HrmsTexInput type="text"  name="coverLetter"  placeholder="Ön Yazı..." />
                        <HrmsTexInput name="candidateId" placeholder="Aday İdsi..."   />
                    </FormField>
                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>


        </div>
    )
}
