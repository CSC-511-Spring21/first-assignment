/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BaseApp extends Component {
    @tracked city = 'New York, USA';
    @tracked dateAndTime = this.loadTime();
    placeOffset = { "Lagos, Nigeria": 1, 'New York, USA': -5 }
    currentOffset = this.placeOffset[this.city]

    @action
    citySelected(e) {
        this.city = e.target.value;
        this.currentOffset = this.placeOffset[e.target.value]
    }

    @action
    refresh() {
        this.getTimeFromPlace()
    }

    loadTime() {
        let d = new Date()
        let date = d.toDateString()
        //Format how the time is displayed on the screen
        let hours = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`
        let minutes = d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`
        let seconds = d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`
        let milliseconds = d.getMilliseconds() < 10 ? `00${d.getMilliseconds()}` :
            d.getMilliseconds() < 100 ? `0${d.getMilliseconds()}` :
            d.getMilliseconds()
        this.timeId = setInterval(() => this.getTimeFromPlace(), 1000)
        return (
            date + " " +
            hours + ":" +
            minutes + ":" +
            seconds + ":" +
            milliseconds
        )
    }

    getTimeFromPlace() {
        let d = new Date()
        let localTime = d.getTime()
        let localOffset = d.getTimezoneOffset() * 60000 //converts to milliseconds
        let utc = localOffset + localTime
        let placeTime = utc + (3600000 * this.currentOffset)
        let newDate = new Date(placeTime)
        let date = newDate.toDateString()
        //Format how the time is displayed on the screen
        let hours = newDate.getHours() > 9 ? newDate.getHours() : `0${newDate.getHours()}`
        let minutes = newDate.getMinutes() > 9 ? newDate.getMinutes() : `0${newDate.getMinutes()}`
        let seconds = newDate.getSeconds() > 9 ? newDate.getSeconds() : `0${newDate.getSeconds()}`
        let milliseconds = newDate.getMilliseconds() < 10 ? `00${newDate.getMilliseconds()}` :
            newDate.getMilliseconds() < 100 ? `0${newDate.getMilliseconds()}` :
            newDate.getMilliseconds()
        
        this.dateAndTime = date + " " +
            hours + ":" +
            minutes + ":" +
            seconds + ":" +
            milliseconds
    }
}
