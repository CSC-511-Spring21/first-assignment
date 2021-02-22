/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';

export default class SimpleDateTimeComponent extends Component {
    
 
  hoursDifference = 7;
  @tracked localDateTime = moment(Date.now()).format("ddd MMM Do, YYYY h:mm:ss:SS a");
  @tracked remoteDateTime = moment(Date.now()).add(this.hoursDifference, 'h').format("ddd MMM Do, YYYY h:mm:ss:SS a");

  /* localDateTime = new Date();
   */
  
  /* localDateTime; */
  localCity = 'New York City, USA';
  remoteCity = 'Bucharest, Romania';

  @action
  updateTime() {
    this.localDateTime = moment(Date.now()).format("ddd MMM Do, YYYY h:mm:ss:SS a");
    this.remoteDateTime = moment(Date.now()).add(this.hoursDifference, 'h').format("ddd MMM Do, YYYY h:mm:ss:SS a");
    console.log(this.localDateTime);
  }
}
