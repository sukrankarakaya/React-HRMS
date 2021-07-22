import React from 'react'
import JobAdvertisamentsList from 'pages/JobAdvertisamentsList'
import '../css/deshboard.css'
import { Route } from 'react-router'
import { Grid} from 'semantic-ui-react'
import JobAdvertisamentsAdd from 'pages/JobAdvertisamentsAdd'
import JobAdvertisamentDetail from 'pages/JobAdvertisamentDetail'
import JobAdvertisementDetailsForPersonnel from 'pages/JobAdvertisementDetailsForPersonnel'
import Sidebar from './Sidebar'

export default function Dashboard() {
    return (

        <div className="Dashbord">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        {/* <Sidebar /> */}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Route exact path="/" component={JobAdvertisamentsList} />
                        <Route exact path="/JobAdvertisaments" component={JobAdvertisamentsList} />
                        <Route exact path="/JobAdvertisaments/:id" component={JobAdvertisamentDetail} />
     
                        <Route exact path="/JobAdvertisament/add" component={JobAdvertisamentsAdd} />
                        <Route exact path="/JobAdvertisementDetailsForPersonnel/:id" component={JobAdvertisementDetailsForPersonnel} />
                    </Grid.Column>

                    <Grid.Column width={4}>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>

    )
}
