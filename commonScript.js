
function onlyNumberKey(evt) {
  
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
  	return false;
  return true;
}
function backDayCalc(day,month,year){
if(month==1||month==3||month==5||month== 7||month==8||month==10||month==12)
    if(day+7==31)
        return 1;
    else
        return (day+7)%31
else if(month==2)
    if(year%4==0){
        if(day+7==29)
            return 1;
        else
            return (day+7)%29
        }
    else{
        if(day+7==28)
            return 1;
        else
            return (day+7)%28

        }
else
    return (day+7)%30
}

function getFullTarih() {
  
  var date=new Date();
  var teslimGun=backDayCalc(date.getDate(),(date.getMonth()+1),date.getFullYear());
  var returnStr;
  if(date.getDate()>teslimGun){
      teslimAy+=1;
  }
  else{
      teslimAy=date.getMonth()+1;
  }
  var teslimYear;
  if(date.getMonth()>teslimAy)
      teslimYear=date.getFullYear+1;
  else
      teslimYear=date.getFullYear();
      returnStr=teslimGun+"."+teslimAy+"."+teslimYear;
      return returnStr;
}



function tarihGectiMi(tarih) {
    let gelenTarih=tarih.split(".");
    var y=parseInt(gelenTarih[2]);
    var a=parseInt(gelenTarih[1]);
    var g=parseInt(gelenTarih[0]);

    var d=new Date();
    if(y<d.getFullYear())
        return true;
    if(a<(d.getMonth()+1))
        return true;
    if(g<d.getDate())
        return true;
    return false;
}


function tableCounter(tableCount){
    tableCount+=1;
    if( tableCount%2==0)
        return"background-color:#ffffff";
    else
        return "background-color:#e7ebf1";
}

function userKaraliste(list){
    if(list=="evet")
        return false;
    else
        return true;
        
}