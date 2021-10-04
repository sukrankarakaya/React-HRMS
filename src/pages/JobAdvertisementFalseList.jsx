import React from 'react'
import JobAdvertisementsService from 'services/jobAdvertisements/jobAdvertisementsService'
import {
    Card,
    Icon,
    Image,
    Grid,
    Select,
    Menu,
    Button,
    Container,
    GridColumn,
    Label
} from "semantic-ui-react";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function JobAdvertisementFalseList() {

    const [jobAdvertisements, setJobAdvertisement] = useState([])

    useEffect(() => {
        let jobAdvertisementService =new JobAdvertisementsService();
        jobAdvertisementService.getJobAdvertisementFalse().then(result=>setJobAdvertisement(result.data.data))
      
    }, [])



    return (
        <div>
             <Container>
                <Grid  >
                    <Grid.Row>
                        
                        <GridColumn width={12} 
                        >



                            {
                                jobAdvertisements.map(jobAdvertisement => (

                                    <Card.Group key={jobAdvertisement.id} style={{ marginTop: "1em" }}>
                                        <Card fluid style={{ backgroundColor: "#f8f9fa" }} fluid color='blue'>
                                            <Link to={`/JobAdvertisementDetailsForPersonnel/${jobAdvertisement.id}`} >


                                                <Card.Content >
                                                    <GridColumn width={8} >
                                                        <Image
                                                        
                                                            spaced="right"
                                                            floated='left'
                                                            size='small'
                                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PyE1yiN5zv71pAS_F6tFBOpzasHg9UnrUw&usqp=CAU'
                                                        />

                                                    </GridColumn>
                                                    <GridColumn width={8} style={{ color: "black" }}>

                                                        <Card.Header>{jobAdvertisement.position}</Card.Header>
                                                        <Card.Description>
                                                            <div>
                                                                <h4>{jobAdvertisement.employer?.companyName}</h4>
                                                                <i>Firma Bilgileri Saklıdır</i>
                                                            </div>

                                                            <div>

                                                                <Icon name='map marker alternate' />  {jobAdvertisement.cities?.cityName}
                                                                <br />
                                                                <Icon name='clock outline' /> {jobAdvertisement.createDate}
                                                            </div>
                                   

                                                        </Card.Description>


                                                    </GridColumn>


                                                </Card.Content>
                                             </Link>
                                        </Card>


                                    </Card.Group>

                                ))

                            }

                        </GridColumn>
                       
                    </Grid.Row>
                </Grid>
            </Container>
            
        </div>
    )
}
