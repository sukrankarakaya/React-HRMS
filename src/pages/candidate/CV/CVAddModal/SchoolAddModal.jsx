import React , { useState } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
import SchoolAdd from '../SchoolAdd';

export default function SchoolAddModal( { candidateId}) {

    const [openUpdate, setOpenUpdate] = useState(false);

    return (
        <div>
            <Modal onClose={() => setOpenUpdate(false)}
                closeIcon
                onOpen={() => setOpenUpdate(true)}
                open={openUpdate}
                trigger={
                    <Button floated='right' icon color='black' size='small' >
                    <Icon name='add' /> Ekle
                </Button>
                }
            >

                <Modal.Header>Deneyim Bilgisi Ekle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                    <SchoolAdd candidateId={candidateId}/>

                    </Modal.Description>


                </Modal.Content>




            </Modal>
            </div>
            )

}
