import React from 'react'
import { useState, } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Container, Button, Menu, Input } from 'semantic-ui-react'

import SigneIn from './SigneIn'
import SigneOut from './SigneOut'


export default function Navi() {
    const {authItems} = useSelector(state => state.auth)

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (

        <div className="navbar" >

            <Menu inverted fixed="top" >

                <Container fixed="top">
                    <Menu.Item as={NavLink} to="/"
                        disabled
                        name="HRMS"

                    />




                    <Menu.Item disabled>
                        <Input size="mini" placeholder='İş Bul...' icon="search" />
                    </Menu.Item>



                    <Menu.Item as={NavLink} to="/employerList" disabled >
                        <Button basic inverted color='blue'>
                            Employer List
                        </Button>

                    </Menu.Item>

                    <Menu.Item as={NavLink} to="/JobAdvertisementadd" disabled>
                        <Button basic inverted color='blue' >
                            İş İlanı Ekle
                        </Button>

                    </Menu.Item>

                    <Menu.Menu position="right">

                    </Menu.Menu>

                    <Menu.Menu position="right">

                        {/* {isAuthenticated ? <SigneIn signOut={handleSignOut} />
                             : <SigneOut singIn={handleSignIn} />} */}


                        {authItems[0].login ? <SigneIn /> : <SigneOut />}
                    </Menu.Menu>


                </Container>


            </Menu>


        </div>
    );

}
