import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import moment from 'moment';

export default class OptionalComponent extends Component {

    // @tracked chosenLoc = @location

    constructor() {
        super(...arguments);
    }

    //3rd way
    //this intially gets info from other examples, but will refresh with new values
    //methods from other dependencies
    // @tracked location = this.location
    @tracked currentDateTime = moment();//= moment().tz("America/New_York").format("ha z");
    @tracked dateTime;
    // @tracked date = this.date
    // @tracked time = this.time

    // @tracked time = moment().format('MMMM Do YYYY, h:mm:ss a')
    // @tracked dateTime 
    // @tracked location = moment();
    // @tracked dateTime = moment().tz("America/New_York").format("ha z");
   
    @action
    updateLocation() {
        // an api would be more suited for this action here
        //for each of the actions, I wanted to use moment-timezone, but
        //couldn't get it running
    }

    @action
    updateBeijing() {
        // @location = 
    }

    @action
    updateBerlin() {
        // @location = 
    }

    @action
    updateJerusalem() {
        // @location = 
    }

    @action
    updateLondon() {
        // @location = 
    }

    @action
    updateMoscow() {
        // @location = 
    }

    @action
    updateNy() {
        // @location = 
    }

    @action
    updatePyang() {
        // @location = 
    }

    //timezone doesn't work yet
    @action
    updateDateTime() {
        // this.location = 
        dateTime = moment().tz("America/New_York").format("ha z");
    }

}