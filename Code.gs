function test(){
  Logger.log(randBotx5("12"));
}



function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  // Make sure this is update is a type message
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;
    var tosend = randBot(msg.text);
    sendMessage(chatId, tosend);
  }
  else if(update.hasOwnProperty('inline_query')){
    strArr = randBotx5(update.inline_query.query);
    answer=[];
    for (i in strArr)answer[i] = {type:"article", id:i, title: strArr[i], input_message_content:{message_text:strArr[i]}};
    answerInlineQuery(update.inline_query.id, answer);
  }
}


