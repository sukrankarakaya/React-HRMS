import React from 'react'
import '../css/deshboard.css'
import { Route } from 'react-router'
import { Grid} from 'semantic-ui-react'
import JobAdvertisementDetailsForPersonnel from 'pages/JobAdvertisementDetailsForPersonnel'
import JobAdvertisementList from 'pages/JobAdvertisementsList'
import JobAdvertisementDetail from 'pages/JobAdvertisementDetail'
import {  ToastContainer } from 'react-toastify';
import JobAdvertisementsAdd from 'pages/JobAdvertisementsAdd'
import CandidateList from 'pages/candidate/CandidateList'
import ConverLetterAdd from 'pages/candidate/CV/converLetterAdd'
import languageAdd from 'pages/candidate/CV/languageAdd'
import SchoolAdd from 'pages/candidate/CV/SchoolAdd'
import ExperianceAdd from 'pages/candidate/CV/ExperianceAdd'
import SocialMediaAdd from 'pages/candidate/CV/SocialMediaAdd'
import TechnologyAdd from 'pages/candidate/CV/TechnologyAdd'
import ImageAdd from 'pages/candidate/CV/ImageAdd'
import CandidateProfile from 'pages/candidate/CandidateProfile'
import EmployerList from 'pages/EmployerList'
import JobAdvertisementFavorite from 'pages/JobAdvertisementFavorite'
import CandidateRegister from 'pages/candidate/CandidateRegister'
import EmployerRegister from 'pages/Employer/EmployerRegister'
import Login from 'pages/Login'
import EmployerProfil from 'pages/Employer/EmployerProfil'
import UpdateEmployerModal from 'pages/Employer/Modals/UpdateEmployerModal'
import UpdateEmployer from 'pages/Employer/Employer/UpdateEmployer'
import EmployerIsJobAdvertisements from 'pages/Employer/EmployerIsJobAdvertisements'
import JobAdvertisementFalseList from 'pages/JobAdvertisementFalseList'






export default function Dashboard() {
    return (

        <div className="Dashbord">
              <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
         
                    <Grid.Column width={2}>
                        {/* <Sidebar /> */}
                    </Grid.Column>
                    <Grid.Column width={12}>
                   
                    <Route exact path="/candidateRegister" component={CandidateRegister} />
                    <Route exact path="/employerRegister" component={EmployerRegister} />
                    <Route exact path="/login" component={Login} />
                     
                        <Route exact path="/" component={JobAdvertisementList} />
                        <Route exact path="/JobAdvertisement" component={JobAdvertisementList} />
                        <Route exact path="/JobAdvertisement/:id" component={JobAdvertisementDetail} />
                        <Route exact path="/JobAdvertisementadd" component={JobAdvertisementsAdd} />

                        <Route exact path="/JobAdvertisementFalse" component={JobAdvertisementFalseList} />
                        
                        <Route exact path="/cv/add" component={ConverLetterAdd} />
                        <Route exact path="/cv/language/add" component={languageAdd} />
                        <Route exact path="/cv/school/add" component={SchoolAdd} />
                        <Route exact path="/cv/experianceadd/:id" component={ExperianceAdd} />
                        <Route exact path="/cv/socialMedia/add" component={SocialMediaAdd} />
                        <Route exact path="/cv/technology/add" component={TechnologyAdd} />
                        <Route exact path="/cv/ımage/add" component={ImageAdd} />


                        <Route exact path="/candidate" component={CandidateList} />
                        
                        <Route exact path="/candidateProfile/:id" component={CandidateProfile} />
                        <Route exact path="/JobAdvertisementDetailsForPersonnel/:id" component={JobAdvertisementDetailsForPersonnel} />
                        <Route exact path="/employerList" component={EmployerList} />
                        <Route exact path="/favorite/:id" component={JobAdvertisementFavorite} />
                        
                        <Route exact path="/employerProfil/:id" component={EmployerProfil} />
                        <Route exact path="/employerProfil" component={EmployerProfil} />
                        <Route exact path="/employerUpdate/:id" component={UpdateEmployer} />
                        <Route exact path="/employerJob/:id" component={EmployerIsJobAdvertisements} />
                        
                        
                        
                        
                        
                   </Grid.Column>

                    <Grid.Column width={4}>
                   
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>

    )
}
