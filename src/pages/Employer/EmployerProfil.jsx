import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import EmployerService from 'services/employerService';
import { Divider, Grid, Header, Table, Image, Label, Rail, Segment, Button } from 'semantic-ui-react'
import UpdateEmployerModal from './Modals/UpdateEmployerModal';



export default function EmployerProfil() {


    const { authItems } = useSelector(state => state.auth)

    const [employer, setEmployer] = useState([]);
    let employerService = new EmployerService();

    useEffect(() => {

        employerService.getById(authItems[0].user.id).then((result) => setEmployer(result.data.data))

    }, [])

    return (
        <div style={{ marginTop: "5em" }}>
            <Segment>

                <Grid columns={2} relaxed='very'>
                    <Grid.Column style={{ backgroundColor: "#6372f2d4" }}>

                        <Image

                            spaced="right"

                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PyE1yiN5zv71pAS_F6tFBOpzasHg9UnrUw&usqp=CAU'
                        />

                    </Grid.Column>
                    <Grid.Column style={{ backgroundColor: "#6372f2d4"  }}>

                        <Table basic='very' celled collapsing style={{left:"5em"}}>
                            <Table.Body style={{left:"40em"}}>
                                <Table.Row>
                                    <Table.Cell><Header>Firma Adı:</Header></Table.Cell>
                                    <Table.Cell>{employer.companyName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Header>Web Adres:</Header></Table.Cell>
                                    <Table.Cell>{employer.webAdress}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Header>E-Mail:</Header></Table.Cell>
                                    <Table.Cell>{employer.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Header>Telefon No:</Header></Table.Cell>
                                    <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                </Table.Row>
                                
                               
                            </Table.Body>
                        </Table>
                        <UpdateEmployerModal 
                                        id={employer.id}
                                        companyName={employer.companyName}
                                        webAdress={employer.webAdress}
                                        email={employer.email}
                                        phoneNumber={employer.phoneNumber}
                                        isChackPassword={employer.isChackPassword}
                                        password={employer.password}
                        />
       


                      

                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}
