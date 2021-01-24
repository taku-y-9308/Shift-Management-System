function messageController(prop, events, replyToken,user_id) {
  /* メッセージを取得 */
  const message = events.message;
  /* 本文を取得 */
  const text = message.text;
  /*現在のステータスコードを代入*/
  var status_code=status_code_now();
  var nextschedule={};
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
      'text': "メニューを表示します。\n\n"+"・'シフト通知':名前を登録すると、毎日16:00〜17:00の間に翌日のシフトを通知します。\n"+"・'次のシフト':今日を含む向こう10日間でシフトに入っている日（最大2日間）を返信します。"
    }];
  }
  else if (text.indexOf('シフト通知') > -1){
    status_code_store(1);
    var LineMessageObject = [{
      'type': 'text',
      'text': "OK!"+"\n"+"苗字だけ入力してください。（ただし、同性の人がいる場合はスペースなしで名前まで）"+"\n"+"もし、間違えてシフト通知と言った場合は、必ず’キャンセル'と言ってください。"
    }];
  }
  /*リストに登録する*/
  else if (text.indexOf('はい') > -1&&status_code==1){
    var cal_text=call_text();
    register_list(cal_text,user_id); 
    push_newaccount(cal_text);
    var LineMessageObject = [{
      'type': 'text',
      'text':cal_text+"さん"+"\n"+"登録完了しました！"+"\n"+"次回から16時から17時の間に、シフト通知がされるようになります。"
      
    }];
    status_code_store(0);
  }
  else if (text.indexOf('キャンセル') > -1){
    status_code_store(0);
    var LineMessageObject = [{
      'type': 'text',
      'text': "キャンセルしました！"
    }];
  }
  else if (text.indexOf('ありがとう') > -1||text.indexOf('了解') > -1||text.indexOf('りょうかい') > -1){
    var LineMessageObject = [{
      'type': 'text',
      'text': "返信ありがとうございます。"+"でも、これはbotですから返信は不要ですよ〜"
    }];
  }
  else if (text=='要望'){
    status_code_store(2);
    var LineMessageObject = [{
      'type': 'text',
      'text': "要望ありがとうございます。\n"+"要望/不具合コメントを入力して送信してください。\n"+"キャンセルする場合は'キャンセル'と言ってください。"
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
      nextschedule=search_nextschedule_fromlist(name);
      
      if(nextschedule.date_1==1){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"ただいまリストに追加中です。最大で１時間ほど経ってからお試しください。"
        }];
      }
      else if(nextschedule.date_1==""){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"向こう10日間でシフトに入っている日はありません。"
        }];
      }
      else if(nextschedule.status==1&&nextschedule.date_1!=""&&nextschedule.date_2==""){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"リストを更新していますので、1時間ほど前の情報になります。\n\n"
                   +"次回のシフトは"+"\n"+nextschedule.date_1+" "+nextschedule.intime_1+"〜"+nextschedule.outtime_1+"\n"+"です。"+"よろしくお願いします。"
        }];
      }
      else if(nextschedule.status==1&&nextschedule.date_1!=""&&nextschedule.date_2!=""){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"リストを更新していますので、1時間ほど前の情報になります。\n\n"
                   +"次回のシフトは"+"\n"+nextschedule.date_1+" "+nextschedule.intime_1+"〜"+nextschedule.outtime_1+"\n"+nextschedule.date_2+" "+nextschedule.intime_2+"〜"+nextschedule.outtime_2+"\n"+"です。\n"+"よろしくお願いします。"
        }];
      }
      else if(nextschedule.status==0&&nextschedule.date_1!=""&&nextschedule.date_2==""){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"次回のシフトは"+"\n"+nextschedule.date_1+" "+nextschedule.intime_1+"〜"+nextschedule.outtime_1+"\n"+"です。"+"よろしくお願いします。"
        }];
      }
      
      else if(nextschedule.status==0&&nextschedule.date_1!=""&&nextschedule.date_2!=""){
        var LineMessageObject = [{
          'type': 'text',
          'text': "お疲れ様です。"+"\n"+"次回のシフトは"+"\n"+nextschedule.date_1+" "+nextschedule.intime_1+"〜"+nextschedule.outtime_1+"\n"+nextschedule.date_2+" "+nextschedule.intime_2+"〜"+nextschedule.outtime_2+"\n"+"です。\n"+"よろしくお願いします。"
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
    else if(status_code==2){
      var LineMessageObject = [{
        'type': 'text',
        'text':"ご要望ありがとうございます!\n"+"参考にさせていただきます！"
      }];
      push_requestcomments(user_id,text);
      status_code_store(0);
    }
  }
  
  /* LINEに返信する */
  replyLine(prop,LineMessageObject, replyToken);
  /*ログを記録する*/
  var ss_log=SpreadsheetApp.openById("1MsuVnt_twWCl-dQqGbJZNL_kZhS9EWrGQv6vnbBLrvE");
  var sheet_log=ss_log.getSheetByName('send_log');
  sheet_log.getRange(sheet_log.getLastRow()+1,1).setValue("timestamp:"+new Date()+",user-id:"+user_id+",main-message:"+JSON.stringify(LineMessageObject));
  
}