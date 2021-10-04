import React ,{useState} from 'react'
import { Modal } from 'semantic-ui-react';
import ExperianceUpdate from '../CVUpdate/ExperianceUpdate';


export default function ExperianceUpdateModal({

    id,
    workPlace,
    position,
    startDate,
    endDate,
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

                <Modal.Header>Deneyim Bilgisi Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <ExperianceUpdate

                            id={id}
                            workPlace={workPlace}
                            position={position}
                            startDate={startDate}
                            endDate={endDate}

                        >
                        </ExperianceUpdate>
                    </Modal.Description>


                </Modal.Content>




            </Modal>

        </div>
    )
}
