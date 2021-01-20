/*シフト表リセット*/
var CHANNEL_ACCESS_TOKEN=PropertiesService.getScriptProperties().getProperty('channel_access_token');
var User_ID=PropertiesService.getScriptProperties().getProperty('groupID_mucheshift');
function pushMessage_reset() {
    //deleteTrigger();
  var postData = {
    "to": User_ID,
    "messages": [{
      "type": "text",
      "text": "【シフト表リセット】\n\n"
              +"------------------------------\n\n"
              +"お疲れ様です。\n"
              +"シフト表が本日7時にリセットされてますので、記入お願いします。",
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