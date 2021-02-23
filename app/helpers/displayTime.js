import { helper } from '@ember/component/helper';

const displayTime = ([dateObj = new Date(), hoursAhead = 0]) => {
  const dateCopy = new Date(dateObj);
  dateCopy.setTime(dateObj.getTime() + hoursAhead * 60 * 60 * 1000);
  return `${dateCopy.toDateString()} ${dateCopy.getHours()}:${dateCopy.getMinutes()}:${dateCopy.getSeconds()}:${dateCopy.getMilliseconds()}`;
};

export default helper(displayTime);
