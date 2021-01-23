function store_text(text) {
  var ss= SpreadsheetApp.openById("1Ezp6xG-PRcBCmSOPVYyIwRwpZQDiJJLI0qxCZLen6NA");
  var sheet= ss.getSheets()[0];
  sheet.getRange("B1").setValue(text);
}

function call_text(){
  var ss= SpreadsheetApp.openById("1Ezp6xG-PRcBCmSOPVYyIwRwpZQDiJJLI0qxCZLen6NA");
  var sheet= ss.getSheets()[0];
  return sheet.getRange("B1").getValue();
  
}