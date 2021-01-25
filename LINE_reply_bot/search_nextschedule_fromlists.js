function search_nextschedule_fromlist(name) {
  const nextschedule=[{},{},{}];
  const ss_ws_list= SpreadsheetApp.openById("1bgIR84gNNCHmRd_9BVhN7tNo19ve2HaPYcHRd0Uj__g");//workschedule_listを開く
  const sheet_ws_list= ss_ws_list.getSheets()[0];
  const LastRow=sheet_ws_list.getLastRow()
  const status=sheet_ws_list.getRange("I2").getValue();//1：更新中,0:通常
  //sheet_ws_list.getRange("F1").setValue(name);
  
  /*リスト更新中*/
  if(status==1){
    nextschedule[0].status=1;
  }
  
  /* workschedule_list の名前、日付、時間が格納されている*/
  const workschedule_list_date=sheet_ws_list.getRange(2,1,LastRow-1,7).getValues();

  for(var i=0;i<workschedule_list_date.length;i++){
    if(workschedule_list_date[i][0]==name){
      nextschedule[0].status=0
      if(workschedule_list_date[i][1]!=""){
        nextschedule[1].date=workschedule_list_date[i][1];
        nextschedule[1].intime=Utilities.formatDate(workschedule_list_date[i][2],'Asia/Tokyo', 'HH:mm');
        nextschedule[1].outtime=Utilities.formatDate(workschedule_list_date[i][3],'Asia/Tokyo', 'HH:mm');
      }else{
        nextschedule[1].date=null;
        nextschedule[1].intime=null;
        nextschedule[1].outtime=null;
      }

      if(workschedule_list_date[i][4]!=""){
        nextschedule[2].date=workschedule_list_date[i][4];
        nextschedule[2].intime=Utilities.formatDate(workschedule_list_date[i][5],'Asia/Tokyo', 'HH:mm');
        nextschedule[2].outtime=Utilities.formatDate(workschedule_list_date[i][6],'Asia/Tokyo', 'HH:mm');
      }else{
        nextschedule[2].date=null;
        nextschedule[2].intime=null;
        nextschedule[2].outtime=null;
      }
      console.log(nextschedule);
      return  nextschedule;
    }
  }

  /*リストに追加されていない時*/
    nextschedule[0].status=3
    nextschedule[0].date=1;
    console.log("リストに追加されていません");
    return nextschedule;
  
}
