export const precisionRound = (number, precision = 0) => {
  // precisionRound(1.005, 2) //=> 1.01

  // via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#A_better_solution

  let shift = (number, precision) => {
    let numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, +precision)), -precision);
};

export const timeDiff = (updateAt) => {
  // updateAt is a either a date string or a date obj.
  // returns a string showing the amount of time between now and input

  const madeAt = ( (updateAt instanceof Date) ? updateAt : new Date(updateAt) );

  let diff = new Date() - madeAt; // currently miliseconds

  let annote = "second";
  diff = (diff / 1000); // seconds

  if (diff >= 1) {
    diff /= 60;
    annote = "minute";
  } // minutes

  if (diff >= 60) {
    diff /= 60;
    annote = "hour";
  } // hours

  if (diff >= 24) {
    diff /= 24;
    annote = "day";
  } // days

  if (diff >= 28) {
    diff /= 28;
    annote = "week";
  } // weeks

  if (diff >= 52) {
    diff /= 52;
    annote = "year";
  } // years

  diff = precisionRound(diff, 2);
  if (diff > 1) { annote = annote.concat("s"); }

  const timeStr = `${diff} ${annote}`;

  return timeStr;
};
