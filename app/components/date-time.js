import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DateTimeComponent extends Component {
  @tracked nyTime = '';
  @tracked nyDate = '';
  @tracked japanTime = '';
  @tracked japanDate = '';
  @tracked interval = 1;

  startTimer = () => {
    this.getDateAndTime();
    setTimeout(this.startTimer, this.interval * 1000);
  };

  @action
  getDateAndTime() {
    const now = new Date();
    this.nyDate = now.toLocaleDateString();
    this.nyTime = now.toLocaleTimeString();

    this.japanTime = now.toLocaleTimeString(
      now.setTime(now.getTime() + 14 * 60 * 60 * 1000)
    );
    this.japanDate = now.toLocaleDateString();
  }

  @action
  updateInterval(value) {
    if (value > 0) {
      this.interval = Number(value);
    }
  }

  constructor() {
    super(...arguments);
    this.getDateAndTime();
    setTimeout(this.startTimer, this.interval);
  }
}
