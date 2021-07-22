import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button, Image, Icon, GridColumn } from 'semantic-ui-react'
import JobAdvertisementsService from 'services/jobAdvertisaments/jobAdvertisamentsService'

export default function JobAdvertisamentDetail() {
  let { id } = useParams()

  const [jobAdvertisement, setJobAdvertisement] = useState({})

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementsService();
    jobAdvertisementService.getByJobAdvertisamentsDetailId(id).then(result => setJobAdvertisement(result.data.data))
  }, [])
  return (
    <div>
      <Card.Group >
        <Card fluid  >
          <Card.Content>
            <GridColumn width={8}>
            <Image
              floated='left'
              size='small'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PyE1yiN5zv71pAS_F6tFBOpzasHg9UnrUw&usqp=CAU'
            />

            </GridColumn>
            <GridColumn width={8}>
              
            <Card.Header>{jobAdvertisement.position}</Card.Header>
            <Card.Description>
              <div>
              <Icon name='building' /> {jobAdvertisement.companyName}

              </div> 
              <div>
              <Icon name='calendar alternate' /> İlan Tarihi : {jobAdvertisement.createDate}
                
              </div>
              <div>
              <Icon name='calendar alternate' />Bitiş Tarihi : {jobAdvertisement.deadLine}
                
                </div>
            </Card.Description>

            </GridColumn>
           
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>

              <Button animated basic color='blue'>
                <Button.Content visible>Favorilere Ekle</Button.Content>
                <Button.Content hidden>
                  <Icon name='star outline ' />
                </Button.Content>
              </Button>
              <Button basic color='blue'>
                <Button.Content hidden>
                  <Icon name='diamond ' />Firmayı Takip Et
                </Button.Content>
              </Button>

            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card fluid link>
        <Card.Content>
          <Card.Header content='Ek Bilgiler' />
          
          <Card.Description >
            Firma : {jobAdvertisement.companyName} <br />
            İlan Tarihi : {jobAdvertisement.createDate} <br />
            Bitiş Tarihi : {jobAdvertisement.deadLine} <br />
            Pozisyon : {jobAdvertisement.position} <br />
            Minimum Maaş : {jobAdvertisement.minSalary} TL <br />
            Maximum Maaş : {jobAdvertisement.maxSalary} TL <br />
            Aranan Personel Saysı : {jobAdvertisement.numberOfPosition}  kişi<br />
            Çalişma Yeri: {jobAdvertisement.wayOfWorkingName} <br />
            Şehir : {jobAdvertisement.cityName} <br />
            Çalışma Şekli : {jobAdvertisement.workingTimeName} <br />
          </Card.Description>
          <Button content='Arkadaşına Gönde' icon='paper plane' labelPosition='right' />
          <Button content='Şikayet Et' icon='exclamation circle' labelPosition='right' />
          <Button content='Başvur' icon='rocket' labelPosition='right' />

        </Card.Content>
      </Card>
    </div>
  )
}
