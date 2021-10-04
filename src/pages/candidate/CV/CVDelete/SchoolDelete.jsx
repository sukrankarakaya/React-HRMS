import React from 'react'
import { toast } from 'react-toastify';
import { Message, Button } from "semantic-ui-react";
import CandidateSchoolService from 'services/candidate/candidateSchoolService'

export default function SchoolDelete({id}) {
  
  let schoolService =new CandidateSchoolService();

  const deleteSchool =(id)=>{

    schoolService.delete(id).then(toast.success("Okul Bilgisi Silindi."),
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
            <Button style={{ marginBottom: "10pt" }} floated="right" color="red" onClick={() => deleteSchool(id)}>SİL</Button>

            
        </div>
    )
}
