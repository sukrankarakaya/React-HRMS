import React, { useState } from 'react'
import { useEffect } from 'react'
//import { NavLink } from 'react-router-dom';
import { Button, Card, GridColumn, Image } from 'semantic-ui-react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobAdvertisementsService from 'services/jobAdvertisaments/jobAdvertisamentsService'
import { result } from 'lodash'



export default function JobAdvertisamentsList() {

    const [jobAdvertisaments, setJobAdvertisaments] = useState([])


    useEffect(() => {
        let jobAdvertisamentsService = new JobAdvertisementsService()
        jobAdvertisamentsService.getJobAdvertisaments().then(result => setJobAdvertisaments(result.data.data))
    }, [])

    
    return (
        <div> {
            jobAdvertisaments.map(jobAdvertisaments => (

                <Card.Group style={ {marginTop: "1em"}}>
                    <Card fluid    style={ { backgroundColor: "#f8f9fa"}} fluid color='blue'>
                    <Link to={`/JobAdvertisaments/${jobAdvertisaments.id}`}>
                        <Card.Content key={jobAdvertisaments.id}>
                            <GridColumn width={8}>
                                <Image
                                 spaced="right"
                                    floated='left'
                                    size='small'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PyE1yiN5zv71pAS_F6tFBOpzasHg9UnrUw&usqp=CAU'
                                />

                            </GridColumn>
                            <GridColumn width={8} style={{color:"black" }}>

                                <Card.Header>{jobAdvertisaments.position}</Card.Header>
                                <Card.Description>
                                    <div>
                                     <h4>{jobAdvertisaments.employer?.companyName}</h4> 
                                   <i>Firma Bilgileri Saklıdır</i>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                       
                                    <Icon name='map marker alternate' />  {jobAdvertisaments.cities?.cityName}
                                       
                                        <Icon name='clock outline' /> {jobAdvertisaments.createDate}
                                    </div>
                                    <div>
                                       
                                    </div>
                                   
                                </Card.Description>


                            </GridColumn>


                        </Card.Content>
                        </Link>

                    </Card>


                </Card.Group>

            ))
            
        }







        </div>




    )
}