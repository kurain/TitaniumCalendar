var win = Ti.UI.currentWindow;
var table = Ti.UI.createTableView();
var data = [];

var calendars = Ti.Android.Calendar.allCalendars;

for(var i=0;i<calendars.length;i++){
	var calendar = calendars[i];
	var row = Ti.UI.createTableViewRow({
		 height: '60dp',
		 'font-size': '20dp',
		 color: 'black'
	});
	row.title = calendar.name;
	row.calendarObj = calendar; 
	data.push(row);
	
	row.addEventListener(
		'click',
		function(){
			var newWin = Ti.UI.createWindow({
				url: 'event_list.js',
				calendarObj: this.calendarObj
			});
			Ti.UI.currentTab.open(newWin);
		}
	);
}

table.setData(data);
win.add(table);
