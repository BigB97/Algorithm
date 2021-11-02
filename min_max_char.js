// Get the letter with higest repeats

function minMax(str) {
  let obj = {};
  // Loop through the input to get each key and occurance number
  for (let key of str.replace(/ +/g, '')) {
    !obj[key] ? (obj[key] = 1) : obj[key]++;
  }

  //   Loop through to get the maximum number
  let maxNumber = 0;
  let deSame = [];
  for (let key in obj) {
    if (obj[key] >= maxNumber) {
      maxNumber = obj[key];
    }
  }

  // loop through to get the letter
  for (let key in obj) {
    if (obj[key] == maxNumber) {
      deSame.push(key);
    }
  }

  console.log(obj);
  console.log(`maxNumber: ${maxNumber} , maxCharac: ${deSame} `);
}

minMax(`In hopes of finding out the truth, he entered the one-room library.
You have no right to call yourself creative until you look at a trowel and think that it would make a great lockpick.
I used to practice weaving with spaghetti three hours a day but stopped because I didn't want to die alone.
Normal activities took extraordinary amounts of concentration at the high altitude.
As he looked out the window, he saw a clown walk by.
He invested some skill points in Charisma and Strength.
You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.
Greetings from the real universe.
I often see the time 11:11 or 12:34 on clocks.
Behind the window was a reflection that only instilled fear.
In the end, he realized he could see sound and hear words.
The teenage boy was accused of breaking his arm simply to get out of the test.
The tart lemonade quenched her thirst, but not her longing.`);
