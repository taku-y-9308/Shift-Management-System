function status_code_now(){
  var ss= SpreadsheetApp.openById("1Ezp6xG-PRcBCmSOPVYyIwRwpZQDiJJLI0qxCZLen6NA");
  var sheet= ss.getSheets()[0];
  return sheet.getRange("B2").getValue();
}

function status_code_store(value){
  var ss= SpreadsheetApp.openById("1Ezp6xG-PRcBCmSOPVYyIwRwpZQDiJJLI0qxCZLen6NA");
  var sheet= ss.getSheets()[0];
  return sheet.getRange("B2").setValue(value);
}

/*
function status_code_1(){
  var ss= SpreadsheetApp.openById("1Ezp6xG-PRcBCmSOPVYyIwRwpZQDiJJLI0qxCZLen6NA");
  var sheet= ss.getSheets()[0];
  return sheet.getRange("B2").setValue("1");
}
*/