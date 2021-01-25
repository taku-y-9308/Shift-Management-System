function doPost(e) {
  /* スクリプトプロパティのオブジェクトを取得 */
  const prop = PropertiesService.getScriptProperties().getProperties();
  /* レスポンスを取得 */
  const responseLine = e.postData.getDataAsString();
  /* JSON形式に変換する */
  const responseLineJson = JSON.parse(responseLine).events[0];
  /*USERIDを取得して格納*/
  var user_id = responseLineJson.source.userId;//格納する

  /*ログを記録*/
  var json = JSON.parse(e.postData.contents);
  var ss=SpreadsheetApp.openById("1MsuVnt_twWCl-dQqGbJZNL_kZhS9EWrGQv6vnbBLrvE");
  var sheet=ss.getSheetByName('receive_log');
  sheet.getRange(sheet.getLastRow()+1,1).setValue(new Date());
  sheet.getRange(sheet.getLastRow(),2).setValue(json.events);
  /*
  var send_log=[[]];
  var timestamp=json.events.timestamp;
  var userId=json.events.
  */
  
  /* イベントへの応答に使用するトークンを取得 */
  const replyToken = responseLineJson.replyToken;
  
  /*– メッセージイベントの場合 ———————–*/
  if (responseLineJson.type == 'message') {
    messageController(prop, responseLineJson, replyToken,user_id);
  }
  
}