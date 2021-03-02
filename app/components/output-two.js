import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OutputTwoComponent extends Component {

    //2nd way
    @tracked nycDate;
    @tracked anotherDate;

    @action
    updateSecondValues() {
        this.nycDate = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours() + 5, new Date().getMinutes(), new Date().getSeconds()))
        this.anotherDate = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours() + 19, new Date().getMinutes(), new Date().getSeconds()))
    }

}
