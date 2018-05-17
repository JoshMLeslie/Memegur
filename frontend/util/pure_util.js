import merge from 'lodash/merge';

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

  diff = precisionRound(diff, 1);
  if (diff > 1) { annote = annote.concat("s"); }

  const timeStr = `${diff} ${annote}`;

  return timeStr;
};

// \\ insert() // \\
export const insert = (element, array) => {
  // https://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers

  let newArray = merge([],array);
  let loc = locationOf(element, newArray, spaceship);
  newArray.splice( loc + 1, 0, element);
  return newArray;
};

const spaceship = (a,b) => {
  if (a < b) { return -1; }
  else if (a === b) { return  0; }
  else if (a > b) { return  1; }
};

const locationOf = (element, array, comparer, start, end) => {
    if (array.length === 0) return -1;

    start = start || 0;
    end = end || array.length;
    let pivot = (start + end) >> 1;  // should be faster than dividing by 2

    let c = comparer(element, array[pivot]);
    if (end - start <= 1) return c == -1 ? pivot - 1 : pivot;

    switch (c) {
        case -1: return locationOf(element, array, comparer, start, pivot);
        case 0: return pivot;
        case 1: return locationOf(element, array, comparer, pivot, end);
    }
};
