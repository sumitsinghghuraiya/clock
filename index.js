var style=document.documentElement.style;

setInterval(timess,1000)
function timess(){
    
    const t=new Date();
    var min=t.getMinutes()*6+270;
    var hous=t.getHours()*30+270;
    var se=t.getSeconds()*6+270;
    style.setProperty("--second",se+"deg");
    style.setProperty("--hour",hous+"deg");
    style.setProperty("--minute",min+"deg");
}
