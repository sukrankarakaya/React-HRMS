
import React from 'react'
import { toast } from "react-toastify";
import { Message, Button } from "semantic-ui-react";
import CandidateExperianceService from 'services/candidate/CandidateExperianceService'

export default function ExperianceDelete({ id }) {


    let experianceService = new CandidateExperianceService();


    const deleteExperiance = (id) => {


        experianceService.delete(id)
            .then(toast.success("Deneyim Silindi"),
                console.log(id),

                window.location.reload()
            )
    }



    return (
        <div>
            <Message
            color='blue'
                icon='trash'
                header='Silmek İstediginize Eminmisiniz?'

            />
            <Button style={{ marginBottom: "10pt" }} floated="right" color="red" onClick={() => deleteExperiance(id)}>SİL</Button>


        </div>
    )
}
