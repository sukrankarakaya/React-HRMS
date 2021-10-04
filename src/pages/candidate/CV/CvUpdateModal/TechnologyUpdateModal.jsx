import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react';
import TeghnologyUpdate from '../CVUpdate/TeghnologyUpdate';
export default function TechnologyUpdateModal(
    {
        id,
        technologyName

    }
) {
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

                <Modal.Header>Yeteneklerini Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <TeghnologyUpdate

                            id={id}
                            technologyName={technologyName}

                        >
                        </TeghnologyUpdate>
                    </Modal.Description>


                </Modal.Content>




            </Modal>

        </div>
    )
}
