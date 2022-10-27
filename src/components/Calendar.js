import React from 'react'
import "../styles/Calendar.css"
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite-rtl.css"
import { useResizeScroll } from '../hooks/useResizeScroll';

export default function Calendar({form,setForm}) {
const {width} =useResizeScroll()

    const handleChange=(value)=>{
      if(value){
        setForm({
          ...form,
          checkIn:value[0],
          checkOut:value[1]
        })
      }else{
        setForm({
          ...form,
          checkIn:"",
          checkOut:""
        })
      }
    }
    return (
    <div>
        <DateRangePicker 
          onChange={handleChange} 
          showOneCalendar={width > 890 ? false:true}
          block 
          format="yyyy-MM-dd" 
          defaultCalendarValue={[new Date('2022-02-01'), new Date('2022-03-01')]}
          placeholder="Check in - Check out"   
          preventOverflow
      />
    </div>
  )
}
