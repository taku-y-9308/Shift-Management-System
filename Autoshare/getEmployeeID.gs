function getEmployeeID() {
  var ss = SpreadsheetApp.openById("1llSF4zQHja6J1_FvdiFScOUirI8TgOMmtESXimArei4");
  var sheet=ss.getSheetByName("AutoShare_Ans");
  var employeeID=sheet.getRange(sheet.getLastRow(),5).getValue();
  return employeeID;
}
