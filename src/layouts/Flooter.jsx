import React from 'react'
import { Button, Icon, Container } from 'semantic-ui-react'
import flooter from '../css/flooter.css'
import { Image, List, Segment } from 'semantic-ui-react'



export default function Flooter() {
    return (
        <div className="flooter">
        <br />

            <Container>
                <div className="button">
                    <Button circular color='facebook' icon='facebook' />
                    <Button circular color='twitter' icon='twitter' />
                    <Button circular color='linkedin' icon='linkedin' />
                    <Button circular color='google plus' icon='google plus' />

                </div>




            </Container>
            <br /><br />


            <div className="help">
                <div className="floot1">
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




                <div className="floot2">
                    <List>
                        <List.Item><p> YASAL</p></List.Item>
                        <List.Item><p>Kullanım Koşulları</p></List.Item>
                        <List.Item><p>Gizlilik Sözleşmesi</p></List.Item>
                        <List.Item><p>Üyelik Sözleşmesi</p></List.Item>
                        <List.Item><p>Çerezlerin Kullanımı</p></List.Item>
                        <List.Item><p>Kalite Politikası</p></List.Item>
                        <List.Item><p>KVKK Metni</p></List.Item>
                    </List>

                </div>
                <div className="floot3">
                    <List>

                        <List.Item><p>  ONLİNE İŞ İLETİŞİM BİLGİLERİ</p></List.Item>
                        <List.Item><p><Icon name='map marker alternate' />Atatürk Caddesi, No: 82 Yenişehir Antalya TC.</p></List.Item>
                        <List.Item><p><Icon name='envelope' /> isbul_bilgi@csgb.gov.ct.tr</p></List.Item>
                        <List.Item><p><Icon name='phone volume' />+90 (392) 228 85 58-57</p></List.Item>
                        <List.Item><p><Icon name='text telephone' /> +90 (392) 228 60-52</p></List.Item>

                    </List>


                </div>


            </div>




        </div>
    )
}
