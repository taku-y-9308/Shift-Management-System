function getname(){
  var name=[];
  var ss = SpreadsheetApp.openById("1llSF4zQHja6J1_FvdiFScOUirI8TgOMmtESXimArei4");
  var sheet=ss.getSheetByName("AutoShare_Ans");
  name[0]=sheet.getRange(sheet.getLastRow(),2).getValue();//0に漢字を代入
  name[1]=sheet.getRange(sheet.getLastRow(),3).getValue();//1にローマ字を代入　
  
  return name;
}
  