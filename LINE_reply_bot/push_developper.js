/*開発者に新規登録者をPUSHする*/
var CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('channel_access_token');
var User_ID= PropertiesService.getScriptProperties().getProperty('user_id');

function push_newaccount(text){
  var postData = {
    "to": User_ID,
    "messages": [{
      "type": "text",
      "text": "'pushmessage_list'に新規ユーザーが追加されました。"+"\n"+"ユーザー名:"+text,
    }]
  };

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  var response = UrlFetchApp.fetch(url, options);
}

/*開発者に要望コメントをPUSHする*/
var CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('channel_access_token');
var User_ID= PropertiesService.getScriptProperties().getProperty('user_id');

function push_requestcomments(user_id,text){
  var postData = {
    "to": User_ID,
    "messages": [{
      "type": "text",
      "text": "要望コメントが送信されました。\n\n"+"------------------------------\n\n"+"from:"+user_id+"\n\n"+text
    }]
  };

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  var response = UrlFetchApp.fetch(url, options);
}