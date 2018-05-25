<!DOCTYPE html>
<html>
<head>
<link href='assets/css/fullcalendar.min.css' rel='stylesheet' />
<link href='assets/css/fullcalendar.print.min.css' rel='stylesheet' media='print' />
<script src='jquery/jquery-1.10.2.js'></script>
<script src='jquery/jquery-ui.custom.min.js'></script>
<script src='assets/js/fullcalendar.min.js'></script>
<script src='assets/js/app.js'></script>
<link href='assets/css/popup.css'  rel='stylesheet'></link>
<link href='assets/css/calendar.css'  rel='stylesheet'></link>
<link href='assets/css/create-event.css'  rel='stylesheet'></link>

</head>
<body>

<div id= "eventPopup" class="eventView shadow" style="top : 35px; left: 200px; position: absolute; transform: initial; display : none;"">	
			<div id="popupHeader">
				<a href="#" class="cancel_btn" id="appoint_window_cancel_icon"></a>
				<h2>Details</h2>
			</div>
			<div class="appointment-det-container">
				<ul style="max-height: 260px;overflow: auto;">
					<li>
						<label>Event</label><span id="event-title"></span>
					</li>
                    <li>
                       <label>Duration</label> <span id="event-duration"></span>
					</li>
				</ul>
			</div>
	<div class="pointer_pos pointer_left" style="top: 0%; margin-top: 197px;">
	</div>
</div>

	<div id="editApptPopup" class="appt-popup-holder appt-show-details ui-draggable" style="display: none;height: 380px;">

		<div class="appt-header-holder ui-draggable-handle">
			<h3 class="appt-header-title">Event</h3>
			<a class="appt-popup-close"><span>×</span></a>
			
		</div>
		<div class="appt-details-holder">
			<ul class="appt-details-list">

				<li><label class="appt-details-label">Event name</label> <input id="event-title-value" class="appt-notes-area" type="text" placeholder="Event Title">
					</li>
				<!-- Start Day/Time -->
				
				<li><label class="appt-details-label">Start Day/Time</label>
					<div class="appt-details-daytime">
						<a class="appt-day-btn"> <b class="appt-day-label">Fri, May 04</b>
						</a>
						<div class="appt-daytime-divider"></div>
						<div class="appt-time-dropdown">
							<a class="appt-dropdown-btn"> <b class="appt-time-title">00:00 am</b> 
							
						</div>
						</div>
						</li>
						<!-- End Day/Time -->

				<li><label class="appt-details-label">End Day/Time</label>
					<div class="appt-details-daytime">
						<a class="appt-day-btn"> <i class="icon-ok"></i> <b
							class="appt-day-label">Fri, May 04</b>
						</a>
						<div class="appt-daytime-divider"></div>
						<div class="appt-time-dropdown">
							<a class="appt-dropdown-btn"> <b class="appt-time-title">04:00 am</b><i class="icon-angle-down"></i> <!--  -->
							</a>
						</div>
						
					</div>
					</li>
						</ul>
					</div>
		</div>


<div></div>

	<div id='calendar'></div>
	<div style='clear: both'></div>


</body>
</html>
