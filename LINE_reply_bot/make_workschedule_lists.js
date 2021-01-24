function make_workschedule_list() {
  var name;
  var ID_kinmu=[];//ID_kinmu[0]:今月の勤務表,ID_kinmu[1]:来月の勤務表
  var nextschedule=[
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

  /*workschedule_listをopenする*/
  var ss_ws_list= SpreadsheetApp.openById("1bgIR84gNNCHmRd_9BVhN7tNo19ve2HaPYcHRd0Uj__g");
  var sheet_ws_list= ss_ws_list.getSheets()[0];
  /*pushmessage_listopenする*/
  var ss_pm_list= SpreadsheetApp.openById("1_I6rQOsNnkqZ3Ck9CM7c9TIxpQiLskvD26nE__kEQYA");
  var sheet_pm_list= ss_pm_list.getSheets()[0];
  /*指定された範囲をクリア*/
  //sheet_ws_list.getRange("A2:G50").clear();
  /*ステータスを更新*/
  sheet_ws_list.getRange("I2").setValue(1);
  var ws_lastRow=sheet_ws_list.getLastRow();
  var pm_lastRow=sheet_pm_list.getLastRow();
  ID_kinmu=getID_kinmu();

  /*pushmessage_listの値を一括で取得する*/
  const pushmessage_list=sheet_pm_list.getRange(2,1,pm_lastRow-1,2).getValues();
  var WorkscheduleList=[];
  for(var i=0;i<pushmessage_list.length;i++){
    
    name=pushmessage_list[i][0];

    /*名前と勤務表のKeyからシフトを探索***********************************/
    nextschedule=search_nextschedule(name,ID_kinmu);

    /*nextscheduleの値を各変数に代入*/
    
    var date_1=nextschedule[0].date;
    var date_2=nextschedule[1].date;
    var intime_1=nextschedule[0].intime;
    var intime_2=nextschedule[1].intime;
    var outtime_1=nextschedule[0].outtime;
    var outtime_2=nextschedule[1].outtime;

    /*個人データ用配列に代入*/
    var WorkscheduleList_Individual=[
      name,
      date_1,
      intime_1,
      outtime_1,
      date_2,
      intime_2,
      outtime_2

    ];
    console.log(WorkscheduleList_Individual);
    WorkscheduleList.push(WorkscheduleList_Individual);


  }
  console.log(WorkscheduleList);
  sheet_ws_list.getRange(2,1,ws_lastRow-1,7).setValues(WorkscheduleList);
  /*ステータスを更新*/
  const update_date=Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  const update_status="0";
  const update_info=[[update_date],[update_status]];
  console.log(update_info);
  sheet_ws_list.getRange("I1:I2").setValues(update_info);
  
}

