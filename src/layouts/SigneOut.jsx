import React from 'react'
import { NavLink } from 'react-router-dom'

import {  Button, Menu } from 'semantic-ui-react'

export default function SigneOut({singIn}) {
    return (
        <div>
            <Menu.Menu position='right'style={{marginTop:"1em",marginBottom:"1em"}}>
        

                <Button basic circular inverted color='blue' as={NavLink} to="/candidateRegister">
                    Kayıt Ol
                </Button>

                <Button basic circular inverted color='blue' 
                  as={NavLink} to="/login"
                >
                    Giriş Yap
                </Button>




            </Menu.Menu>
        </div>
    )
}
