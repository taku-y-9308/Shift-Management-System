function schedule_search(ID) {
  var contents=[];
  var ss= SpreadsheetApp.openById(ID);
  /*勤務表を開くための日付を取得*/
  var ary = ['日', '月', '火', '水', '木', '金', '土'];
  var date = new Date();
  date.setDate(date.getDate()+1);    
  var week_num = date.getDay();//曜日番号を取得する
  var week='('+ary[week_num]+')';
  var value= Utilities.formatDate(date,'JST','M/d'); 
  
  var sheet=ss.getSheetByName(value+week);//勤務表を開く
  var LastRow=sheet.getLastRow();
  
  //console.log(value+week);
  var ss_list=SpreadsheetApp.openById("1_I6rQOsNnkqZ3Ck9CM7c9TIxpQiLskvD26nE__kEQYA");//登録者リストを開く
  var sheet_list = ss_list.getSheets()[0];
  var LastRow_list=sheet_list.getLastRow();  
  for(var i=2;i<=LastRow_list;i++){//登録者リストをループ
    var name=sheet_list.getRange(i,1).getValue(); 
    for(var j=3;j<=LastRow;j++){//勤務表のスタッフ名をループ
      console.log(name);
      if(sheet.getRange(j,1).getValue()==name)
      {
        var intime=sheet.getRange(j,2).getValue();
        var outtime=sheet.getRange(j,3).getValue();
        if(intime!=""&&outtime!="")
        {
          contents[0]=Utilities.formatDate(intime,'JST','HH:mm');
          contents[1]=Utilities.formatDate(outtime,'JST','HH:mm');
          contents[2]=sheet_list.getRange(i,2).getValue();
          Send_Line(contents);

          //break;
        }
        else
        {
          contents[0]=0;
          contents[1]=0;
          contents[2]=0;
          //return contents;
          //break;
        }
        
      }
      else {
        contents[0]=0;
        contents[1]=0;
        contents[2]=0;
        
        //console.log(sheet.getRange(33,1).getValue());
        //console.log(name);
        //break;
        //return time;
      }
    }
    
  }
  
}