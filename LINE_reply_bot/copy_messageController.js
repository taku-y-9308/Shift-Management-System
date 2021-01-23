
function messageController_copy(prop, events, replyToken,user_id) {//名前変更
  /* メッセージを取得 */
  const message = events.message;
  /* 本文を取得 */
  const text = message.text;
  /*現在のステータスコードを代入*/
  var status_code=status_code_now();
  var nextschedule=[];
  
  /*– 条件文 ———————–*/
  if (text.indexOf('time') > -1) {
    /* LINEのメッセージ形式にする */
    var LineMessageObject = [{
      'type': 'text',
      'text': Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMdd: HHmmss')
    }];
  }
  else if (text.indexOf('メニュー') > -1){
    var LineMessageObject = [{
      'type': 'text',
      'text': "メニューを表示します。\n\n"+"・'シフト通知':名前を登録すると、毎日16:00〜17:00の間に翌日のシフトを通知します。\n"+"・'次のシフト':今日を含む向こう10日間でシフトに入っている日を返信します。（10秒以上かかります）"
    }];
  }
  else if (text.indexOf('シフト通知') > -1){
    status_code_1();
    var LineMessageObject = [{
      'type': 'text',
      'text': "OK!"+"\n"+"苗字だけ入力してください。（ただし、同性の人がいる場合はスペースなしで名前まで）"+"\n"+"もし、間違えてシフト通知と言った場合は、必ず「終了」と言ってください。"
    }];
  }
  /*リストに登録する*/
  else if (text.indexOf('はい') > -1&&status_code==1){
    var cal_text=call_text();
    register_list(cal_text,user_id); 
    var LineMessageObject = [{
      'type': 'text',
      'text':cal_text+"さん"+"\n"+"登録完了しました！"+"\n"+"次回から16時から17時の間に、シフト通知がされるようになります。"
      
    }];
    status_code_0();
  }
  else if (text.indexOf('終了') > -1){
    status_code_0();
    var LineMessageObject = [{
      'type': 'text',
      'text': "了解しました！"+"\n"+"登録作業を終了します。"
    }];
  }
  else if (text.indexOf('ありがとう') > -1||text.indexOf('了解') > -1||text.indexOf('りょうかい') > -1){
    var LineMessageObject = [{
      'type': 'text',
      'text': "返信ありがとうございます。"+"でも、これはbotですから返信は不要ですよ〜"
    }];
  }
  else if (text.indexOf('次のシフト') > -1){
    var name=search_name(user_id);
    
    if(name==1) {
      var LineMessageObject = [{
        'type': 'text',
        'text': "エラー"+"\n"+"登録者リストに名前がありませんでした。"+"まず、'シフト通知'とメッセージを送って名前を登録してください。"
      }];
    }
    else {
      var ID_kinmu=[];
      ID_kinmu=getID_kinmu();
      nextschedule=search_nextschedule(name,ID_kinmu);//name[0]:date,name[1]:intime,name[2]:outtime
      if(nextschedule[0]!=0){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"次回のシフトは"+"\n"+nextschedule[0]+" "+nextschedule[1]+"〜"+nextschedule[2]+"\n"+"です。"+"よろしくお願いします。"
        }];
      }
      else if(nextschedule[0]==0){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"向こう10日間でシフトに入っている日はありません。"
        }];
      }
      
      
    }
  }
  else {
    if(status_code==1){
      store_text(text);
      var LineMessageObject = [{
        'type': 'text',
        'text':text+"さんですね？"+"\n"+"これで登録する場合は'はい'"+"\n"+"訂正する場合は、もう一度名前を入力してください。"
      }];
    }
  }
  
  /* LINEに返信する */
  replyLine(prop,LineMessageObject, replyToken);
  
  
}