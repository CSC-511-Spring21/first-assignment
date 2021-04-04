import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DateTrackerComponent extends Component {
  @tracked theMonth = new Date().getMonth() + 1;
  @tracked theDay = new Date().getDate();
  @tracked theYear = new Date().getFullYear();
  @tracked theHour = new Date().getHours();
  @tracked theMin = new Date().getMinutes();
  @tracked theMilli = new Date().getMilliseconds();
  @tracked theSec = new Date().getSeconds();
  @tracked theHourCali = this.theHour - 3;

  constructor() {
    super(...arguments);
    if (this.theHour > 12) {
      this.theHour = this.theHour - 12;
    }
    if (this.theHourCali > 12) {
      this.theHourCali = this.theHourCali - 12;
    }
    setInterval(() => {
      this.refresh();
    }, 1000);
  }

  @action
  refresh() {
    this.theMonth = new Date().getMonth() + 1;
    this.theDate = new Date().getDate();
    this.theYear = new Date().getFullYear();
    this.theHour = new Date().getHours();
    this.theMin = new Date().getMinutes();
    this.theMilli = new Date().getMilliseconds();
    this.theSec = new Date().getSeconds();
    this.theHourCali = this.theHour - 3;
    if (this.theHour > 12) {
      this.theHour = this.theHour - 12;
    }
      if (this.theHourCali > 12) {
        this.theHourCali = this.theHourCali - 12;
    }
  }
}
