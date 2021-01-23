function register_list(text,user_id){
  var ss= SpreadsheetApp.openById("1_I6rQOsNnkqZ3Ck9CM7c9TIxpQiLskvD26nE__kEQYA");//登録者リストシートのID
  var sheet= ss.getSheets()[0];
  var LastRow=sheet.getLastRow();
  sheet.getRange(LastRow+1,1).setValue(text);
  sheet.getRange(LastRow+1,2).setValue(user_id);
}
