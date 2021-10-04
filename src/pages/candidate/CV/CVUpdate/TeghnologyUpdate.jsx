import React from 'react'

import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { Formik ,Form} from "formik";
import {  FormGroup, Button, Segment} from "semantic-ui-react";
import { toast } from "react-toastify";
import CandidateTechnologyService from 'services/candidate/candidateTegnologyService';



export default function TeghnologyUpdate(

    {
        id,
        technologyName
    }
) {

    let teghnologyService = new CandidateTechnologyService();

    const initialValues = {
        technologyName: technologyName
    };

    // const schema = Yup.object({
    //     technologyName: Yup.string().required("Ön Yazı Zorunludur."),

    // })

    const onSubmit = (values) => {
        values.id = id;

        console.log(values);
        teghnologyService
            .update(values)
            .then(
                (result) => console.log(result.data.data),
                toast.success("Yetenek Güncellendi"),
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

                                name="technologyName"
                                type="text"
                                placeholder="Yetenekleriniz..."
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
