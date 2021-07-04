import React, { useState, useEffect } from 'react'
import {  Icon, Menu, Table } from 'semantic-ui-react'
import EmployeeService from 'services/employeeService'

export default function EmployeeList() {

    const [employies, setEmployies] = useState([])

    useEffect(()=>{
        let employeeService =new EmployeeService()
        employeeService.getEmployies().then(result=> setEmployies(result.data.data))
    })



    return (
        <div>
             <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>İsim </Table.HeaderCell>
                        <Table.HeaderCell>Soyisim </Table.HeaderCell>
                        <Table.HeaderCell>E-mail </Table.HeaderCell>
                        <Table.HeaderCell>Şifre</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                
                    {
                        employies.map(employies=>(
                            <Table.Row key={employies.id}>
                                <Table.Cell>{employies.firstName}</Table.Cell>
                                <Table.Cell>{employies.lastName}</Table.Cell>
                                <Table.Cell>{employies.email}</Table.Cell>
                                <Table.Cell>{employies.password}</Table.Cell>

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
