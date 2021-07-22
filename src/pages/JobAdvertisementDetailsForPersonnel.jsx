
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'


import { Segment, Table, Button } from 'semantic-ui-react'
import JobAdvertisementsService from 'services/jobAdvertisaments/jobAdvertisamentsService'



export default function JobAdvertisementDetailsForPersonnel() {


    let { id } = useParams()


    const [jobAdvertisament, setJobAdvertisament] = useState({})
    let jobAdvertisamentsService = new JobAdvertisementsService()

    useEffect(() => {
        jobAdvertisamentsService.getById(id).then(result => setJobAdvertisament(result.data.data))
    }, [])

    function changeActive(id, active) {
        jobAdvertisamentsService.jobAdvertisementConfirmTrue(id).then(result => setJobAdvertisament(result.data.data))
        {
            active == true &&
                console.log("İş ilanı onaylandı.")
        }
        {
            active == false &&
                console.log("iş ilanı reddedildi.")
        }
    }



    return (
        <div>
            <Segment.Group>
                <Segment style={{ backgroundColor: "black" }}><h3 style={{ backgroundColor: "black", color: "white", marginLeft: "1em", fontFamily: "Arial, Helvetica, sans-serif" }} >-{jobAdvertisament.jobPosition?.position}-</h3></Segment>
                <Table className="jobAdvertisementTable" >
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Minimum Maaş:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.minSalary}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Maximum Maaş:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.maxSalary}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>İş Pzisyon:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.jobPosition?.position}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Şehir:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.cities?.cityName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Firma ismi:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.employer?.companyName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Çalışma Şekili:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.wayOfWorking}-</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Çalıima Zamanı:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.workingTime}-</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>İlan Tarihi:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.createDate}-</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>Son Başvuru Tarihi:</p>
                        </td>
                        <td className="rightTd" >
                            <p style={{ color: "black" }}>{jobAdvertisament.deadLine}-</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftTd" >
                            <p style={{ color: "black" }}>İlan Aktiflik Durumu:</p>
                        </td>
                        <td className="rightTd" >
                            {
                                jobAdvertisament.active == true && <p style={{color:"black"}}>Aktif</p>

                            }
                            {
                                jobAdvertisament.active == false && <p style={{color:"black"}}>Pasif</p>

                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            {
                                jobAdvertisament.active == false &&
                                <Button onClick={() => changeActive(id)} style={{ backgroundColor: "#780000", color: "white", marginBottom: "0.001em" }}>İlanı Onayla</Button>
                            }
                            {
                                jobAdvertisament.active == true &&
                                <Button onClick={() => changeActive(id)} style={{ backgroundColor: "#780000", color: "white", marginBottom: "0.001em" }}>İlanı Reddet</Button>
                            }
                        </td>

                    </tr>
                </Table>
            </Segment.Group>


        </div>
    )
}
