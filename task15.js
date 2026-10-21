function howManyTimes(time1, time2) {
  let current = new Date(time1);
  const end = new Date(time2);
  let strikes = 0;

  while (current < end) {
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    if (seconds === 0) {
      let count = 0;
      if (minutes === 0) {
        let hours = current.getHours() % 12;
        count = hours === 0 ? 12 : hours;
      } else if (minutes === 30) {
        count = 1;
      }

      for (let i = 0; i < count; i++) {
        let strikeTime = new Date(current.getTime() + i * 1000);
        if (strikeTime >= new Date(time1) && strikeTime < end) {
          strikes++;
        }
      }
    }

    current.setMinutes(current.getMinutes() + 1);
    current.setSeconds(0);
    current.setMilliseconds(0);
  }

  return strikes;
}