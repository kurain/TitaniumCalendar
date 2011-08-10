var EventCreator = {
	createWithReminder: function(calendar, title, description, begin, end, reminder){
		var eventObj = calendar.createEvent({
			title: title,
			description: description,
			begin: begin,
			end: end
		});
	    eventObj.createReminder(reminder);
	},
}
exports.EventCreator = EventCreate;
