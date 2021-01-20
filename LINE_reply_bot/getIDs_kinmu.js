function getID_kinmu(){
  var ID=[];
  var ss_ID = SpreadsheetApp.openById("1pYnYxGjSR_Kqp2WlE4WbB3Wa1082Cn-mhvo6-hOQ8m0");//勤務表ID一覧
  var sheet_ID = ss_ID.getSheets()[0];
  var LastRow=sheet_ID.getLastRow();
  var date=new Date();
  //date.setDate(date.getDate()+1);
  var value=Utilities.formatDate(date, 'JST', 'yyyyMM');//今日の日付を取得202005形式
  for(var i=2;i<=LastRow;i++){
   if(sheet_ID.getRange(i,1).getValue()==value) 
     break;
  }
  ID[0]=sheet_ID.getRange(i,2).getValue();//今月の勤務表ID
  ID[1]=sheet_ID.getRange(i+1,2).getValue();//来月の勤務表ID
  return ID;
}
