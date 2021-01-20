/*シフト表提出期限終了*/
var CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('channel_access_token'); 
var USER_ID = PropertiesService.getScriptProperties().getProperty('groupID_mucheshift');

function pushMessage_finish() {
    //deleteTrigger();
  var postData = {
    "to": USER_ID,
    "messages": [{
      "type": "text",
      "text":  "【シフト表提出期限終了】\n\n"
               +"------------------------------\n\n"
               +"お疲れ様です。\n"
               +"シフト表の提出は22時で締め切りです。\n\n"
               +"なお、このメッセージ以降はシステムにより、自動で締め切られて反映されなくなるので、これ以降の変更は須田さんに連絡してください。",
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