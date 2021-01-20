/*シートの権限を変更して編集できないようにする*/
function sheet_protection() {
  var ss = SpreadsheetApp.openById("1hOdMEut19BKNvrPpgcFXc_wdljJNzT4YXFRFdIeiwaY");
  var sheet=ss.getSheetByName("key");
  var lastRow=sheet.getLastRow();
  var Addresses=[];
  var Ids=[];
  Ids=sheet.getRange(2,2,lastRow-1,1).getValues();
  Addresses=sheet.getRange(2,4,lastRow-1,1).getValues();
  for(var i=1;i<Ids.length;i++){
    if(Addresses[i][0]!=""){
      var ss_form=SpreadsheetApp.openById(Ids[i][0]);
      var sheet_form=ss_form.getSheets()[0];
      var protection=sheet_form.protect();
      protection.removeEditor(Addresses[i][0]);
    }
  }

}
