
<script type="text/javascript">


  $(document).ready(init);
    function init(){

var URL = document.location.toString();
var useragent = navigator.userAgent;
useragent = useragent.toLowerCase();

     if( useragent.indexOf('iphone') != -1 ) document.getElementById("myLink").href="sms:+886953789076&body=嗨!Poe,可以收到我的簡訊嗎?"; //iphone
     else if( useragent.indexOf('ipad') != -1 || useragent.indexOf('ipod') != -1) document.getElementById("myLink").href="sms:+886953789076&body=嗨!Poe,可以收到我的簡訊嗎?"; //ipad
     else if( useragent.indexOf('android') != -1 ) document.getElementById("myLink").href="sms:+886953789076?body=嗨!Poe,可以收到我的簡訊嗎?"; 
     
    }


</script>