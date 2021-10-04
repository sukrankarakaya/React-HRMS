import React, { useEffect, useState } from 'react'

import { Dropdown, Button } from "semantic-ui-react";
import CitiesService from 'services/citiesService';
import JobAdvertisementsService from 'services/jobAdvertisements/jobAdvertisementsService';
import JobPositionService from 'services/jobAdvertisements/jobPositionService';
import WayOfWorkingService from 'services/jobAdvertisements/wayOfWorkingService';
import WorkingTimeService from 'services/jobAdvertisements/workingTime';

export default function Filter({ jobAdvertisementFilters }) {

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [wayOfWorkings, setWayOfWorkings] = useState([]);
    const [workingTimes, setWorkingTimes] = useState([]);


    let jobAdvertisementsService = new JobAdvertisementsService()

    useEffect(() => {
        let citiesService = new CitiesService();
        citiesService.getCities().then(result => setCities(result.data.data))

        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getWayOfWorking().then(result => setWayOfWorkings(result.data.data))

        let workingTimeService = new WorkingTimeService();
        workingTimeService.getWorkingTime().then(result => setWorkingTimes(result.data.data))

   
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))

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
        key:index,
        text: workingTime.workingTimeName,
        value: workingTime.id,
    }));




    const [jobPositionIds, setJobPositionIds] = useState([]);
    const handleChangeJobPositionIds = (event, { value }) => {
        setJobPositionIds(value);
    };

    const [cityIds, setCityIds] = useState([]);
    const handleChangeCityIds = (event, { value }) => {
        setCityIds(value);
    };
    const [wayOfWorkIds, setWayOfWorkIds] = useState([]);
    const handleChangewayOfWorkIds = (event, { value }) => {
        setWayOfWorkIds(value);
    };
    const [workTimeIds, setWorkTimeIds] = useState([]);
    const handleChangeWorkTimeIds = (event, { value }) => {
        setWorkTimeIds(value);
    };


    return (
        <div>



            <label>Pozisyon</label>
            <Dropdown
                placeholder="Pozisyon Seç"
                fluid
                multiple
                search
                selection
                options={jobPositionOption}
                value={jobPositionIds}
                onChange={handleChangeJobPositionIds}
            />

            <div style={{ marginTop: "15pt" }}>
                <label>Şehir</label>
                <Dropdown
                    placeholder="Şehir Seç"
                    fluid
                    multiple
                    search
                    selection
                    options={cityOption}
                    value={cityIds}
                    onChange={handleChangeCityIds}
                ></Dropdown>
            </div>

            <div style={{ marginTop: "15pt" }}>
                <label>Çalışma Türü</label>
                <Dropdown
                    placeholder="Çalışma Türü Seçin"
                    fluid
                    multiple
                    search
                    selection
                    options={wayOfWorkingOption}
                    value={wayOfWorkIds}
                    onChange={handleChangewayOfWorkIds}
                ></Dropdown>
            </div>

            <div style={{ marginTop: "15pt" }}>
                <label>Çalışma Zamanı</label>
                <Dropdown
                    placeholder="Çalışma Zamanı Seçin"
                    fluid
                    multiple
                    search
                    selection
                    options={workingTimeOption}
                    value={workTimeIds}
                    onChange={handleChangeWorkTimeIds}
                ></Dropdown>
            </div>
            <Button
                type="button"
                onClick={() =>
                    jobAdvertisementFilters({
                        jobPositionIds: jobPositionIds,
                        cityIds: cityIds,
                        wayOfWorkIds: wayOfWorkIds,
                        workTimeIds: workTimeIds,
                    })
                }
                fluid
                primary
                style={{ marginTop: "15pt" }}
            >
                FİLTRELE
            </Button>
        </div>
    )
}
