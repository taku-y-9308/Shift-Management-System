function mailSend_NG_duplicate(address) {
  /* 各データを準備 */
  var strTo=address; //To
  var strFrom="muche.shinzaike1717@gmail.com"; //From
  var strSender="ムッシュ新在家"; //差出人
 
  /* メール本文を準備 */
  var strSubject="【エラー】:すでに登録済みの従業員番号です";
  var strBody="すでに登録済みの従業員番号であるため、シフト表を作成できませんでした。"
  +"\n"+"シフト提出表は、初回で取得した表に毎月記入していくシステムなので、初回以降はフォームからの申請は不要です。"
  +"\n\n"+"初回の申請にもかかわらず、このメッセージが表示される場合は、従業員番号を間違えて入力した可能性があります。"
  +"\n\n"+"このメールに心当たりがない場合は、あなたのメールアドレスが間違って入力された可能性があります。"
  +"\n\n"+"大変申し訳ございませんが、このメールを削除してくださいますようお願いします。";
 
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
