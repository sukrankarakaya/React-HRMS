import React from 'react'
import HrmsTexInput from 'utilities/customFormControls/HrmsTexInput';
import { Formik ,Form} from "formik";
import {  FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import CandidateSchoolService from 'services/candidate/candidateSchoolService';


export default function SchoolUpdate({
    id,
    schoolName,
    department,
    startDate,
    endDate
}) {


    let schoolService = new CandidateSchoolService();

    const initialValues = {
        schoolName: schoolName,
        department: department,
        startDate: startDate,
        endDate: endDate


    }



    const onSubmit = (values) => {
        values.id = id;

        console.log(values);
        schoolService
            .update(values)
            .then(
                (result) => console.log(result.data.data),
                toast.success("Okul Bilgisi Güncellendi"),
                window.location.reload()
            );
    };

    return (
        <div>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Segment color="blue">
                    <Form  >
                        <FormGroup widths="equal" >
                              
                                <HrmsTexInput 

                                    name="schoolName"
                                    type="text"

                                />
                                <br />

                                <HrmsTexInput 

                                    name="department"
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
