/*シートの自動作成、日付を入力するスクリプト*/
function share_worksheet() {
  // テンプレートファイル
  var template_kibou_ID='1hOdMEut19BKNvrPpgcFXc_wdljJNzT4YXFRFdIeiwaY';
  var template_kinmu_ID='1URHf9ri9HTaGCGYZL-1YXV6DeP9fpot0XA_qxa2HNo0';
  var templateFile_1 = DriveApp.getFileById(template_kibou_ID);//シフト希望表
  var templateFile_2 = DriveApp.getFileById(template_kinmu_ID);//勤務表　
  // 出力フォルダ
  var OutputFolder = DriveApp.getFolderById('1TxI8hmuY8KD3sPJa5bi2xDjbgmzDvHE5');
  // 出力ファイル名
  var date=new Date();//現在の日付を取得
  date.setMonth(date.getMonth()+1);//現在の日付よりも1月進める
  var OutputFileName_1 = templateFile_1.getName().replace('_template', '')+'_'+Utilities.formatDate(date, 'JST', 'yyyyMM');
  var OutputFileName_2 = templateFile_2.getName().replace('_template', '')+'_'+Utilities.formatDate(date, 'JST', 'yyyyMM');
  
  
  var ID_kibou=templateFile_1.makeCopy(OutputFileName_1, OutputFolder).getId();
  var ID_kinmu=templateFile_2.makeCopy(OutputFileName_2, OutputFolder).getId();
  console.log(ID_kinmu,ID_kibou);
  date_A1(ID_kinmu);
  date_tab(ID_kinmu);
  //date_kibou(ID_kibou);
  put_ID(ID_kinmu);
  copy_value_kibou(template_kibou_ID,ID_kibou);
  copy_value_kinmu(template_kinmu_ID,ID_kinmu);
  /*シフト希望表のプロテクトを解除する */
  sheet_protection_off(ID_kinmu)
  /*全てのシフト提出表にプロテクトをかける*/
  sheet_protection();
  /*LINEグループに通知する*/
  LINE_Announce.pushMessage_finish();
}


