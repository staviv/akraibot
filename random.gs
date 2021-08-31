function rand(n) {
  let r = "";
  while(n>10){
    r = r + (Math.random() + 1).toString(36).substring(2);
    n = n-10
  }
  r = r + (Math.random() + 1).toString(36).substring(12-n);
  return r;
}

function randBot(numOfChars) {
  return (rand(parseInt(numOfChars)) + "bot");
}

function randBotx5(numOfChars){
  fiveRes=[];
  if(numOfChars >= 3 && numOfChars<100){
    for(i=0;i<5;i++){
      fiveRes[i] = randBot(numOfChars);
    }
  }
  else{
    fiveRes[0]= "יש לבחור מספר גדול מ-2 וקטן מ-100"
  }
  return fiveRes;
}