function check_employeeID(employeeID) {
  var ss = SpreadsheetApp.openById("1hOdMEut19BKNvrPpgcFXc_wdljJNzT4YXFRFdIeiwaY");
  var sheet=ss.getSheetByName("key");
  var lastRow=sheet.getLastRow()
  var employeeID_list=[];
  employeeID_list=sheet.getRange(2,3,lastRow-1,1).getValues();
  for(var i=0;i<employeeID_list.length;i++){
    if(employeeID_list[i]==employeeID){
      return 1; 
    }
  
  }
  return 0;
}
