window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "First") ? "Last" : "First";
    });
    
    document.getElementById('hider').onclick = function() {

    	if (document.getElementById('cats').style.display === 'none') {
        	alert('Котики!');   		
        	document.getElementById('cats').style.display = 'block'
    	} else {
    		document.getElementById('cats').style.display = 'none'
    	};
    }
    
    document.getElementById("screen_").innerHTML = 
    	screen.width + "x" + screen.height;
    
    document.getElementById('hider_screen').onclick = function() {

    	if (document.getElementById('screen_').style.display === 'none') {
        	alert('Расширение экрана');   		
        	document.getElementById('screen_').style.display = 'block'
    	} else {
    		document.getElementById('screen_').style.display = 'none'
    	};
    }
      
};