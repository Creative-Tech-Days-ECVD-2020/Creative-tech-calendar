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

/*
case START_DATE:
        currentObj[keyMap[START_DATE]] = new Date(value.replace(
          /^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)Z$/,
          '$4:$5:$6 $2/$3/$1'
      )).toISOString();
        break;

      case END_DATE:
        currentObj[keyMap[END_DATE]] = new Date(value.replace(
          /^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)Z$/,
          '$4:$5:$6 $2/$3/$1'
      )).toISOString();
        break;
*/

const Calendar = () => {
    
    const [events, setEvents] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await convert('http://moncalendar.com/file.ics')
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