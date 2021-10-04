import React from 'react'
import { toast } from 'react-toastify';
import { Message, Button } from "semantic-ui-react";
import CandidateLanguageService from 'services/candidate/candidateLanguageService'

export default function LanguageDelete({id}) {

    let languageService=new CandidateLanguageService();

    const deleteLanguage =(id)=>{

        languageService.delete(id).then(toast.success("Dilk Bilgisi Silindi."),
        console.log(id),
        window.location.reload())

    }


    return (
        <div>
            <Message
            color='blue'
                icon='trash'
                header='Silmek İstediginize Eminmisiniz?'

            />
            <Button style={{ marginBottom: "10pt" }} floated="right" color="red" onClick={() => deleteLanguage(id)}>SİL</Button>

            
        </div>
    )
}
