import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DateTimeComponent extends Component {

    
    @tracked nyDate;
    @tracked nyTime;
    @tracked lagosTime;
    @tracked lagosDate;
    @tracked count = 0;

    constructor()
    {
        super(...arguments);
        this.currentTimeE();
        this.currentTime();
        this.currentDate();
        this.currentDateL();
    }
    currentDate()
    {
        let d1 = new Date();
        this.nyDate = d1.getMonth()+1 + "/" + d1.getDate() + "/" + d1.getFullYear(); 
    }

    currentDateL()
    {
        let d2 = new Date();
        this.lagosDate = d2.getMonth()+1 + "/" + d2.getDate() + "/" + d2.getFullYear(); 
    }

    currentTime(){
        const d3 = new Date();
        var uptime = d3.toLocaleTimeString();
        this.nyTime = uptime;
        //document.getElementById('uptime').innerHTML = uptime;
    }

    currentTimeE()
    {
        let lTime = new Date();
        let sec = lTime.getSeconds();
        let min = lTime.getMinutes();
        let hours = lTime.getUTCHours()+1;
        let PM = 'PM';

        if(hours < 12)
        {
            PM = 'AM';
        }
        if(hours > 12)
        {
            hours -= 12;
        }
        if(min < 10)
        {
            min = "0" + min;
        }
        if(sec < 10)
        {
            sec = "0" + sec;
        }    
        this.lagosTime = hours + ":" + min + ":" + sec +" " + PM;
    }

   @action
    refresh()
    {
        this.nyDate = null;
        this.nyTime = null;
        this.lagosDate = null;
        this.lagosTime = null;
        this.currentDate();
        this.currentDateL();
        this.currentTimeE();
        this.currentTime();
        this.count++;
    }
}
