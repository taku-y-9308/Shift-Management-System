/*シフト表提出期限終了,手動で実行された場合*/
var CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('channel_access_token'); 
var USER_ID = "U2ae2b0bddee9723e6733a70d4244e1f6";//PropertiesService.getScriptProperties().getProperty('groupID_mucheshift');

function pushMessage_finish_manual() {
    //deleteTrigger();
  var postData = {
    "to": USER_ID,
    "messages": [{
      "type": "text",
      "text":  "【シフト表提出期限終了】\n\n"
               +"------------------------------\n\n"
               +"お疲れ様です。\n"
               +"シフト表の提出は締め切られました。\n\n"
               +"なお、このメッセージ以降はシステムにより締め切られ、自動では反映されなくなるので、これ以降の変更は須田さんに連絡してください。",
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