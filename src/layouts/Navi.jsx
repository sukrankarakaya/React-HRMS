import React from 'react'
import { useState, } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Button, Menu, Input, Segment ,Icon} from 'semantic-ui-react'
import navi from '../css/navi.css'
import SigneIn from './SigneIn'
import SigneOut from './SigneOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (

        <div className="navbar" >
            <Segment inverted  >
                <Menu inverted fixed="top">

                    <Container fixed="top">

                        <Menu.Item
                            name='HRMS'
                            as={NavLink} to="/"
                           
                            

                        />


                        <Menu.Item >
                            <Input size="mini" placeholder='İş Bul...' icon="search" />
                        </Menu.Item>



                        <Menu.Item  >
                            <Button basic inverted color='blue'>
                                Cv Oluştur
                            </Button>

                        </Menu.Item>
                        
                        <Menu.Item as={NavLink} to="/JobAdvertisament/add" >
                            <Button basic inverted color='blue' >
                            İş İlanı Ekle
                            </Button>

                        </Menu.Item>

                        <Menu.Item position="right">

                            {isAuthenticated ? <SigneIn signOut={handleSignOut} /> : <SigneOut singIn={handleSignIn} />}

                        </Menu.Item>


                    </Container>


                </Menu>
            </Segment>


        </div>
    );

}
