/*ID_kinmu[0]:今月の勤務表,ID_kinmu[1]:来月の勤務表*/
function search_nextschedule(name,ID_kinmu){
  const nextschedule=[
    {
      date:"",
      intime:"",
      outtime:""
    },
    {
      date:"",
      intime:"",
      outtime:""
    }];

  /*for分の中で取得した日付がその人の1日目か2日目かを判定する*/
  var status=0;
  /*月初の日を取得*/
  const now=new Date();
  const this_year=now.getFullYear();
  const this_month=now.getMonth();
  const next_first_date=Utilities.formatDate(new Date(this_year,this_month+1,1),'JST','yyyyMMdd');
  //console.log(first_date);
  
  /*勤務表を開くための日付を取得*/
  const ary = ['日', '月', '火', '水', '木', '金', '土'];
  
  for (var i=0;i<10;i++){//今日を含めた向こう１０日間
    var date = new Date();
    date.setDate(date.getDate()+i); //探索中の日付
    var week_num = date.getDay();//曜日番号を取得する
    var week='('+ary[week_num]+')';
    var value= Utilities.formatDate(date,'JST','M/d'); 
   
    
    /*探索する日付によって、勤務表のIDを変更する****************************************/
    /*探索する月と対象の月が同じ場合***************/
    if(Utilities.formatDate(date,'JST','yyyyMMdd')>=next_first_date){
      var ID_kinmu_search=ID_kinmu[1];
    }
    /*探索する月と対象の月が違う場合***************/
    else ID_kinmu_search=ID_kinmu[0];


    /*勤務表を開く*/
    var ss= SpreadsheetApp.openById(ID_kinmu_search);
    var sheet=ss.getSheetByName(value+week);
    
    var LastRow=sheet.getLastRow();

    /*勤務表からスタッフ名、時間を一括で取得する*******************************************/
    const nextschedule_data=sheet.getRange(3,1,LastRow-2,3).getValues();
    //console.log(nextschedule_data);
    /*勤務表のスタッフ名をループ,その日を回る*********/
    for(var j=0;j<=nextschedule_data.length;j+=2){
      if(nextschedule_data[j][0]==name)
      {
  
        var intime=nextschedule_data[j][1];
        var outtime=nextschedule_data[j][2];
        
        /*statusが0ならば、1日目のシフト*/
        if(intime!=""&&outtime!=""&&status==0)
        {
        
          nextschedule[0].date=value+week;
          nextschedule[0].intime=Utilities.formatDate(intime,'JST','HH:mm');
          nextschedule[0].outtime=Utilities.formatDate(outtime,'JST','HH:mm');
          
          /*1日目を取得したらstatusを1上げる*/
          status++;
          break;
        }
        /*statusが1ならば、2日目のシフト*/
        else if(intime!=""&&outtime!=""&&status==1){
          nextschedule[1].date=value+week;
          nextschedule[1].intime=Utilities.formatDate(intime,'JST','HH:mm');
          nextschedule[1].outtime=Utilities.formatDate(outtime,'JST','HH:mm');
          status++;
          break;
        }
        
        
      } 
      
    }
    /*10日間で2日分だけ取得するので、2日分取得したらbreak*/
    if(status==2){
      break;
    }
  }
  //console.log(nextschedule);
  return nextschedule; 
}
