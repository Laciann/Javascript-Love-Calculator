let button = document.querySelector('button');

button.addEventListener('click', function (event) {


  event.preventDefault();

  const loveTable = [
    [55, 55, 75, 55, 65, 55, 65, 50, 65],
    [55, 55, 75, 65, 55, 75, 55, 75, 55],
    [75, 65, 65, 50, 75, 75, 65, 50, 75],
    [55, 75, 50, 55, 50, 75, 75, 75, 50],
    [55, 50, 75, 50, 75, 50, 65, 50, 65],
    [50, 75, 75, 75, 50, 55, 55, 50, 75],
    [65, 55, 65, 75, 65, 55, 55, 50, 55],
    [50, 65, 55, 75, 55, 50, 55, 55, 50],
    [65, 55, 75, 50, 65, 75, 55, 50, 55]
  ];

  let Score = 0;
  let name1 = document.getElementById('Name1').value;
  name1 = name1.toUpperCase();
  let name2 = document.getElementById('Name2').value;
  name2 = name2.toUpperCase();

  let ScoreFunction = function (name) {
    let NameArray = name.split('');
    for (i = 0; i < NameArray.length; i++) {
      if (NameArray[i].includes('A')) {
        Score += 1;
      } else if (NameArray[i].includes('E')) {
        Score += 5;
      } else if (NameArray[i].includes('I')) {
        Score += 9;
      } else if (NameArray[i].includes('O')) {
        Score += 6;
      } else if (NameArray[i].includes('U')) {
        Score += 3;
      }
    }
    return Score;
  }



  let Name1Score = ScoreFunction(name1);
  let Name2Score = ScoreFunction(name2);

  let SingleDigitSoulUrgeNumber = function (num) {
    let sum = 0;
    while (num > 0) {
      sum += parseInt(num % 10);
      num = parseInt(num / 10);
    }
    if (sum > 9) {
      sum = SingleDigitSoulUrgeNumber(sum);
    }
    return sum;
  }

  let Name1SoulUrgeNumber = SingleDigitSoulUrgeNumber(Name1Score);
  let Name2SoulUrgeNumber = SingleDigitSoulUrgeNumber(Name2Score);

  if (Name1SoulUrgeNumber > 0 & Name2SoulUrgeNumber > 0) {

    let index1 = Name1SoulUrgeNumber - 1;
    let index2 = Name2SoulUrgeNumber - 1;

    let lovePercent = loveTable[index1][index2];
    
    

    document.querySelector('h1').innerHTML = `Your love is ${lovePercent}%`;
    if (lovePercent >= 75) {
      document.querySelector('h2').innerHTML = `Your love each other like Kanye loves Kanye!`;
    } else if(lovePercent >= 60){
      document.querySelector('h2').innerHTML = `Your love needs a little more love.`;
    } else if (lovePercent >= 50){
      document.querySelector('h2').innerHTML = `Your love is frozen. Let it go. Let it go..`;
    }

  } else {
    document.querySelector('h1').innerHTML = `Please, enter valid names!!!`;
  }

})