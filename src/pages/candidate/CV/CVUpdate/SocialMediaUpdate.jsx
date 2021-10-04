import React from 'react'
import CandidateSocialMediaService from 'services/candidate/candidateSocialMediaService';
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function SocialMediaUpdate(
    {
        id,
        githubLink,
        linkedinLink
    }
) {


    let socialMediaService = new CandidateSocialMediaService();

    const initialValues = {
        githubLink: githubLink,
        linkedinLink: linkedinLink
    };

    // const schema = Yup.object({
    //     githubLink: Yup.string().required("Ön Yazı Zorunludur."),

    // })

    const onSubmit = (values) => {
        values.id = id;

        console.log(values);
        socialMediaService
            .update(values)
            .then(
                (result) => console.log(result.data.data),
                toast.success("Sosyal Media Adresiniz Güncellendi"),
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

                                name="githubLink"
                                type="text"
                                
                            />
                            <br />
                            <HrmsTexInput
                                name="linkedinLink"
                                type="text"
                               
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
