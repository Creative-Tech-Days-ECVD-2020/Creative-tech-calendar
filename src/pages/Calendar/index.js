import React, { useState, useEffect } from 'react';
import {DisplayCalendar} from './style'
import dayGridPlugin from '@fullcalendar/daygrid'
import icsToJson from 'ics-to-json'

import './main.scss'


const convert = async (fileLocation) => {
    const icsRes = await fetch(fileLocation, {
        headers: {
            Accept: '*/*'
        }
    })
    const icsData = await icsRes.text()
    // Convert
    const data = icsToJson(icsData)
    return data
}

const Calendar = () => {
    
    const [events, setEvents] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await convert('http://ecv-hp.imadiff.net:85/Telechargements/ical/Edt_CABIATI.ics?version=2018.0.3.6&idICal=9C13103BDC929102D2342023975E6449&param=643d5b312e2e36325d2666683d3126663d31')
            setEvents(data);
        }
        getData();
    }, []) 

    return (
    <>
        <h1>Calendar</h1>
        {console.log(events)}
        <DisplayCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} events={events} />
    </>
    )
};

export default Calendar;