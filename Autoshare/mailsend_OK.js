function mailSend_OK(address,ID) {
 
  /* 各データを準備 */
  var strTo=address; //To
  var strFrom="muche.shinzaike1717@gmail.com"; //From
  var strSender="ムッシュ新在家"; //差出人
 
  /* メール本文を準備 */
  var strSubject="シフト提出表のURL";
  var strBody="シフト提出表のURLを添付します。"+"\n"+"以下のURLか、アプリの「共有アイテム」から確認してください。"+"\n"+"もし入力できない他、不具合がありましたらご連絡ください。"
  +"\n"+"\n"+"https://docs.google.com/spreadsheets/d/"+ID+"/edit"
  +"\n"+"\n"+"なお、シフト表の申請は、初めの1回だけで大丈夫です。それ以降は、今回取得したシフト表に書き込んでいただく仕組みになっています。"
  +"\n"+"\n"+"このメールに心当たりがない場合は、あなたのメールアドレスが間違って入力された可能性があります。"
  +"\n"+"\n"+"大変申し訳ございませんが、このメールを削除してくださいますようお願いします。";
 
  /* メールを送信 */
  GmailApp.sendEmail(
    strTo,
    strSubject,
    strBody,
    {
      from: strFrom,
      name: strSender
    }
  ); 
}