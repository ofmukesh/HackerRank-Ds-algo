function timeConversion(s) {
    var Time = "";
    var hour = s[0]+""+s[1];
    var time = s[8]+""+s[9];
    if(time=="PM"&& hour < 12){
        Time = (parseInt(hour)+12)+""+s[2]+""+s[3]+""+s[4]+""+s[5]+""+s[6]+""+s[7];
    }else if(time=="AM" && hour == 12){
        Time = "00"+""+s[2]+""+s[3]+""+s[4]+""+s[5]+""+s[6]+""+s[7];
    }else if(time=="AM"){
        Time = hour+""+s[2]+""+s[3]+""+s[4]+""+s[5]+""+s[6]+""+s[7];
    }else if(time=="PM"){
        Time = hour+""+s[2]+""+s[3]+""+s[4]+""+s[5]+""+s[6]+""+s[7];
    }
    return Time;
}
