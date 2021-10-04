
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'

import { Segment, Table, Button } from 'semantic-ui-react'
import JobAdvertisementsService from 'services/jobAdvertisements/jobAdvertisementsService'



export default function JobAdvertisementDetailsForPersonnel() {


    let { id } = useParams()


    const [jobAdvertisement, setJobAdvertisement] = useState({})

    let jobAdvertisementsService = new JobAdvertisementsService()

    useEffect(() => {
        jobAdvertisementsService.getById(id).then(result => setJobAdvertisement(result.data.data))
    }, [])

    function changeActive(id, active) {
        jobAdvertisementsService.jobAdvertisementConfirmTrue(id).then(result => setJobAdvertisement(result.data.data))
        {
            active === true &&
                toast.success("İş İlanı Onaylandı.")
        }
        {
            active === false &&
                toast.error("İş İlanı Reddedildi.")
            setTimeout(() => { window.location.reload() }, 0);
        }
    }



    return (
        <div>
            <Segment.Group key={jobAdvertisement.id}>
                <Segment style={{ backgroundColor: "black" }}><h3 style={{ backgroundColor: "black", color: "white", marginLeft: "1em", fontFamily: "Arial, Helvetica, sans-serif" }} >

                    {
                        jobAdvertisement.jobPosition?.position === null && <p style={{ color: "white" }}>-</p>

                    }
                    {
                        jobAdvertisement.jobPosition?.position != null && <p style={{ color: "white" }}>{jobAdvertisement.jobPosition?.position}</p>

                    }

                </h3></Segment>
                <Table className="jobAdvertisementTable" key={jobAdvertisement.id} >
                    <tfoot>
                        <tr key={jobAdvertisement.id}  >
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Minimum Maaş:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.minSalary === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.minSalary != null && <p style={{ color: "black" }}>{jobAdvertisement.minSalary}</p>

                                }

                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Maximum Maaş:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.maxSalary === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.maxSalary != null && <p style={{ color: "black" }}>{jobAdvertisement.maxSalary}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>İş Pzisyon:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.jobPosition?.position === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.jobPosition?.position != null && <p style={{ color: "black" }}>{jobAdvertisement.jobPosition?.position}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Şehir:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.cities?.cityName === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.cities?.cityName != null && <p style={{ color: "black" }}>{jobAdvertisement.cities?.cityName}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Firma ismi:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.employer?.companyName === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.employer?.companyName != null && <p style={{ color: "black" }}>{jobAdvertisement.employer?.companyName}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Çalışma Şekili:</p>
                            </td>
                            <td className="rightTd" >

                                {
                                    jobAdvertisement.wayOfWorking?.wayOfWorkingName === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.wayOfWorking?.wayOfWorkingName != null && <p style={{ color: "black" }}>{jobAdvertisement.wayOfWorking?.wayOfWorkingName}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Çalıima Zamanı:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.workingTime?.workingTimeName === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.workingTime?.workingTimeName != null && <p style={{ color: "black" }}>{jobAdvertisement.workingTime?.workingTimeName}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>İlan Tarihi:</p>
                            </td>
                            <td className="rightTd" >

                                {
                                    jobAdvertisement.createDate === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.createDate != null && <p style={{ color: "black" }}>{jobAdvertisement.createDate}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>Son Başvuru Tarihi:</p>
                            </td>
                            <td className="rightTd" >
                                <p style={{ color: "black" }}>{jobAdvertisement.deadLine}-</p>
                                {
                                    jobAdvertisement.deadLine === null && <p style={{ color: "black" }}>-</p>

                                }
                                {
                                    jobAdvertisement.deadLine != null && <p style={{ color: "black" }}>{jobAdvertisement.deadLine}</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="leftTd" >
                                <p style={{ color: "black" }}>İlan Aktiflik Durumu:</p>
                            </td>
                            <td className="rightTd" >
                                {
                                    jobAdvertisement.active === true && <p style={{ color: "black" }}>Aktif</p>

                                }
                                {
                                    jobAdvertisement.active === false && <p style={{ color: "black" }}>Pasif</p>

                                }
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                {
                                    jobAdvertisement.active === false &&
                                    <Button onClick={() => changeActive(id)} style={{ color: "green" }}>İlanı Onayla</Button>
                                }

                                {
                                    jobAdvertisement.active === true &&
                                    <Button onClick={() => changeActive(id)} style={{ color: "red" }} >İlanı Reddet</Button>

                                }
                            </td>

                        </tr>


                    </tfoot>

                </Table>
            </Segment.Group>


        </div>
    )
}
