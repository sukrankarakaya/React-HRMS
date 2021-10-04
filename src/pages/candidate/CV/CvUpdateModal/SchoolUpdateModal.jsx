import React from 'react'
import SchoolUpdate from '../CVUpdate/SchoolUpdate';

import { Modal } from 'semantic-ui-react'
import { useState } from 'react';


export default function SchoolUpdateModal({
    id,
    schoolName,
    department,
    startDate,
    endDate }) {

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

                <Modal.Header>Okul Bilgisi Güncelle </Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <SchoolUpdate

                            id={id}
                            schoolName={schoolName}
                            department={department}
                            startDate={startDate}
                            endDate={endDate}



                        >


                        </SchoolUpdate>
                    </Modal.Description>


                </Modal.Content>




            </Modal>
        </div>
    )
}
