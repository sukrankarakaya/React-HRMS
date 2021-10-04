import React ,{useState} from 'react'
import { NavLink } from 'react-bootstrap';
import { Modal } from 'semantic-ui-react';
import UpdateEmployer from '../Employer/UpdateEmployer';

export default function UpdateEmployerModal({
    id,
    companyName,
    webAdress,
    phoneNumber,
    password,
    isChackPassword,
    email,
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
                        <button  className="ui  primary  button"><i className="edit outline  icon"> </i> Güncelle </button>
                    </div>
                }
            >

                <Modal.Header>İş Veren Bilgisi Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <UpdateEmployer

                            id={id}
                            companyName={companyName}
                            webAdress={webAdress}
                            email={email}
                            phoneNumber={phoneNumber}
                            isChackPassword={isChackPassword}
                            password={password}

                        />
                       
                    </Modal.Description>


                </Modal.Content>




            </Modal>
        </div>
    )
}
