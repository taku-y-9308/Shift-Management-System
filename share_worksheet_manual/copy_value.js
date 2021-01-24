function copy_value_kibou(template_kibou_ID,ID_kibou) {
  var ss_copyfrom=SpreadsheetApp.openById(template_kibou_ID);
  var ss_copyto=SpreadsheetApp.openById(ID_kibou);
  
  var sheet_copyfrom=ss_copyfrom.getSheets()[0];
  var sheet_copyto=ss_copyto.getSheets()[0];
  var lastrow=sheet_copyfrom.getLastRow();
  
  var value_copyFrom=sheet_copyfrom.getRange(3,2,lastrow-2,34).getValues();//複数のセルを取得するにはgetValues,範囲は自分も含める
  sheet_copyto.getRange(3,2,lastrow-2,34).setValues(value_copyFrom);
  sheet_copyto.getRange(3,2,lastrow-2,32).setNumberFormat('H:mm:ss');
  
}


function copy_value_kinmu(template_kinmu_ID,ID_kinmu) {
  var ss_copyfrom=SpreadsheetApp.openById(template_kinmu_ID);
  var ss_copyto=SpreadsheetApp.openById(ID_kinmu);
  var sheet_copyfrom=ss_copyfrom.getSheets()[0];//1日の最終行のみ取得
  var lastrow=sheet_copyfrom.getLastRow();
  for(var i=0;i<31;i++){
    sheet_copyfrom=ss_copyfrom.getSheets()[i];
    var sheet_copyto=ss_copyto.getSheets()[i];
    /*名前と勤務時間のセルを値だけコピー*/
    var value_copyFrom_name=sheet_copyfrom.getRange(3,1,lastrow-2,3).getValues();//複数のセルを取得するにはgetValues,範囲は自分も含める
    sheet_copyto.getRange(3,1,lastrow-2,3).setValues(value_copyFrom_name);
    sheet_copyto.getRange(3,1,lastrow-2,3).setNumberFormat('H:mm');
    /*勤務区分のセルを値だけコピー*/
    var value_copyFrom_class=sheet_copyfrom.getRange(3,71,lastrow-2,1).getValues();//複数のセルを取得するにはgetValues,範囲は自分も含める
    sheet_copyto.getRange(3,71,lastrow-2,1).setValues(value_copyFrom_class);
  }
}