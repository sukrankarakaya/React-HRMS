import React from 'react'
import { toast } from "react-toastify";
import { Message, Button } from "semantic-ui-react";
import CandidateSocialMediaService from 'services/candidate/candidateSocialMediaService';

export default function SocialMediaDelete({id}) {

    let socialmediaService = new CandidateSocialMediaService();


    const deleteSocialMedia = (id) => {


        socialmediaService.delete(id)
            .then(toast.success("Medya Bilgisi Silindi"),
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
            <Button style={{ marginBottom: "10pt" }} floated="right" color="red" onClick={() => deleteSocialMedia(id)}>SİL</Button>


        </div>
            
       
    )
}
