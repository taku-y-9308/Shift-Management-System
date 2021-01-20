var CHANNEL_ACCESS_TOKEN =PropertiesService.getScriptProperties().getProperty('channel_access_token');

function Send_Line(contents) {
  
  var messages="お疲れ様です。"+"\n"
      +"明日のシフトを通知します。"+"\n"
      +contents[0]+"〜"+contents[1]+"\n"
      +"です。"+"\n"
      +"よろしくお願いします。";
  
  var postData = {
    "to": contents[2],
    "messages": [{
      "type": "text",
      "text": messages,
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
  /*ログを出力*/
  var timestamp=Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HHmmss');
  var ss=SpreadsheetApp.openById("1MsuVnt_twWCl-dQqGbJZNL_kZhS9EWrGQv6vnbBLrvE");
  var sheet=ss.getSheetByName('send_log');
  sheet.getRange(sheet.getLastRow()+1,1).setValue("timestamp="+timestamp+",user_id="+contents[2]+",messages={"+messages+"}");

}