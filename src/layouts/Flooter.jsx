import React from 'react'
import { Button, Icon, Container } from 'semantic-ui-react'
import flooter from '../css/flooter.css'
import { Image, List,  } from 'semantic-ui-react'



export default function Flooter() {
    return (
        <div className="flooter">

            <Container>
                <div className="button">
                    <Button circular color='facebook' icon='facebook' />
                    <Button circular color='twitter' icon='twitter' />
                    <Button circular color='linkedin' icon='linkedin' />
                    <Button circular color='google plus' icon='google plus' />

                </div>




            </Container>


            <div className="help">
                <h1><p><i>Yardım Al </i></p></h1>
                <br />

                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                        <List.Content>
                            <List.Header><p>Handel</p></List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                        <List.Content>
                            <List.Header><p>Christian</p></List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                        <List.Content>
                            <List.Header><p>Daniel</p></List.Header>
                        </List.Content>
                    </List.Item>
                </List>



            </div>
            <div className="list">
                <List>
                    <List.Item><p>HAKKIMIZDA</p></List.Item>
                    <List.Item><p>Hakkımızda</p></List.Item>
                    <List.Item><p>Reklam Verin</p></List.Item>
                    <List.Item><p>İletişim</p></List.Item>
                    <List.Item><p>Kariyer Rehberi</p></List.Item>
                    <List.Item><p>İlan Satın Al</p></List.Item>
                    <List.Item><p>İK Blog</p></List.Item>
                </List>

            </div>


        </div>
    )
}
