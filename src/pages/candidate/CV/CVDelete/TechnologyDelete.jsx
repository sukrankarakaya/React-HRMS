import React from 'react'
import { toast } from 'react-toastify';
import { Message, Button } from "semantic-ui-react";
import CandidateTechnologyService from 'services/candidate/candidateTegnologyService'

export default function TechnologyDelete({ id }) {


    let technologySercive = new CandidateTechnologyService();

    const deleteTechnology = (id) => {

        technologySercive.delete(id).tehen(toast.success("Yetenek Silindi."),
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
            <Button style={{ marginBottom: "10pt" }} floated="right" color="red" onClick={() => deleteTechnology(id)}>SİL</Button>



        </div>
    )
}
