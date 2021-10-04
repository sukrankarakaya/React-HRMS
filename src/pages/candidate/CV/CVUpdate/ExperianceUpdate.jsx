import React from 'react'
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { Formik ,Form} from "formik";
import {  FormGroup, Button, Segment} from "semantic-ui-react";
import { toast } from "react-toastify";
import CandidateExperianceService from 'services/candidate/CandidateExperianceService';

export default function ExperianceUpdate({
    id,
    workPlace,
    position,
    startDate,
    endDate,
}) {


    let experianceService = new CandidateExperianceService();

    const initialValues = {
        workPlace: workPlace,
        position: position,
        startDate: startDate,
        endDate: endDate


    }



    const onSubmit = (values) => {
        values.id = id;

        console.log(values);
        experianceService
            .update(values)
            .then(
                (result) => console.log(result.data.data),
                toast.success("Deneyim Bilgisi Güncellendi"),
                window.location.reload()
            );
    };


    return (
        <div>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Segment color="blue">
                    <Form  >
                        <FormGroup widths="equal" >
                              
                                <HrmsTexInput rows={2}

                                    name="workPlace"
                                    type="text"
                                    value={workPlace}
                                />
                                <br />

                                <HrmsTexInput rows={2}

                                    name="position"
                                    type="text"

                                />  <br />
                                <HrmsTexInput

                                    name="startDate"
                                    type="date"

                                />  <br />
                                <HrmsTexInput
                                    name="endDate"
                                    type="date"

                                />
                                <br />
                                <Button color="blue">
                                    Güncelle
                                </Button>

                               <br />

                        </FormGroup>

                    </Form>
                </Segment>
            </Formik>
        </div>
    )
}
