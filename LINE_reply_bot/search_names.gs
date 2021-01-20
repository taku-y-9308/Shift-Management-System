function search_name(user_id) {
  var ss_list=SpreadsheetApp.openById("1_I6rQOsNnkqZ3Ck9CM7c9TIxpQiLskvD26nE__kEQYA");//登録者リストを開く
  var sheet_list = ss_list.getSheets()[0];
  var LastRow_list=sheet_list.getLastRow(); 
  for(var i=2;i<=LastRow_list;i++){
    if(sheet_list.getRange(i,2).getValue()==user_id){
      var name=sheet_list.getRange(i,1).getValue();
      return name;
    }
  }
  
  return 1;
}
