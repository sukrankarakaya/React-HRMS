
import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'

import CoverLetterUpdate from '../CVUpdate/CoverLetterUpdate'

export default function CoverLetterUpdateModal({ coverLetter, id }) {

    const [openUpdate, setOpenUpdate] = useState(false);



    return (
        <div>

            <Modal onClose={() => setOpenUpdate(false)}
                closeIcon
                onOpen={() => setOpenUpdate(true)}
                open={openUpdate}
                trigger={
                    <div >
                        <button className="ui  primary  button"><i className="edit outline  icon"></i> </button>
                    </div>
                }
            >

                <Modal.Header>Ön Yazı Güncelle</Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <CoverLetterUpdate
                        
                            id={id}
                            coverLetter={coverLetter}>
                           
                        </CoverLetterUpdate>
                    </Modal.Description>


                </Modal.Content>




            </Modal>


        </div>
    )
}
