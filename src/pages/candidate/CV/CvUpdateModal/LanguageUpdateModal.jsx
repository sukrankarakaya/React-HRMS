import React ,{useState} from 'react'
import { Modal } from 'semantic-ui-react';
import LanguageUpdate from '../CVUpdate/LanguageUpdate';

export default function LanguageUpdateModal({
    id,
    language,
    levelId,

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

                <Modal.Header>Dil Bilgisi Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <LanguageUpdate

                            id={id}
                            language={language}
                            levelId={levelId}
                      
                        >
                        </LanguageUpdate>
                    </Modal.Description>


                </Modal.Content>




            </Modal>

        </div>
    )
}
