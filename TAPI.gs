

function setWebhook() {
  var response =  UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}


function sendMessage(chatId, text){
  if(chatId==0){
    Logger.log(text);
    return;
  }
  var payload = {
    method: 'sendMessage',
    chat_id: String(chatId),
    text: text,
    parse_mode: 'HTML',
  };
  postData(payload);
}


function postData(payload){
  var data = {
    method: 'post',
    "payload": payload,
  };

  // bot's token
  UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + token_bot + '/',
    data
  );
}

function answerInlineQuery(id, answer){
  var payload = {
    method: 'answerInlineQuery',
    inline_query_id: String(id),
    results: JSON.stringify(answer),
    parse_mode: 'HTML',
  };
  
  postData(payload);
}
