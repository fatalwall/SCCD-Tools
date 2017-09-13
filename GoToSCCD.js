chrome.browserAction.onClicked.addListener(function(tab) {
	OpenSCCD();
});

function OpenSCCD() {
	chrome.storage.sync.get(
		['sccdurl'], 
		function(items) {
			var sccdurl = items.sccdurl || 'https://sccd/maximo';
			chrome.tabs.create({url:sccdurl});
		}
	);

}
