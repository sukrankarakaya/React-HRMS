import React, { useState } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
import AddEmployer from '../Employer/AddEmployer';

export default function AddEmployerModal() {
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

                <Modal.Header>İş Veren Ekle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                    <AddEmployer />

                    </Modal.Description>


                </Modal.Content>




            </Modal>

        </div>
    )
}
