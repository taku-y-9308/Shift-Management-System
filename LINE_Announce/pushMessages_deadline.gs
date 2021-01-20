/*シフト表提出期限予告*/
var CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('channel_access_token'); 
var USER_ID =PropertiesService.getScriptProperties().getProperty('groupID_mucheshift');
function pushMessage_deadline() {
    //deleteTrigger();
  var postData = {
    "to": USER_ID,
    "messages": [{
      "type": "text",
      "text": "【シフト表提出期限予告】\n\n"
               +"------------------------------\n\n"
               +"お疲れ様です。"+"\n"
               +"シフト希望表の提出期限は\n"
               +"明日18日22:00となります。\n"
               +"なお、システムにより自動で締め切られますので、締め切り後に編集した分は反映されません。",
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