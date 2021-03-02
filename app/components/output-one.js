import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class OutputOneComponent extends Component {

     //1st way variables
    @tracked currentDate;
    @tracked currentTime;
    @tracked currentDateTime;
 
    @tracked otherDate;
    @tracked otherTime;
    @tracked otherDateTime;
 
     @action
     updateOther() {
         if(this.anotherDate.getHours >= 24) {
             this.anotherDate.setDate = this.anotherDate.date + 1 % 7
             this.anotherDate.setHours = this.anotherDate.getHours % 24
         }
     }
 
     @action
     updateFirstValues() {
         
         this.currentDate = String(new Date().toLocaleDateString())
         // @tracked currentTime = new Date().toLocaleTimeString()
         this.currentTime = (("00" + new Date().getHours()).slice(-2) + ":" + ("00" + new Date().getMinutes()).slice(-2)
         + ":" + ("00" + new Date().getSeconds()).slice(-2) + ":" + ("00" + new Date().getMilliseconds()).slice(-2))
         this.currentDateTime = "Date: " + this.currentDate + " Time: " + this.currentTime
     
         this.otherDate = String(new Date().toLocaleDateString("ja-JP"))
         this.otherTime = (("00" + ((new Date().getHours() + 14) % 24)).slice(-2) + ":"
         + ("00" + new Date().getMinutes()).slice(-2) + ":" + ("00" + new Date().getSeconds()).slice(-2)
         + ":" + ("00" + new Date().getMilliseconds()).slice(-2))
         this.otherDateTime = "Date: " + this.otherDate + " Time: " + this.otherTime
     }

}
