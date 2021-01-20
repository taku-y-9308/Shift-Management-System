function mailSend_NG(address){
  
    /* 各データを準備 */
  var strTo=address; //To
  var strFrom="muche.shinzaike1717@gmail.com"; //From
  var strSender="ムッシュ新在家"; //差出人
 
  /* メール本文を準備 */
  var strSubject="【エラー】:シフト表を作成できませんでした。";
  var strBody="ごめんなさい。シフト表を作成できませんでした。"+"\n"+"何らかのエラーが発生している可能性があります。"
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
