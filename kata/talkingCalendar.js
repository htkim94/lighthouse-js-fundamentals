const talkingCalendar = function(date) {
  // Your code here
  let splitted = date.split('/');
  let y = splitted[0], m = splitted[1], d = splitted[2];

  switch (m) {
    case '01':
      m = 'January';
      break;
    case '02':
      m = 'February';
      break;
    case '03':
      m = 'March';
      break;
    case '04':
      m = 'April';
      break;
    case '05':
      m = 'May';
      break;
    case '06':
      m = 'June';
      break;
    case '07':
      m = 'July';
      break;
    case '08':
      m = 'August';
      break;
    case '09':
      m = 'September';
      break;
    case '10':
      m = 'October';
      break;
    case '11':
      m = 'November';
      break;
    case '12':
      m = 'December';
      break;
  }
  
  if (d[0] === '0') {
    d = d[1];
  }

  if (d === '1' || d === '21' || d === '31') {
    d = d + 'st';
  } else if (d === '2' || d === '22') {
    d = d + 'nd';
  } else if (d === '3' || d === '23') {
    d = d + 'rd';
  } else {
    d = d + 'th';
  }

  return `${m} ${d}, ${y}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));