document.body.onload = function () {

    incl = {
        w:window.innerWidth,
        h:window.innerHeight,
        init: function () {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.incl_wrapper {height: ' + this.h + 'px' + ';position: relative;width: ' +  this.w  + 'px; }';
            style.innerHTML += '.adicon {background: #ffffff none repeat;bottom: 0;padding: 5px;position: absolute;right: 0; color: #337ab7;text-decoration: none; }';
            style.innerHTML += '.adhover {display:none;background: #FFF none repeat scroll 0 0;height: 100%;left: 0;opacity: 0.85;position: absolute;top:0px; width: 100%;}';
            style.innerHTML += 'a{color: #337ab7;text-decoration: none; }';
            style.innerHTML += 'input[type="text"]{background:#FFF; height:35px; width:75%; border:1px solid #CCC;padding:5px }';
            style.innerHTML += '.adiconclose {background: #ffffff none repeat;top:opacity: 1 !important; 0;padding: 5px;position: absolute;right: 0; color: #337ab7;text-decoration: none; }';
            style.innerHTML += '.popup-comment-wrapper {  padding-left: 15px;padding-top: 15px; }';
            document.getElementsByTagName('head')[0].appendChild(style);
            this.set();

        },
        click: function () {
            this.coverit();
        },
        set: function () {
            var node = document.createElement("div");
            node.setAttribute('class', 'incl_wrapper');
            node.setAttribute('id', 'incl_wrapper_i');
            document.body.appendChild(node);

            node = document.createElement("a");
            var t = document.createTextNode("Say What");
            var img='<img src="saywhat.png" alt="Say What" />';
           
            //node.appendChild(t);
            node.setAttribute('class', 'adicon');
            node.setAttribute('href', 'javascript:void(0)');
            node.setAttribute('id', 'adicon_i');
            node.setAttribute('onclick', 'incl.click()');
            document.getElementById('incl_wrapper_i').appendChild(node);

            var node = document.createElement("div");
            node.setAttribute('class', 'adhover');
            node.setAttribute('id', 'adhover_i');
            
            var html='<a class="adiconclose" onclick="incl.closecover()" href="#"><img src="close-icon.png" alt="Close" /></a> <div class="popup-comment-wrapper"><div class="comment-form-wrapper" style="margin-bottom:15px;"><form data-parsley-validate="" method="post" id="comment-form" novalidate="">Say What: <input type="text" data-parsley-required-message="Please insert your comment" data-parsley-required="true" placeholder="Enter your comments" name="comments"><input type="button" style="padding:5px 10px; background-color: #337ab7;height: 35px;margin-left: 5px;color: #fff;" value="Submit" /><input type="hidden" value="comment" name="type"><input type="hidden" value="2" name="banner_id"></form></div><a target="_blank" href="https://www.att.com/">Follow the ad</a><br><a target="_blank" href="/backup/comment.php">More about Say what!</a></div>'
            
            document.getElementById('incl_wrapper_i').appendChild(node);
            document.getElementById('adicon_i').innerHTML=img;
            document.getElementById('adhover_i').innerHTML=html;

        },
        coverit: function () {
            var elem = document.getElementById("adhover_i");
            elem.style.display="block";
        },
        closecover:function(){
            var elem = document.getElementById("adhover_i");
            elem.style.display="none";
        }
    }

    incl.init();
};

