function getAddress(){
  var ss = SpreadsheetApp.openById("1llSF4zQHja6J1_FvdiFScOUirI8TgOMmtESXimArei4");
  var sheet=ss.getSheetByName("AutoShare_Ans");
  var address=sheet.getRange(sheet.getLastRow(),4).getValue();
  return address; 
}