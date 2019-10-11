import React, { useState } from 'react'
import { string } from 'prop-types'
import dayjs from 'dayjs';
import styles from './index.css';

const Datepicker = ({ initialDate }) => {
    const [ currentDate, setCurrentDate ] = useState(dayjs(initialDate));
    
    const handlePrevDay = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    }

    const handleNextDay = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    }

    const renderCalendarDays = () => {
        const calendarDays = [];
        const firstDayOfMonthOffset = currentDate.startOf('month').get('day');
          
        for(let i = 1; i <= firstDayOfMonthOffset; i++ ) {
            calendarDays.push(<div className={styles.calendarDay}></div>)
        }
    
        for(let i = 1; i <= currentDate.daysInMonth(); i++ ) {
            calendarDays.push(<div className={styles.calendarDay}>{i}</div>)
        }
        
        return calendarDays;
    }

    const formattedCurrentDate = currentDate.format('DD MMMM YYYY');

    return (
        <div className={styles.container}>
            <button onClick={handlePrevDay}>prev</button>
            { formattedCurrentDate }
            <button onClick={handleNextDay}>next</button>
            <div className={styles.calendar}>
                <div className={styles.calendarDay}>пн</div>
                <div className={styles.calendarDay}>вт</div>
                <div className={styles.calendarDay}>ср</div>
                <div className={styles.calendarDay}>чт</div>
                <div className={styles.calendarDay}>пт</div>
                <div className={styles.calendarDay}>сб</div>
                <div className={styles.calendarDay}>вс</div>
                { renderCalendarDays() }
            </div>
        </div>
    )
}

Datepicker.propTypes = {
    initialDate: string
}

Datepicker.defaultProps = {
    initialDate: dayjs()
}

export default Datepicker;
