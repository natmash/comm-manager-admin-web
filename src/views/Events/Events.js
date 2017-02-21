import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class Events extends Component {
    render() {
        return <div>
            <BigCalendar
                events={[]}
                defaultView='month'
                defaultDate={new Date()}
            />
        </div>
    }
}

export default Events;
