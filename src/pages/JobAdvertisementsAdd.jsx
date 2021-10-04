import React, { useState, useEffect } from 'react'

import * as Yup from 'yup';
import CitiesService from 'services/citiesService';
import { Grid, Dropdown, Card, Form, Input, TextArea, Button } from "semantic-ui-react";

import { useFormik } from 'formik';
import JobAdvertisementsService from 'services/jobAdvertisements/jobAdvertisementsService';
import JobPositionService from 'services/jobAdvertisements/jobPositionService';
import WayOfWorkingService from 'services/jobAdvertisements/wayOfWorkingService';
import WorkingTimeService from 'services/jobAdvertisements/workingTime';
import EmployerService from 'services/employerService';

import moment from 'moment';
import { toast } from 'react-toastify';

export default function JobAdvertisementsAdd() {


  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [wayOfWorkings, setWayOfWorkings] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);
  const [employers, setEmployer] = useState([]);

  let jobAdvertisementsService = new JobAdvertisementsService()

  useEffect(() => {
    let citiesService = new CitiesService();
    citiesService.getCities().then(result => setCities(result.data.data))

    let wayOfWorkingService = new WayOfWorkingService();
    wayOfWorkingService.getWayOfWorking().then(result => setWayOfWorkings(result.data.data))

    let workingTimeService = new WorkingTimeService();
    workingTimeService.getWorkingTime().then(result => setWorkingTimes(result.data.data))

    let employerService = new EmployerService();
    employerService.getEmployers().then(result => setEmployer(result.data.data))

    let jobPositionService =new JobPositionService();
    jobPositionService.getJobPositions().then(result=> setJobPositions(result.data.data))
  
  }, [])


  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));


  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.position,
    value: jobPosition.id,
  }));

  const wayOfWorkingOption = wayOfWorkings.map((wayOfWorking, index) => ({
    key: index,
    text: wayOfWorking.wayOfWorkingName,
    value: wayOfWorking.id,
  }));
  const workingTimeOption = workingTimes.map((workingTime, index) => ({
    key: index,
    text: workingTime.workingTimeName,
    value: workingTime.id,
  }));

  const employerOption = employers.map((employer, index) => ({
    key: index,
    text: employer.companyName,
    value: employer.id,
  }));



  const formik = useFormik({
    initialValues: {
      employerId: "",
      cityId: "",
      jobDescription: "",
      minSalary: "",
      maxSalary: "",
      numberOfOpenPositions: "",
      jobPositionId: "",
      createDate: moment().format("YYYY-MM-DD"),
      deadLine: "",
      wayOfWorkingId: "",
      workingTimeId: ""
      

    },

    validationSchema: Yup.object({
      employerId: Yup.string().required("Lütfen Şirket ismi seçiniz."),
      cityId: Yup.string().required("Lütfen şehir sçiniz."),
      jobPositionId: Yup.string().required("Lütfen iş pozisyonunu seçiniz."),
      jobDescription: Yup.string().required("Lütfen iş Açoklamasını giriniz."),
      minSalary: Yup.number().positive().required("Lütfen minimum maaşı giriniz."),
      maxSalary: Yup.number().positive().required("Lütfen maximum maaşı giriniz."),
      numberOfOpenPositions: Yup.number().positive().required("Lütfen işe alınacak personel sayısını giriniz."),
      createDate: Yup.string().required("İlan başlama tarihini giriniz."),
      deadLine: Yup.string().required("İlan biti tarihini giriniz."),
      wayOfWorkingId: Yup.date().required("Lütfen iş çalışma şeklini giriniz."),
      workingTimeId: Yup.date().required("Lütfen iş zamanını giriniz.")



    }),
    onSubmit: (values) => {
      console.log(values);

      let jobAdvertisament = {
        employer: { id: values.employerId },
        cities: { id: values.cityId },
        jobPosition: { id: values.jobPositionId },
        deadLine: values.deadLine,
        createDate: values.createDate,
        jobDesciription: values.jobDescription,
        maxSalary: values.maxSalary,
        minSalary: values.minSalary,
        wayOfWorking: { id: values.wayOfWorkingId },
        workingTime: { id: values.workingTimeId }

      };

      console.log(jobAdvertisament);
      jobAdvertisementsService.add(jobAdvertisament).then((result) => console.log(result.data.data));
      toast.success("İlan Personel Onayına Gönderildi.")

    },

  });



  return (
    <div>

      <Card fluid>

        <Card.Header style={{backgroundColor:"black"}} >
          <h1 style={{ backgroundColor: "black",
           color: "white", marginTop:"1em",
            marginLeft: "17em",  fontFamily: "Arial, Helvetica, sans-serif" }}> İş İlanı Ekle</h1></Card.Header>
        <Card.Content>

          <Form onSubmit={formik.handleSubmit}>
            <Grid.Column width={8}>

              <Form.Field style={{ marginBottom: "1rem" }}>

                <label>Firma</label>
                <Dropdown
                  button
                  placeholder="Firma Seçin."
                  fluid
                  search
                  selection
                  id="employerId"
                  options={employerOption}
                  onChange={(event, data) =>
                    formik.setFieldValue("employerId", data.value)
                  }

                  value={formik.values.employerId}
                />
                {formik.errors.employerId && formik.touched.employerId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.employerId}
                  </div>
                )}


              </Form.Field>


              <Form.Field style={{ marginBottom: "0.5rem" }}>

                <label>Şehir</label>
                <Dropdown
                  button
                  placeholder="Şehir Seçin."
                  fluid
                  search
                  selection
                  id="cityId"
                  options={cityOption}
                  onChange={(event, data) =>
                    formik.setFieldValue("cityId", data.value)
                  }

                  value={formik.values.cityId}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}


              </Form.Field>
              <Form.Field style={{ marginBottom: "1rem" }}>

                <label>Pozisyon</label>
                <Dropdown
                  button
                  placeholder="pozisyon Seçin."
                  fluid
                  search
                  selection
                  id="jobPositionId"
                 options={jobPositionOption}
                  onChange={(event, data) =>
                    formik.setFieldValue("jobPositionId", data.value)
                  }

                  value={formik.values.jobPositionId}
                />
                {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobPositionId}
                  </div>
                )}


              </Form.Field>
              <Form.Field style={{ marginBottom: "1rem" }}>

                <label>Çalışma Şeklini</label>
                <Dropdown
                  button
                  placeholder="Çalışma Şeklini Seçin."
                  fluid
                  search
                  selection
                  id="wayOfWorkingId"
                  options={wayOfWorkingOption}
                  onChange={(event, data) =>
                    formik.setFieldValue("wayOfWorkingId", data.value)
                  }

                  value={formik.values.wayOfWorkingId}
                />
                {formik.errors.wayOfWorkingId && formik.touched.wayOfWorkingId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.wayOfWorkingId}
                  </div>
                )}


              </Form.Field>

            </Grid.Column>

            <Grid.Column width={8}>
              <Form.Field style={{ marginBottom: "1rem" }}>

                <label>Çalışma Zamanı</label>
                <Dropdown
                  button
                  placeholder="Çalışma Zamanını Seçin."
                  fluid
                  search
                  selection

                  id="workingTimeId"
                  options={workingTimeOption}
                  onChange={(event, data) =>
                    formik.setFieldValue("workingTimeId", data.value)
                  }

                  value={formik.values.workingTimeId}
                />
                {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workingTimeId}
                  </div>
                )}


              </Form.Field>

              <div className="divStyle" >
                <label>Maksimum Maaş</label>
                <Input id="maxSalary" 
                  placeholder="Maksimum Maaş..."
                  fluid 
                  style={{ marginRight: "1em", marginTop: "1em" }}

                  onChange={formik.handleChange} value={formik.values.maxSalary}></Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <p style={{ color: "red" }}>{formik.errors.maxSalary}</p>
                )}
              </div>



              <div className="divStyle">
                <label>Minimum Maaş</label>
                <Input id="minSalary"
                  placeholder="Minimum Maaş..."
                  fluid style={{ marginRight: "1em", marginTop: "1em" }}

                  onChange={formik.handleChange} value={formik.values.minSalary}></Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <p style={{ color: "red" }}>{formik.errors.minSalary}</p>
                )}
              </div>


              <div className="divStyle">
                <label>İşe Alınacak Personel Sayısı</label>
                <Input id="numberOfOpenPositions"
                  placeholder="Personel Sayısı..."
                  fluid style={{ marginRight: "1em", marginTop: "1em" }}

                  onChange={formik.handleChange} value={formik.values.numberOfOpenPositions}></Input>
                {formik.errors.numberOfOpenPositions && formik.touched.numberOfOpenPositions && (
                  <p style={{ color: "red" }}>{formik.errors.numberOfOpenPositions}</p>
                )}
              </div>

              <div className="divStyle">
                <label>Son Başvuru Tarihi:</label>
                <Input type="date" id="deadLine" placeholder="Son Başvuru Tarihi..."
                  fluid style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange} value={formik.values.deadLine}></Input>
                {formik.errors.deadLine && formik.touched.deadLine && (
                  <p style={{ color: "red" }}>{formik.errors.deadLine}</p>
                )}
              </div>
              
              <div className="divStyle">
                <label>Açıklama</label>
                <TextArea id="jobDescription" placeholder="Açıklama..." style={{ marginRight: "1em", marginTop: "1em", minHeight: 100 }} onChange={formik.handleChange} value={formik.values.jobDescription}></TextArea>
                {formik.errors.jobDescription && formik.touched.jobDescription && (
                  <p style={{ color: "red" }}>{formik.errors.jobDescription}</p>
                )}
              </div>

            </Grid.Column>
            <Button color="green" type="submit">İş ilanı ekle</Button>
            <Form.Field>


            </Form.Field>

          </Form>

        </Card.Content>
      </Card>

    </div>
  )
}
