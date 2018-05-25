<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
	name="viewport" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- Favicons -->

 <link rel="icon" href="../assets/img/calendar-icon.png">
<title>Calendar</title>
<!--     Fonts and icons     -->
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
<link rel="stylesheet" href="../assets/css/material-dashboard.css?v=2.0.0">


</head>

<body class="">
	<div class="wrapper">
		<div class="sidebar" data-color="purple" data-background-color="white">

			<div class="logo">
				<span class="simple-text logo-normal">LOGO</span>
			</div>
			<div class="sidebar-wrapper">
				<ul class="nav">
					<li class="nav-item active ">
						<a class="nav-link" id="calendar-tab">
							<div class="material-icons">date_range</div>
							<!-- 	<p>Calendar</p> -->
					</a>
					</li>
						<li class="nav-item">
						<a class="nav-link" href="/pages/user.jsp"> <div class="material-icons">person</div>
							<!-- <p>User Profile</p> -->
					</a></li>
				</ul>
				
			</div>
			
			
		</div>
		<div class="main-panel" id="insert-calendar"></div>
	</div>



</body>
<!--   Core JS Files   -->
<script src="../assets/js/core/jquery.min.js"></script>
<script src="../assets/js/core/popper.min.js"></script>
<script src="../assets/js/bootstrap-material-design.js"></script>
<script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
<!--  Charts Plugin, full documentation here: https://gionkunz.github.io/chartist-js/ -->
<script src="../assets/js/plugins/chartist.min.js"></script>
<!-- Library for adding dinamically elements -->
<script src="../assets/js/plugins/arrive.min.js" type="text/javascript"></script>
<!--  Notifications Plugin, full documentation here: http://bootstrap-notify.remabledesigns.com/    -->
<script src="../assets/js/plugins/bootstrap-notify.js"></script>
<!-- Material Dashboard Core initialisations of plugins and Bootstrap Material Design Library -->
<script src="../assets/js/material-dashboard.js?v=2.0.0"></script>
<!-- demo init -->
<script src="../assets/js/plugins/demo.js"></script>
<script type="text/javascript">
	$(document).ready(function() {

		demo.initDashboardPageCharts();

		demo.initCharts();
		$("#insert-calendar").load("/pages/fullcalendar.jsp");
	});

	$("#calendar-tab").click(function() {
		$("#insert-calendar").load("/pages/fullcalendar.jsp");
	});
			
</script>
</html>
