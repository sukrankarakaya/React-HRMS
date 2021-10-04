import React  from 'react'
import { Modal } from 'semantic-ui-react';
import SocialMediaUpdate from '../CVUpdate/SocialMediaUpdate';
import { useState } from 'react';

export default function SocialMediaUpdateModal({

    id,
    githubLink,
    linkedinLink
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
                        <button className="ui  primary  button"><i className="edit outline  icon"></i> </button>
                    </div>
                }
            >

                <Modal.Header>Sosyal Medyanızı Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <SocialMediaUpdate

                            id={id}
                            githubLink={githubLink}
                            linkedinLink={linkedinLink}
                        >
                        </SocialMediaUpdate>
                    </Modal.Description>


                </Modal.Content>




            </Modal>


        </div>
    )
}
