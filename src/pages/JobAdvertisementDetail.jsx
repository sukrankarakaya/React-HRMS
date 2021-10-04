
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { Card, Button, Image, Icon, GridColumn } from 'semantic-ui-react'
import FavoriteJobAdvertisementService from 'services/jobAdvertisements/favoriteJobAdvertisementService'
import JobAdvertisementsService from 'services/jobAdvertisements/jobAdvertisementsService'



export default function JobAdvertisementDetail() {
  let { id } = useParams()
  const {authItems} = useSelector(state => state.auth)

  const [jobAdvertisement, setJobAdvertisement] = useState({})

  const [favoriJob, setFavoriJob] = useState([])

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementsService();
    jobAdvertisementService.getByJobAdvertisementsDetailId(id).then(result => setJobAdvertisement(result.data.data))

  }, [])




  let favoriteService = new FavoriteJobAdvertisementService();

  useEffect(() => {

    //favoriteService.getByJobAdvertId(id).then(result => setFavoriJob(result.data.data))
    favoriteService.getByJobAdvertIdAndCandidateId(authItems[0].user.id, id).then(result => setFavoriJob(result.data.data))

  }, [])



  const history =useHistory();
    

  function favoriteAdd(candidateId, jobAdvertisementId) {

    favoriteService.add(candidateId, jobAdvertisementId)
      .then(result => console.log(result.data.data));
      toast.success("İlan Favorilere Eklendi.");
     
    //  window.location.reload()

  }




  return (
    <div>
      <Card.Group key={jobAdvertisement.id} style={{ marginTop: "1em" }}>
        <Card fluid  >
          <Card.Content>
            <GridColumn width={8}>
              <Image

                floated='left'
                size='small'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PyE1yiN5zv71pAS_F6tFBOpzasHg9UnrUw&usqp=CAU'
              />

            </GridColumn>
            <GridColumn width={8} >

              <Card.Header  ><h3 style={{ color: "black", fontFamily: "Arial, Helvetica, sans-serif" }} >-{jobAdvertisement.position}-</h3></Card.Header>
              <Card.Description>
                <div>
                  <Icon name='building' /> {jobAdvertisement.companyName}

                </div>
                <div>
                  <Icon name='clock outline' /> İlan Tarihi : {jobAdvertisement.createDate}

                </div>
                <div>
                  <Icon name='clock outline' />Bitiş Tarihi : {jobAdvertisement.deadLine}

                </div>
              </Card.Description>

            </GridColumn>

          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>


              {
                favoriJob == null && <Button basic color='blue'
                  onClick={() => favoriteAdd(authItems[0].user.id, id)}
                  as={NavLink} to="/"
                  content='Favorilere Ekle' icon='heart outline' />

              }

              {

                favoriJob != null &&
                <Button basic color='blue'
                  content='Favori İlan' icon='heart' />

              }


              <Button basic color='blue' content='Firmayı Takip Et' icon='gem outline' />


            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card fluid link>
        <Card.Content>
          <Card.Header content='Ek Bilgiler' />

          <Card.Description>
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
            Aranan Nitelikler : {jobAdvertisement.jobDesciription} <br />
          </Card.Description>


          <Button color="blue" content='Arkadaşına Gönde' icon='paper plane' labelPosition='right' />
          <Button color="blue" content='Şikayet Et' icon='exclamation circle' labelPosition='right' />
          <Button color="blue" content='Başvur' icon='rocket' labelPosition='right' />

        </Card.Content>
      </Card>
    </div>
  )
}
