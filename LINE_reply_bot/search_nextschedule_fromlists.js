//var name="山中";
function search_nextschedule_fromlist(name) {
  var nextschedule={
    status:"",
    date_1:"",
    intime_1:"",
    outtime_1:"",
    date_2:"",
    intime_2:"",
    outtime_2:""
  };
  var ss_ws_list= SpreadsheetApp.openById("1bgIR84gNNCHmRd_9BVhN7tNo19ve2HaPYcHRd0Uj__g");//workschedule_listを開く
  var sheet_ws_list= ss_ws_list.getSheets()[0];
  var LastRow=sheet_ws_list.getLastRow()
  var status=sheet_ws_list.getRange("I2").getValue();//1：更新中,0:通常
  //sheet_ws_list.getRange("F1").setValue(name);
  
  /*リスト更新中*/
  if(status==1){
    nextschedule.status=1;
    //return nextschedule;
  }
  
  
  for(var i=2;i<=LastRow;i++){
    //sheet_ws_list.getRange(i,6).setValue(sheet_ws_list.getRange(i,1).getValue());
    if(sheet_ws_list.getRange(i,1).getValue()==name){
      nextschedule.date_1=sheet_ws_list.getRange(i,2).getValue();
      nextschedule.intime_1=Utilities.formatDate(sheet_ws_list.getRange(i,3).getValue(),'Asia/Tokyo', 'HH:mm');
      nextschedule.outtime_1=Utilities.formatDate(sheet_ws_list.getRange(i,4).getValue(),'Asia/Tokyo', 'HH:mm');
      nextschedule.date_2=sheet_ws_list.getRange(i,5).getValue();
      nextschedule.intime_2=Utilities.formatDate(sheet_ws_list.getRange(i,6).getValue(),'Asia/Tokyo', 'HH:mm');
      nextschedule.outtime_2=Utilities.formatDate(sheet_ws_list.getRange(i,7).getValue(),'Asia/Tokyo', 'HH:mm');
      return  nextschedule;
      console.log(nextschedule);
    }
  }
  
  /*リストに追加されていない時*/
  if(i==LastRow+1&&status==0){
    nextschedule.date_1=1;
    return nextschedule;
  }
  
}
