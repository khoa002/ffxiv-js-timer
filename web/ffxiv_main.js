requirejs.config({
	paths: {
		'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
		'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
		'timer': '../timer'
	}
});
requirejs(['ffxiv_countdown'], function(FFXIVCountdown) {
	function startTimers() {
		new FFXIVCountdown(document.getElementById('timers'), 'timers.json');
	}
	// From http://youmightnotneedjquery.com/, sort of
	if (document.readyState != 'loading') {
		startTimers();
	} else {
		document.addEventListener('DOMContentLoaded', startTimers);
	}
});