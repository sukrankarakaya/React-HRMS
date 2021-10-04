import React from 'react'
import CandidateCoverLetterService from 'services/candidate/candidateCoverLetterService';
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";



export default function CoverLetterUpdate({ id, coverLetter }) {


    let coverLetterService = new CandidateCoverLetterService();

    const initialValues = {
        coverLetter: coverLetter
    };

    // const schema = Yup.object({
    //     coverLetter: Yup.string().required("Ön Yazı Zorunludur."),

    // })

    const onSubmit = (values) => {
        values.id = id;

        console.log(values);
        coverLetterService
            .update(values)
            .then(
                (result) => console.log(result.data.data),
                toast.success("Ön Yazı Güncellendi"),
                window.location.reload()
            );
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Segment color="blue">
                    <Form >
                        <FormGroup widths="equal">
                            <HrmsTexInput
                            
                            style={{with:"8em", height:"6"}} 
                                name="coverLetter"
                                type="text"
                                placeholder="Önyazı giriniz..."
                            /> 
                             <br />
                            
                        <Button color="blue">
                            Güncelle
                        </Button>
                        </FormGroup>
                       
                    </Form>
                </Segment>
            </Formik>

        </div>
    )
}
