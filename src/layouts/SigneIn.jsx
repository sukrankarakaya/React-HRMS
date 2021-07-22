import { Dropdown } from 'semantic-ui-react'

import React from 'react'

import { Image, Menu } from 'semantic-ui-react'


export default function SigneIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6uAwJ2JNN2hrgWi18n2nGk5iJ9yF7N7ghg&usqp=CAU" />

                <Dropdown pointing="top left" text="Şükran Karakaya">

                    <Dropdown.Menu >

                        <Dropdown.Item text="Profil" icon="info" />
                        <Dropdown.Item text="Ayarlar" icon="cog" />         
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />

                    </Dropdown.Menu>
                </Dropdown>


            </Menu.Item>

        </div>
    )
}
