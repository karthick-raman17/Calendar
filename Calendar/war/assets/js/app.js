$(document)
		.ready(
				function() {
					var date = new Date();
					var d = date.getDate();
					var m = date.getMonth();
					var y = date.getFullYear();

					/*
					 * className colors
					 * 
					 * className: default(transparent), important(red),
					 * chill(pink), success(green), info(blue)
					 * 
					 */

					

					$('#external-events div.external-event').each(function() {
						var eventObject = {
							title : $.trim($(this).text())
					
						};

						$(this).data('eventObject', eventObject);

						$(this).draggable({
							zIndex : 999,
							revert : true, 
							revertDuration : 0
						
						});

					});

					
					var calendar = $('#calendar')
							.fullCalendar(
									{
										header : {
											left : 'title',
											center : 'agendaDay,agendaWeek,month',
											right : 'prev,next today'
										},
										aspectRatio: 1.8,
										editable : true,
										firstDay : 0, 
										selectable : true,
										defaultView : 'agendaDay',

										axisFormat : 'h:mm',
										columnFormat : {
											month : 'ddd',
											week : 'ddd d', 
											day : 'dddd M/d',
											agendaDay : 'dddd d'
										},
										titleFormat : {
											month : 'MMMM yyyy', 
											week : "MMMM yyyy", 
											day : 'MMMM yyyy' 
										},
										slotDuration : '00:30:00',
										nowIndicator : true,
										allDaySlot : true,
										allDayText : 'all-day',
										selectHelper : true,
										select : function(start, end, allDay) {
											
											
											// create an event by click

											//$("#editApptPopup").css("display","block");
											 
											var title = $("#event-title-value").val();
											
											  var title = prompt('Create Event: ');
											  document.getElementById("eventPopup").style.display = "none";

											 if (title) {
												var eventData;

												eventData = {
													title : title,
													start : start,
													end : end,
													allDay : allDay
													/*
													 * start :Math.floor((start.getTime()/1000)), 
													 * end : Math.floor((end.getTime()/1000)),
													 */
												
												};

												console.log(eventData);
//												console.log(start.format());
												calendar.fullCalendar('renderEvent',eventData, true);
											}
											calendar.fullCalendar('unselect');
											
//											 var xhttp = new XMLHttpRequest();
//											  xhttp.onreadystatechange = function() {
//											    if (this.readyState == 4 && this.status == 200) {
//											    console.log(this.response);
//											    }
//											  };
//											  xhttp.open("GET", "/jsontest", true);
//											  xhttp.send();
										},

										

										eventClick : function(event, element) {
											
											var duration = eventDuration(event.start,event.end);
											
											document.getElementById("eventPopup").style.display = "block";
											document.getElementById("event-title").innerHTML = event.title;
											document.getElementById("event-duration").innerHTML = duration;

										},
										 
										/*
										 * eventMouseover: function(event,jsEvent, view){
										 * 
										 *
										 * 
										 *  }, 
										 * eventMouseout: function(event,jsEvent, view ) {
										 * 
										 * console.log(event);
										 * console.log(jsEvent);
										 * console.log(view);
										 *  },
										 */
										
										// eventDrop
										eventDrop : function(event, delta, ui,view, revertFunc, jsEvent) {
											document.getElementById("eventPopup").style.display = "none";
											alert(event.title +" is moved to " +eventDuration(event.start, event.end));

											if (!confirm("Reschedule this event?")) {
												revertFunc();
											}
										},

										// eventResize

										eventResize : function(event, delta,view, revertFunc, jsEvent, ui) {
											document.getElementById("eventPopup").style.display = "none";
								alert(event.title + " is moved to "+ eventDuration(event.start, event.end));

											if (!confirm("Reschedule this event?")) {
												revertFunc();
											}

										},

										droppable : true, 
										drop : function(date, allDay) { 
											// this function is called when something is dropped retrieve the dropped element's stored Event Object
											var originalEventObject = $(this)
													.data('eventObject');

											// we need to copy it, so that multiple events don't have a reference to the same object
											var copiedEventObject = $.extend(
													{}, originalEventObject);

											// assign it the date that was reported
											copiedEventObject.start = date;
											copiedEventObject.allDay = allDay;

											// render the event on the calendar the last `true` argument determines if the event "sticks"
											
											$('#calendar').fullCalendar(
													'renderEvent',
													copiedEventObject, true);

											// is the "remove after drop" check box checked?
											if ($('#drop-remove').is(':checked')) {
												$(this).remove();
											}

										},
										
										events : [ {

											title : 'All Day Event',
											start : '2018-04-01T12:00:00',
											end : '2018-04-01T23:59:00',
											color : 'red'
										}, {
											title : 'Long Event',
											start : '2018-04-07',
											end : '2018-04-10'
										}, {
											title : 'Conference',
											start : '2018-04-11',
											end : '2018-04-13'
										}, {
											title : 'Meeting',
											start : '2018-04-12T10:30:00',
											end : '2018-04-12T12:00:00'
										}, {
											title : 'Lunch',
											start : '2018-04-12T12:00:00',
											end : '2018-04-12T13:00:00'
										}, {
											title : 'Meeting',
											start : '2018-04-12T14:30:00',
											end : '2018-04-12T15:00:00'
										}, {
											title : 'Team Meeting',
											start : '2018-04-12T17:30:00',
											end : '2018-04-12T18:00:00'
										}, {
											title : 'Dinner',
											start : '2018-04-12T20:00:00',
											end : '2018-04-12T21:00:00'
										}, {
											title : 'Birthday Party',
											start : '2018-04-13T07:00:00',
											end : '2018-04-13T08:00:00'
										}
										],
									});

				});

//date object convertion
function eventDuration(start, end) {

	if (start != null && end != null) {
		
		if (start.getTime() <= end.getTime())

			var event_duration_start = new Date(start);

		var days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
		var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec" ];
		var dayName = days[event_duration_start.getDay()];
		var monthName = months[event_duration_start.getMonth()];
		var date = event_duration_start.getDate();
		var event_Time_start = start.toLocaleString('en-US', {
			hour : 'numeric',
			minute : 'numeric',
			hour12 : true
		})

		var event_Time_end = end.toLocaleString('en-US', {
			hour : 'numeric',
			minute : 'numeric',
			hour12 : true
		})

		var finalValue = dayName + ", " + monthName + " " + date + ", "+ event_Time_start + " - " + event_Time_end;

		return finalValue;
	} else 
		{
		return "Not a date";
		}
}

function getAppointmentDuration(start,end){
	var startDateJson = JSON.stringify(start);

	var endDateJson = JSON.stringify(end);
	
	var startDateObj = JSON.parse(startDateJson);  
	
	var endDateObj = JSON.parse(endDateJson);  
	        
	var startDate = new Date(startDateObj);
	var endDate = new Date(endDateObj);

	console.log(startDate+", "+endDate);
	return startDate, endDate;
	
}



document.getElementById("appoint_window_cancel_icon").onclick = function() {

	document.getElementById("eventPopup").style.display = "none";

}

document.getElementsByClassName("appt-popup-close")[0].onclick = function() {

	document.getElementById("editApptPopup").style.display = "none";

}