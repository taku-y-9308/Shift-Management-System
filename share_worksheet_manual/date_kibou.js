function date_kibou(ID_kibou) {
  var ss = SpreadsheetApp.openById(ID_kibou);
  
  var sheet= ss.getSheets()[0];
  
  var date = new Date();
  var day=date.getDate();//実行日の日付を格納
  date.setDate(day-(day-1));  
  date.setMonth(date.getMonth()+1);
  var value= Utilities.formatDate(date,'JST','M/d');
  sheet.getRange("B1").setValue(value);
  
  var sourceRange = sheet.getRange("B1");
  var destination = sheet.getRange("B1:AG1");
  sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  
}
