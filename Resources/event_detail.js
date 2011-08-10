var win = Ti.UI.currentWindow;
win.setBackgroundColor('#000');
var table = Ti.UI.createTableView();
var data = [];

var e = win.eventObj;

var details = [
	e.title,
	e.description,
	e.begin.toString(),
	e.end.toString()
];

for(var i=0;i<details.length;i++){
	var detail = details[i];
	var row = Ti.UI.createTableViewRow({
		 height: '60dp',
		 'font-size': '20dp',
		 backgroundColor: 'white',
		 color: 'black'
	});
	row.title = detail;

	data.push(row);
}

table.setData(data);
win.add(table);