//prob 1
function problem1() {
  for (var i = 1; i <= 10; i++) {
    console.log(i + "\n");
  }
}
//prob 2
function problem2() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log("a\n");
    } else {
      console.log(i + "\n");
    }
  }
}
//prob 3
function problem3() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log("a\n");
    } else if (i % 3 == 0) {
      console.log("b\n");
    } else {
      console.log(i + "\n");
    }
  }
}
//prob 4
function problem4() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      console.log("ab\n");
    } else if (i % 2 == 0) {
      console.log("a\n");
    } else if (i % 3 == 0) {
      console.log("b\n");
    } else {
      console.log(i + "\n");
    }
  }
}
//prob 5
function problem5(time) {
  timeParts = time.split(":");
  hour = timeParts[0];
  min = timeParts[1];

  if (hour <= 24 && hour >= 0 && min <= 60 && min >= 0) {
    if (hour == 24) {
      console.log("00:" + min + "AM");
      return;
    }
    if (hour >= 12) {
      console.log(hour - 12 + ":" + min + "PM");
    } else {
      console.log(hour + ":" + min + "Am");
    }
  } else {
    console.log("Error");
  }
}

// problem1()
// problem2()
// problem3()
// problem4();
testCases = [
  "08:30",
  "12:00",
  "15:45",
  "00:00",
  "24:00",
  "12:30",
  "-1:15",
  "25:00",
  "14:-5",
  "09:61",
];
testCases.forEach((time) => {
  problem5(time);
});
