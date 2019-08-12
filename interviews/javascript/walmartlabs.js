function formatEvents(team1, team2, events1, events2) {
  const formattedEvents1 = events1.map((val, i) => {
    return `${team1} ${val.replace('+', '.')}`;
  });

  const formattedEvents2 = events2.map((val, i) => {
    return `${team2} ${val.replace('+', '.')}`;
  });

  return [...formattedEvents1, ...formattedEvents2];
}

const findNumbVal = (str) => {
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (!isNaN(arr[i])) {
      return (arr[i].indexOf('.') > -1) ? parseFloat(arr[i]) : parseInt(arr[i]);
    }
  }
}

function getEventsOrder(team1, team2, events1, events2) {
  const formattedEvents = formatEvents(team1, team2, events1, events2);
  const sortedEvents = formattedEvents.sort((a, b) => findNumbVal(a) - findNumbVal(b));

  return sortedEvents.map((val, i) => val.replace('.', '+'));
}

const testEvents1 = ['Mo Sa 45.2 Y', 'A 13 G', 'ABC Zelda 22.9 S Link'];
const testEvents2 = ['D 23 S F', 'Z 46 G', 'Q 12.99999 G'];
const teamName1 = 'ABC';
const teamName2 = 'CBA';

let orderedEvents = getEventsOrder(teamName1, teamName2, testEvents1, testEvents2);

console.log('\n');
console.log(orderedEvents);
console.log('\n');
