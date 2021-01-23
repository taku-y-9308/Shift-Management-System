function AutoShare_3() {
  var address=getAddress();
  var employeeID=getEmployeeID();
  try{
    if(check_employeeID(employeeID)==0){
      var name=getname();
      var ID=makesheet(name,employeeID,address);
      var ss = SpreadsheetApp.openById(ID);//取得したIDから、スプレッドシート を開く
      ss.addEditor(address);
      mailSend_OK(address,ID);
    }
    else{
      mailSend_NG_duplicate(address);
    }
  }catch(e){
    mailSend_NG(address);
  }
  
   
}

