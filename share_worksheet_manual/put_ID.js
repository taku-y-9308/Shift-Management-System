function put_ID(ID_kinmu) {
  var ss = SpreadsheetApp.openById("1pYnYxGjSR_Kqp2WlE4WbB3Wa1082Cn-mhvo6-hOQ8m0");
  var sheet = ss.getSheets()[0];
  var date=new Date();
  date.setMonth(date.getMonth()+1);
  var value=Utilities.formatDate(date, 'JST', 'yyyyMM');
  var LastRow=sheet.getLastRow();
  sheet.getRange(LastRow+1,1).setValue(value);
  sheet.getRange(LastRow+1,2).setValue(ID_kinmu);

}