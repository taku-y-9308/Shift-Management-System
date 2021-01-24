/*３１個のタブに日付とその曜日を入力していくスクリプト*/
function date_tab(ID_kinmu){
  
  var ss = SpreadsheetApp.openById(ID_kinmu);
  for(var i=0;i<31;i++){
    var sheet = ss.getSheets()[i];
    
    var ary = ['日', '月', '火', '水', '木', '金', '土'];
    var date = new Date();
    var day=date.getDate();//実行日の日付を格納
    date.setDate(day-(day-1));  
    date.setMonth(date.getMonth()+1);
    date.setDate(date.getDate()+i);  
    var week_num = date.getDay();//曜日番号を取得する
    var week='('+ary[week_num]+')';
    var value= Utilities.formatDate(date,'JST','M/d');
    
    sheet.setName(value+week);
  }
    
   
}
