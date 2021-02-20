/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';

export default class SimpleDateTimeComponent extends Component {
  @tracked localDateTime;
  @tracked remoteDateTime;

  /* localDateTime = new Date();
   */
  hoursDefference = 7;
  localDateTime = Date.now() + ' sassas';
  remoteDateTime = Date.now() - this.hoursDefference + ' sassas'
  localCity = 'New York City, New York USA';
  remoteCity = 'Bucharest, Romania';

  @action
  updateTime(eventObject) {
    this.localDateTime = "ttttttt";
    console.log('clicked');
  }
}
