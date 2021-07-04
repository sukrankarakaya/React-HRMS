import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button,Icon, Menu, Table } from 'semantic-ui-react'

import JobAdvertisamentsService from '../services/jobAdvertisamentsService'


export default function JobAdvertisamentsList() {

    const [jobAdvertisaments, setJobAdvertisaments] = useState([])

    useEffect(() => {
        let jobAdvertisamentsService = new JobAdvertisamentsService()
        jobAdvertisamentsService.getJobAdvertisaments().then(result => setJobAdvertisaments(result.data.data))

    })


    return (
        <div>


            <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>Açıklama </Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarıhi </Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi </Table.HeaderCell>
                        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Maaş </Table.HeaderCell>
                        <Table.HeaderCell>Personel Sayısı </Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>


                    {
                        jobAdvertisaments.map(jobAdvertisaments => (
                            <Table.Row key={jobAdvertisaments.id}>

                                <Table.Cell>{jobAdvertisaments.jobDesciription}</Table.Cell>
                                <Table.Cell>{jobAdvertisaments.createDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisaments.deadLine}</Table.Cell>
                                <Table.Cell>{jobAdvertisaments.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisaments.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisaments.numberOfPosition}</Table.Cell>
                                <Table.Cell> <Button icon labelPosition='right'>
                                    Next
                                    <Icon name='chevron right' />
                                   
                                </Button></Table.Cell>

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