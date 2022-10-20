import React from 'react'
import "../styles/Calendar.css"
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite-rtl.css"

export default function Calendar() {
    // console.log(DateRangePicker);

    const styles = { width: 1000, display: 'block',} 

    const handleChange=(value)=>{
        console.log(value);

    }
  return (
    
    <DateRangePicker 
        onChange={handleChange} 
        showOneCalendar 
        style={styles} block 
        format="yyyy-MM-dd" defaultCalendarValue={[new Date('2022-02-01'), new Date('2022-03-01')]}
        placeholder="Check in - Check out"   
        appearance="default"
    />
    
  )
}
