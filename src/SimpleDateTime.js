import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';
import './App.css';

export default class SimpleDateTime extends Component {
  @tracked date = new Date();
  @action updateDate() {
    this.date = new Date();
    console.log('h');
  }
  get getDate() {
    setInterval(() => {
      this.updateDate();
    }, 1000);
    return this.date.toLocaleString('en-US', { timeZone: this.args['timezone'] });
  }
  get getMSeconds() {
    return this.date.getMilliseconds();
  }

  static template = hbs`
        <h1>{{@timezone}}</h1>
        <h1>{{this.getDate}}</h1>
        <h1>Milliseconds: {{this.getMSeconds}} </h1>
        <hr/>
  `;
}
