import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

// import moment from "moment";
// import "moment-timezone";
// import moment from 'C:/Users/drtrt/AppData/Roaming/npm/node_modules/moment/moment.js';
//import { relativeTimeThreshold } from 'moment';

export default class BaseAppComponent extends Component {

    @tracked otherLocation = "Tokyo";

}
