import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { later } from "@ember/runloop";

export default class SimpleDateTimeComponent extends Component {
  @tracked date = new Date().toLocaleDateString();
  @tracked time = new Date().toLocaleTimeString();
  @tracked milli = new Date().getMilliseconds();

  @tracked oDate = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  @tracked oTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
  });

  @action
  getDateAndTime() {
    this.date = new Date().toLocaleDateString();
    this.time = new Date().toLocaleTimeString();
    this.milli = new Date().getMilliseconds();

    this.oDate = new Date().toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    this.oTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
    });
  }
}
