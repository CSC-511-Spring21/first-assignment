import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DateManagerComponent extends Component {
  @tracked date = new Date();
  @tracked intervalUpdater;

  constructor() {
    super(...arguments);
    this.intervalUpdater = setInterval(() => {
      this.updateTime();
    }, 1);
  }

  // eslint-disable-next-line
  willDestroyElement() {
    clearInterval(this.intervalUpdater);
    super.willDestroyElement(...arguments);
  }

  @action
  updateTime() {
    this.date = new Date();
  }
}
