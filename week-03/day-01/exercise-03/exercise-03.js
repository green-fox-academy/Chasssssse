'use strict';
// Jutka got ill. Hável the school director is looking for somebody who can teach instead of Jutka.
// Bela bacsi has free time at 8 o'clock, Bujaki at 9 o'clock, Vilma at 10 o'clock.
// The program shoul print the schedule of the teachers.

var isIll = true;

function getDeputy(hour) {
  while (isIll) {
    if (hour === 8) {
      var deputy = 'Bela bacsi';
      let isIll = false;
      return deputy;
    }
    else if (hour === 9) {
      var deputy = 'Bujaki';
      let isIll = false;
      return deputy;
    }
    else if (hour === 10) {
      var deputy = 'Vilma';
      let isIll = false;
      return deputy;
    }
  }
}

console.log("At eight:", getDeputy(8));
console.log("At nine:", getDeputy(9));
console.log("At ten:", getDeputy(10));