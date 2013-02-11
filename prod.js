// start-anonymous function si-56
(function() {

    function _loadDependencies() {
        if(typeof jQuery_1_8_3_9695ea653f7d4ca2aae15f14d2b2837f === "undefined" || !jQuery_1_8_3_9695ea653f7d4ca2aae15f14d2b2837f || jQuery_1_8_3_9695ea653f7d4ca2aae15f14d2b2837f === null) {
            if(!document.getElementById('jquery_1_8_3_9695ea653f7d4ca2aae15f14d2b2837f')) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'http://devftp02.dev.local/injections/common/jquery_1_8_3_9695ea653f7d4ca2aae15f14d2b2837f.js';
                script.id = 'jquery_1_8_3_9695ea653f7d4ca2aae15f14d2b2837f';
                document.body.appendChild(script);
            }
            return false;
        }

        return true;
    }
   
})();