var win = Ti.UI.currentWindow;
win.setBackgroundColor('#000');
var table = Ti.UI.createTableView();
var data = [];

var calendar = win.calendarObj;

var YEAR = 2011;

var events = calendar.getEventsInYear(YEAR);
for(var i=0;i<events.length;i++){
	var eventObj = events[i];
	var row = Ti.UI.createTableViewRow({
		 height: '60dp',
		 'font-size': '20dp',
		 backgroundColor: 'white',
		 color: 'black'
	});
	row.title = eventObj.title;
	
	row.eventObj = eventObj;
	row.addEventListener(
		'click',
		function(){
			var newWin = Ti.UI.createWindow({
				url: 'event_detail.js',
				eventObj: this.eventObj
			});
			Ti.UI.currentTab.open(newWin);
		}
	);
	data.push(row);
}

table.setData(data);
win.add(table);

win.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var menuItem = menu.add({ title: "Add Event" });
    menuItem.addEventListener("click", function(e) {
    	var now = new Date();
    	var start = new Date(now.getTime() + 1800 * 1000);
    	var end = new Date(now.getTime() + 3600 * 1000);
        var ev = calendar.createEvent({
			title: 'test',
			description: 'test event',
			begin: start,
			end: end
		});
		ev.createReminder({
    		minutes: 10,
    		method: Ti.Android.Calendar.METHOD_EMAIL
		});
    });
};