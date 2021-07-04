import React from 'react'
import { Container, Button, Menu, Input,Segment } from 'semantic-ui-react'
import navi from '../css/navi.css'

export default function Navi() {

    return (

        <div className="navbar" >
            <Segment inverted >
            <Menu inverted  secondary >

                <Container>

                    <Menu.Item 
                        name='HRMS'

                    />
                    <br></br><br></br>
                    <Input className='icon' icon='search' placeholder='İş Ara...' />


                    <Menu.Menu position='right'>

                        <Button basic inverted color='blue'>
                        Kayıt Ol
                        </Button>
                      
                        <Button basic inverted color='blue'>
                        Giriş Yap
                        </Button>
                        


                      
                    </Menu.Menu>
                </Container>

            </Menu>
            </Segment>


        </div>
    );

}
