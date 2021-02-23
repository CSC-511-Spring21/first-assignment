import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { later } from "@ember/runloop";

export default class SimpleDateTimeComponent extends Component {
  @tracked date = new Date().toLocaleTimeString();

  @action
  getDate() {
    this.date = new Date().toLocaleTimeString();
  }
}
