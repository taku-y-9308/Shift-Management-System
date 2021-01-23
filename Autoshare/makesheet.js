function makesheet(name,employeeID,address) {
  var name_kanji=name[0];
  var name_romaji=name[1];
  
  /*シートを作成して、名前を変更*/ 
  var templateFile = DriveApp.getFileById('1vi0HUdC_gXZTxgFaX8SKBgSPz3nJpaH7xqGHIzSSh9Y');
  var OutputFolder = DriveApp.getFolderById('1y_Pc0Vys_oi6xq3I1o6Cp1P_Ry2LGQHt');
  var OutputFileName = templateFile.getName().replace('_template', '')+'_'+name_kanji;
  var ID=templateFile.makeCopy(OutputFileName, OutputFolder).getId();
  
  /*B1に名前を代入*/
  var ss = SpreadsheetApp.openById(ID);
  var sheet = ss.getSheets()[0];
  sheet.getRange("B1").setValue(name_kanji);
  
  /*シフト希望表のキーに追加*/
  var ss=SpreadsheetApp.openById("1hOdMEut19BKNvrPpgcFXc_wdljJNzT4YXFRFdIeiwaY");
  var sheet=ss.getSheetByName("key");
  var LastRow=sheet.getLastRow()
  for(var i=2;i<=LastRow;i++){
    if(sheet.getRange(i,1).isBlank())
      break;
    if(i==LastRow)
    {
      i+=1;
      break;
  }
  }
  var staff_info=[[name_romaji,ID,employeeID,address]]
  console.log(staff_info);
  sheet.getRange(i,1,1,4).setValues(staff_info);
  return ID;
}
