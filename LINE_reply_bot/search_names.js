function search_name(user_id) {
  var ss_list=SpreadsheetApp.openById("1_I6rQOsNnkqZ3Ck9CM7c9TIxpQiLskvD26nE__kEQYA");//登録者リストを開く
  var sheet_list = ss_list.getSheets()[0];
  var LastRow_list=sheet_list.getLastRow();

  /*pushmessageListのデータを一括で取得する*/
  const Pushmessage_list=sheet_list.getRange(2,1,LastRow_list-1,2).getValues();
  console.log(Pushmessage_list);
  for(var i=0;i<Pushmessage_list.length;i++){
    if(Pushmessage_list[i][1]==user_id){
      var name=Pushmessage_list[i][0];
      return name;
    }
  }
  
  return 1;
}
