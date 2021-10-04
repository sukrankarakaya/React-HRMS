import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import {
    Card,
    Icon,
    Image,
    Grid,
    Button,
    Container,
    GridColumn,
    Label,

} from "semantic-ui-react";

import { Link, NavLink } from 'react-router-dom'
import FavoriteJobAdvertisementService from 'services/jobAdvertisements/favoriteJobAdvertisementService'
import { useSelector } from 'react-redux';

export default function JobAdvertisementFavorite() {

    
  const {authItems} = useSelector(state => state.auth)
    let { id } = useParams();

    const [favorites, setFavorites] = useState([])


    let favoriteService = new FavoriteJobAdvertisementService()

    useEffect(() => {
        favoriteService.getByCandidateId(authItems[0].user.id).then((result) => setFavorites(result.data.data)
        )

    })


    function favoriteDelete(id) {
        favoriteService.delete(id).then((result) => console.log(result.data.data))

    }

    return (
        <div>
            <Container>
                <Grid >

                    <Grid.Row >


                        {
                            favorites.map(favorite => (
                                <Grid.Column width={6} >

                                    <Card.Group key={favorite.favoriteId} style={{ marginTop: "1em" }}>
                                        <Card fluid style={{ backgroundColor: "#f8f9fa" }} fluid color='blue' >

                                             <Button.Group>
                                                <Button color="red" icon="delete"  onClick={() => favoriteDelete(favorite.favoriteId)} >Sİl</Button>
                                                <Button.Or /> 
                                                <Button  as={NavLink} to={`/JobAdvertisement/${favorite.jobAdvertisements?.id}`}  color="blue" >Detay</Button>
                                             </Button.Group>



                       
                                                <Card.Content  >

                                                    <GridColumn >

                                                        <Image

                                                            spaced="right"
                                                            floated='left'
                                                            size='small'
                                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PyE1yiN5zv71pAS_F6tFBOpzasHg9UnrUw&usqp=CAU'
                                                        />

                                                    </GridColumn>

                                                    <GridColumn style={{ color: "black" }} >

                                                        <Card.Header>{favorite.jobAdvertisements?.position}</Card.Header>
                                                        <Card.Description >
                                                            <div>
                                                                <h4>{favorite.jobAdvertisements?.employer?.companyName}</h4>
                                                                <i>Firma Bilgileri Saklıdır</i>
                                                            </div>

                                                            <div>

                                                                <Icon name='map marker alternate' />  {favorite.jobAdvertisements?.cities?.cityName}
                                                                <br />
                                                                <Icon name='clock outline' /> {favorite.jobAdvertisements?.createDate}
                                                            </div>

                                                        </Card.Description>

                                                    </GridColumn>
                                                  
                                                </Card.Content>
                                        </Card>


                                    </Card.Group>
                                </Grid.Column>
                            ))

                        }



                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
