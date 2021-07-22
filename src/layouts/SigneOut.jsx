import React from 'react'

import {  Button, Menu } from 'semantic-ui-react'

export default function SigneOut({singIn}) {
    return (
        <div>
            <Menu.Menu position='right'>
        

                <Button basic inverted color='blue'>
                    Kayıt Ol
                </Button>

                <Button basic inverted color='blue' 
                 onClick={singIn}
                >
                    Giriş Yap
                </Button>




            </Menu.Menu>
        </div>
    )
}
