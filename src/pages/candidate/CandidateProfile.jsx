import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card,  Divider, Image, Header, Segment, Table } from 'semantic-ui-react'
import CandidateImageService from 'services/candidate/candidateImageService'
import CandidateService from 'services/candidate/candidateService'
import ExperianceAddModal from './CV/CVAddModal/ExperianceAddModal'
import LanguageAddModal from './CV/CVAddModal/LanguageAddModal'
import SchoolAddModal from './CV/CVAddModal/SchoolAddModal'
import SocialMediaAddModal from './CV/CVAddModal/SocialMediaAddModal'
import TechnologyAddModal from './CV/CVAddModal/TechnologyAddModal'
import ExperianceDeleteModal from './CV/CVDeleteModal/ExperianceDeleteModal'
import LanguageDeleteModal from './CV/CVDeleteModal/LanguageDeleteModal'
import SchoolDeleteModal from './CV/CVDeleteModal/SchoolDeleteModal'
import SocialMediaDeleteModal from './CV/CVDeleteModal/SocialMediaDeleteModal'
import TechnologyDeleteModal from './CV/CVDeleteModal/TechnologyDeleteModal'
import CandidateUpdateModal from './CV/CvUpdateModal/CandidateUpdateModal'
import CoverLetterUpdateModal from './CV/CvUpdateModal/CoverLetterUpdateModal'
import ExperianceUpdateModal from './CV/CvUpdateModal/ExperianceUpdateModal'
import LanguageUpdateModal from './CV/CvUpdateModal/LanguageUpdateModal'
import SchoolUpdateModal from './CV/CvUpdateModal/SchoolUpdateModal'
import SocialMediaUpdateModal from './CV/CvUpdateModal/SocialMediaUpdateModal'
import TechnologyUpdateModal from './CV/CvUpdateModal/TechnologyUpdateModal'

export default function CandidateProfile() {

    let { id } = useParams();

    const [cv, setCv] = useState([])
    const [image, setImage] = useState([])


    useEffect(() => {
        let cvService = new CandidateService();
        cvService.getCandidateCvById(id).then(result => setCv(result.data.data))


        let imageService = new CandidateImageService();
        imageService.getByCandidateId(id).then(result => setImage(result.data.data))

    }, [])

    return (


        <div style={{ marginTop: "5em" }}>



            <Segment placeholder >
                <Header as='h1' floated='left'>
                    CV

                </Header>

                <Segment style={{ backgroundColor: "#1f7a9b59" }}>
                    <Header as='h1' floated='left'>
                        Biyografi

                    </Header>
                    {cv.candidateCoverLetter?.map(coverLetter => (
                        <div className="ui right floated medium  icon buttons" key={coverLetter.id}>
                            <CoverLetterUpdateModal id={coverLetter.id} coverLetter={coverLetter.coverLetter}></CoverLetterUpdateModal>

                        </div>

                    ))}

                    <Divider clearing />
                    <Card fluid style={{ backgroundColor: "#1f7a9b59" }}>
                        {cv.candidateCoverLetter?.map(coverLetter => (
                            <Card.Content key={coverLetter.id}>


                                <h2 >  {cv.candidate.firstName}  {cv.candidate.lastName}</h2>


                                <Card.Content>
                                    {
                                        image != null && <Image src={image.imageUrl} floated='right' circular size="small"></Image>
                                    }

                                    {
                                        image == null && <Image src="https://res.cloudinary.com/sukran/image/upload/v1627864081/user_default_jjugnf.png" floated='right' circular size="small"></Image>
                                    }
                                </Card.Content>


                                <br />  <br /> {coverLetter.coverLetter} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Card.Content>
                        ))}
                    </Card>



                </Segment>


                <Segment style={{ backgroundColor: "#1f7a9b59" }}>


                    <Header as='h2' floated='left'>
                        Genel Bilgi
                    </Header >


                    <CandidateUpdateModal
                        id={cv.candidate?.id}
                        firstName={cv.candidate?.firstName}
                        lastName={cv.candidate?.lastName}
                        birthDate={cv.candidate?.birthDate}
                        email={cv.candidate?.email}


                    />

                    <Divider clearing />

                    <Table celled >
                        <Table.Header>

                            <Table.Row >
                                <Table.HeaderCell >Ad</Table.HeaderCell>
                                <Table.HeaderCell >Soyad</Table.HeaderCell>
                                <Table.HeaderCell >Email</Table.HeaderCell>
                                <Table.HeaderCell >Doğum Tarihi</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>
                        <Table.Body>

                            <Table.Row >
                                <Table.Cell >{cv.candidate?.firstName}</Table.Cell>
                                <Table.Cell>{cv.candidate?.lastName}</Table.Cell>
                                <Table.Cell>{cv.candidate?.email}</Table.Cell>
                                <Table.Cell>{cv.candidate?.birthDate}</Table.Cell>
                            </Table.Row>

                        </Table.Body>

                    </Table>

                </Segment>

                <Segment style={{ backgroundColor: "#1f7a9b59" }}>


                    <Header as='h2' floated='left'>
                        Medya Bilgisi
                    </Header >

                    <Divider clearing />

                    <Table celled >
                        <Table.Header>

                            <Table.Row >

                                <Table.HeaderCell >GitHub Adresi</Table.HeaderCell>
                                <Table.HeaderCell >Linkedin Adresi</Table.HeaderCell>
                                <Table.HeaderCell >

                                    <SocialMediaAddModal candidateId={cv.id} />

                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {cv.socialMedia?.map(socialMedia => (
                                <Table.Row key={socialMedia.id}>

                                    <Table.Cell>{socialMedia?.githubLink} </Table.Cell>
                                    <Table.Cell>{socialMedia?.linkedinLink} </Table.Cell>
                                    <Table.Cell>
                                        <div className="ui right floated medium  icon buttons" key={socialMedia.id}>
                                            <SocialMediaUpdateModal
                                                id={socialMedia.id}
                                                githubLink={socialMedia.githubLink}
                                                linkedinLink={socialMedia.linkedinLink}
                                            />

                                            <SocialMediaDeleteModal id={socialMedia.id} />

                                        </div>


                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>

                </Segment>



                <Segment style={{ backgroundColor: "#1f7a9b59" }}>

                    <Header as='h2' floated='left'>
                        Okul Bilgisi

                    </Header>
                    <Table celled >
                        <Table.Header>

                            <Table.Row>
                                <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                                <Table.HeaderCell>Bölüm</Table.HeaderCell>
                                <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                                <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>


                                <Table.HeaderCell>

                                    <SchoolAddModal candidateId={cv.id} />

                                </Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {cv.candidateSchool?.map(school => (
                                <Table.Row key={school.id}>
                                    <Table.Cell>{school.schoolName}</Table.Cell>
                                    <Table.Cell>{school.department}</Table.Cell>
                                    <Table.Cell>{school.startDate}</Table.Cell>
                                    <Table.Cell>{school.endDate ? school.endDate : <p style={{ color: "black" }}>Devam Ediyor</p>}</Table.Cell>
                                    <Table.Cell>
                                        <div className="ui right floated medium  icon buttons">
                                            <SchoolUpdateModal
                                                id={school.id}
                                                schoolName={school.schoolName}
                                                department={school.department}
                                                startDate={school.startDate}
                                                endDate={school.endDate}
                                            />

                                            <SchoolDeleteModal id={school.id} />

                                        </div>

                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>


                    </Table>


                </Segment>


                <Segment style={{ backgroundColor: "#1f7a9b59" }} >

                    <Header as='h2' floated='left'>
                        Denyim Bilgisi

                    </Header>

                    <Table celled >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                                <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                                <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                                <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>


                                <Table.HeaderCell >
                                    <ExperianceAddModal candidateId={cv.id} />


                                </Table.HeaderCell>




                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {cv.experiences?.map(experience => (
                                <Table.Row key={experience.id}>
                                    <Table.Cell>{experience.workPlace}</Table.Cell>
                                    <Table.Cell>{experience.position}</Table.Cell>
                                    <Table.Cell>{experience.startDate}</Table.Cell>
                                    <Table.Cell>{experience.endDate ? experience.endDate : <p style={{ color: "black" }}>Devam Ediyor</p>}</Table.Cell>
                                    <Table.Cell>
                                        <div className="ui right floated medium  icon buttons">
                                            <ExperianceUpdateModal
                                                id={experience.id}
                                                workPlace={experience.workPlace}
                                                position={experience.position}
                                                startDate={experience.startDate}
                                                endDate={experience.endDate}
                                            />

                                            <ExperianceDeleteModal id={experience.id} />


                                        </div>

                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>


                </Segment>

                <Segment style={{ backgroundColor: "#1f7a9b59" }}>

                    <Header as='h2' floated='left'>
                        Dil Bilgisi

                    </Header>

                    <Table celled >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell >Yabancı Dil</Table.HeaderCell>
                                <Table.HeaderCell>Seviye</Table.HeaderCell>
                                <Table.HeaderCell>
                                    <LanguageAddModal candidateId={cv.id} />
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {cv.candidateLanguages?.map(language => (
                                <Table.Row key={language.id}>
                                    <Table.Cell>{language.language}</Table.Cell>
                                    <Table.Cell>{language.languageLevel?.name}</Table.Cell>
                                    <Table.Cell>
                                        <div className="ui right floated medium  icon buttons">
                                            <LanguageUpdateModal
                                                id={language.id}
                                                language={language.language}
                                                levelId={language.languageLevel?.levelId}
                                            />

                                            <LanguageDeleteModal id={language.id} />

                                        </div>
                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>

                </Segment>

                <Segment style={{ backgroundColor: "#1f7a9b59" }}>

                    <Header as='h2' floated='left'>
                        Yetenek Bilgisi

                    </Header>

                    <Table celled >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell ><p style={{ color: "black" }}>Yetenekler</p> </Table.HeaderCell>
                                <Table.HeaderCell>
                                    <TechnologyAddModal candidateId={cv.id} />
                                </Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {cv.technologies?.map(technologi => (
                                <Table.Row key={technologi.id}>
                                    <Table.Cell><li>{technologi.technologyName}</li></Table.Cell>
                                    <Table.Cell>
                                        <div className="ui right floated medium  icon buttons">
                                            <TechnologyUpdateModal
                                                id={technologi.id}
                                                technologyName={technologi.technologyName}
                                            />
                                            <TechnologyDeleteModal id={technologi.id} />

                                        </div>
                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>


                </Segment>





            </Segment>














        </div >





    )
}
