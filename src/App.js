import Component, { hbs } from '@glimmerx/component';
import SimpleDateTime from './SimpleDateTime';

export default class App extends Component {
  static template = hbs`
    <div class="container">
      <SimpleDateTime @timezone = "America/New_York"/>
      <SimpleDateTime @timezone = "Europe/Paris"/>
    </div>
  `;
}
