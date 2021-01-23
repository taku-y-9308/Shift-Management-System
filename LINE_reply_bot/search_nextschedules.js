//var name="山中";
//var ID_kinmu=["1cp-p9wKHwsqdUCu68e-9kqyOlSVLLoyiqZ1Ku0JrZXQ",""];
/*ID_kinmu[0]:今月の勤務表,ID_kinmu[1]:来月の勤務表*/
function search_nextschedule(name,ID_kinmu){
  var nextschedule={
    date_1:"0",
    intime_1:"0:00",
    outtime_1:"0:00",
    date_2:"0",
    intime_2:"0:00",
    outtime_2:"0:00"
  };
  var status=0;
  /*月初の日を取得*/
  var now=new Date();
  var this_year=now.getFullYear();
  var this_month=now.getMonth();
  var next_first_date=Utilities.formatDate(new Date(this_year,this_month+1,1),'JST','yyyyMMdd');
  //console.log(first_date);
  
  /*勤務表を開くための日付を取得*/
  var ary = ['日', '月', '火', '水', '木', '金', '土'];
  
  for (var i=0;i<10;i++){//今日を含めた向こう１０日間
    var date = new Date();
    date.setDate(date.getDate()+i); //探索中の日付
    var week_num = date.getDay();//曜日番号を取得する
    var week='('+ary[week_num]+')';
    var value= Utilities.formatDate(date,'JST','M/d'); 
    //console.log(value);
    
    /*探索する日付によって、勤務表のIDを変更する*/
    if(Utilities.formatDate(date,'JST','yyyyMMdd')>=next_first_date){
      var ID_kinmu_search=ID_kinmu[1];
    }
    else ID_kinmu_search=ID_kinmu[0];
    /*勤務表を開く*/
    var ss= SpreadsheetApp.openById(ID_kinmu_search);
    var sheet=ss.getSheetByName(value+week);
    //console.log(value+week);
    var LastRow=sheet.getLastRow();
    //console.log(LastRow);
    for(var j=3;j<=LastRow;j++){//勤務表のスタッフ名をループ,その日を回る　
      if(sheet.getRange(j,1).getValue()==name)
      {
        //console.log("実行")
        var intime=sheet.getRange(j,2).getValue();
        var outtime=sheet.getRange(j,3).getValue();
        
        if(intime!=""&&outtime!=""&&status==0)
        {
          //console.log("intime:"+intime+",outtime:"+outtime);
          nextschedule.date_1=value+week;
          nextschedule.intime_1=Utilities.formatDate(intime,'JST','HH:mm');
          nextschedule.outtime_1=Utilities.formatDate(outtime,'JST','HH:mm');
          //console.log(nextschedule);
          status++;
          break;
        }
        else if(intime!=""&&outtime!=""&&status==1){
          nextschedule.date_2=value+week;
          nextschedule.intime_2=Utilities.formatDate(intime,'JST','HH:mm');
          nextschedule.outtime_2=Utilities.formatDate(outtime,'JST','HH:mm');
          status++;
          break;
        }
        
        
      } 
      
    }
    if(status==2){
      break;
    }
  }
  
  return nextschedule;
  /*
  if(status==0){
    nextschedule.date_1=0;
    return nextschedule;
  }
  else if(status==1){
    nextschedule.date_2=0;
    return nextschedule;
  }
  else if(status==2){
    return nextschedule;
  }
  */
  
}
