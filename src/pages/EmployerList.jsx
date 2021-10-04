import React, { useState, useEffect } from 'react'
import { Segment, Table, Header } from 'semantic-ui-react'
import EmployerService from 'services/employerService'
import AddEmployerModal from './Employer/Modals/AddEmployerModal'
import UpdateEmployerModal from './Employer/Modals/UpdateEmployerModal'



export default function EmployerList() {
    const [employers, setEmployers] = useState([])
    let employerService = new EmployerService()

    useEffect(() => {
        
        employerService.getEmployers().then(result => setEmployers(result.data.data))

    })

    return (
        <div>
            <Segment  style={{
            marginTop: "5em",
            marginBlockEnd: "30em",

        }}>

                <Header size='huge'>İş Verenler</Header>

                <Table celled style={{ margintop: "10em" }}>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                            <Table.HeaderCell>E-mail</Table.HeaderCell>
                            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                            <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                            <Table.HeaderCell>
                                <AddEmployerModal />

                            </Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {employers.map((employer) => (
                            <Table.Row key={employer.id}>

                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.webAdress}</Table.Cell>
                                <Table.Cell>
                                    <UpdateEmployerModal
                                        id={employer.id}
                                        companyName={employer.companyName}
                                        webAdress={employer.webAdress}
                                        email={employer.email}
                                        phoneNumber={employer.phoneNumber}
                                        isChackPassword={employer.isChackPassword}
                                        password={employer.password} />
                                </Table.Cell>

                            </Table.Row>
                        ))}
                    </Table.Body>


                </Table>
            </Segment>
        </div>
    )
}
