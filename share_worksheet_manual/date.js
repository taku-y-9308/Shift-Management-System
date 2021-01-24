/*A1に日付を入力していくスクリプト*/
function date_A1(ID_kinmu) {
  var ss = SpreadsheetApp.openById(ID_kinmu);
  for(var i=0;i<31;i++){
    var sheet = ss.getSheets()[i];
    
    var date = new Date();
    var day=date.getDate();//実行日の日付を格納
    date.setDate(day-(day-1));  
    date.setMonth(date.getMonth()+1);
    date.setDate(date.getDate()+i);  
    
    var value=Utilities.formatDate(date, 'Asia/Tokyo', 'YYYY/MM/dd');
    sheet.getRange(1,1).setValue(value);
  }
}
