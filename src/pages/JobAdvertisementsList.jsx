import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import JobAdvertisementsService from 'services/jobAdvertisements/jobAdvertisementsService';
import Filter from './Filter';
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

import { Link } from 'react-router-dom'




export default function JobAdvertisementList() {

    const [jobAdvertisementFilters, setJobAdvertisementFilters] = useState({});
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [totalPages, setTotalPages] = useState(0);

    // const handleChangePageNo = (event, { activePage }) => {
    //     setPageNo(activePage);
    // };

    const handleChangePageSize = (event, { value }) => {
        setPageSize(value);
    };




    const pageSizeOptions = [
        { key: 2, value: 10, text: "10 İLAN" },
        { key: 3, value: 20, text: "20 İLAN" },
        { key: 4, value: 50, text: "50 İLAN" },
        { key: 5, value: 100, text: "100 İLAN" },
    ];

    // const sortOptions = [
    //     { key: 2, value: 10, text: "10 İLAN" },
    //     { key: 3, value: 20, text: "20 İLAN" },
    // ];

    const [jobAdvertisements, setjobAdvertisements] = useState([]);
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementsService();
        jobAdvertisementService
            .getByFilter(jobAdvertisementFilters, pageNo, pageSize).then((result) => {
                setjobAdvertisements(result.data.data);
                setTotalPages(parseInt(result.data.data));

            })
    }, [jobAdvertisementFilters, pageSize, pageNo]);

    const handleFilter = (jobAdvertisementFilters) => {
        if (jobAdvertisementFilters.jobPositionIds.length === 0) {
            jobAdvertisementFilters.jobPositionIds = null;
        }
        if (jobAdvertisementFilters.cityIds.length === 0) {
            jobAdvertisementFilters.cityIds = null;
        }
        if (jobAdvertisementFilters.workTimeIds.length === 0) {
            jobAdvertisementFilters.workTimeIds = null;
        }
        if (jobAdvertisementFilters.wayOfWorkIds.length === 0) {
            jobAdvertisementFilters.wayOfWorkIds = null;
        }
        setJobAdvertisementFilters(jobAdvertisementFilters);
        setPageNo(1);
    };



    return (
        <div>
            <Container>
                <Grid  >
                    <Grid.Row>
                        <Grid.Column width={4} style={{ marginTop: "3em" }}>
                            <div className="filters">
                                <Menu.Item>
                                    Bir Sayfadaki İlan Sayısı{" "}
                                    <Select
                                        placeholder="Seçiniz"
                                        onChange={handleChangePageSize}
                                        options={pageSizeOptions}
                                    ></Select>
                                </Menu.Item>
                                <Filter
                                    jobAdvertisementFilters={handleFilter}
                                ></Filter>
                            </div>
                        </Grid.Column >
                        <GridColumn width={12} 
                        >



                            {
                                jobAdvertisements.map(jobAdvertisement => (

                                    <Card.Group key={jobAdvertisement.id} style={{ marginTop: "1em" }}>
                                        <Card fluid style={{ backgroundColor: "#f8f9fa" }} fluid color='blue'>
                                            <Link to={`/JobAdvertisement/${jobAdvertisement.id}`} >


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
