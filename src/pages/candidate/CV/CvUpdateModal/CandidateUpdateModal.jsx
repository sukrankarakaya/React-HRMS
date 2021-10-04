import React ,{useState} from 'react'
import { Modal } from 'semantic-ui-react';
import CandidateUpdate from '../CVUpdate/CandidateUpdate';


export default function CandidateUpdateModal({
    id,
    birthDate,
    firstName,
    lastName,
    email
}) {

    const [openUpdate, setOpenUpdate] = useState(false);


    return (
        <div>
            <Modal onClose={() => setOpenUpdate(false)}
                closeIcon
                onOpen={() => setOpenUpdate(true)}
                open={openUpdate}
                trigger={
                    <div className="ui right floated medium  icon buttons">
                        <button  className="ui  primary  button"><i className="edit outline  icon"></i> </button>
                    </div>
                }
            >

                <Modal.Header> Bilgileri Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <CandidateUpdate

                            id={id}
                            firstName={firstName}
                            lastName={lastName}
                            birthDate={birthDate}
                            email={email}

                        />
                        
                    </Modal.Description>


                </Modal.Content>




            </Modal>
        </div>
    )
}
