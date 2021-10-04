import React,{useState, useEffect} from 'react'
import {  Icon, Menu, Table } from 'semantic-ui-react'
import CandidateService from 'services/candidate/candidateService'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))

    })

    return (
        <div>

             <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>İsim </Table.HeaderCell>
                        <Table.HeaderCell>Soyisim </Table.HeaderCell>
                        <Table.HeaderCell>E-mail </Table.HeaderCell>
                        <Table.HeaderCell>Vatandaşlık No</Table.HeaderCell>
                        <Table.HeaderCell>Dogum Tarihi </Table.HeaderCell>
                        <Table.HeaderCell>Şifre</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                
                    {
                        candidates.map(candidates=>(
                            <Table.Row key={candidates.id}>
                                
                                <Table.Cell>{candidates.firstName}</Table.Cell>
                                <Table.Cell>{candidates.lastName}</Table.Cell>
                                <Table.Cell>{candidates.email}</Table.Cell>
                                <Table.Cell>{candidates.identityNumber}</Table.Cell>
                                <Table.Cell>{candidates.birthDate}</Table.Cell>
                                <Table.Cell>{candidates.password}</Table.Cell>

                            </Table.Row>

                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            
        </div>
    )
}
