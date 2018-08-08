<html>

	<head>
  		<title>PHP Test</title>
 	</head>

 	<body>

 		<h1>Pull user accounts</h1>

 		<?php 

			if ( isset($_POST['btn']) ) {
		         getUsersThisMonth();
		    }
		    
		    
		    if ( isset($_POST['btn2']) ) {
		    	makeUser();
		    }
		    
		    if ( isset($_POST['btn3']) ) {
		    	removeUser();
		    }
		    
		    function getUsersThisMonth() {
				$proxy = new SoapClient('http://unclesamshealthfood.com/api/v2_soap/?wsdl'); // TODO : change url
				$sessionId = $proxy->login('mitr_api', 'mitrgroup10'); // TODO : change login and pwd if necessary

				// Get master list of customers in an array
				$result = $proxy->customerCustomerList($sessionId);
				
				$monthCount = 0;
				$monthGrowth = 0;
				$lastMonthGrowth = 0;
				$lastMonth = date("Y-m", strtotime("-1 months"));
				$lastMonthCount = 0;

				// Loop through the list and count all users created this month and last month
				foreach ($result as $key => $value) {
					if ( strpos($value->created_at, date("Y-m")."-") !== false ) {
						//echo "$value->email - (created at: $value->created_at</br>";
						$monthCount += 1;
					}
					if ( strpos($value->created_at, $lastMonth."-") !== false ) {
						$lastMonthCount += 1;
					}
				}
				echo "Total new users this month: " . $monthCount . "</br>";
				$monthGrowth = ( $monthCount / count($result) ) * 100;
				$lastMonthGrowth = ( $monthCount / $lastMonthCount ) * 100;
				echo "Total user growth this month: " . (int)$monthGrowth  . "%</br>";
				echo "User growth since last month: " . (int)$lastMonthGrowth . "%</br>";
				$proxy->endSession($sessionId);
		    }
		    
		    
		    function makeUser() {
		    	$proxy = new SoapClient('http://unclesamshealthfood.com/api/v2_soap/?wsdl'); // TODO : change url
				$session = $proxy->login('mitr_api', 'mitrgroup10'); // TODO : change login and pwd if necessary
				
				$result = $proxy->customerCustomerCreate($session, array('email' => 'ryfistoman@gmail.com', 'firstname' => 'Dough', 'lastname' => 'Deeks', 'password' => 'password', 'website_id' => 1, 'store_id' => 1, 'group_id' => 1));

		    	//var_dump($result);
		    	echo "New User ID is: " . $result;
		    	$proxy->endSession($session);

		    }
		    
		    function removeUser() {
		    	$proxy = new SoapClient('http://unclesamshealthfood.com/api/v2_soap/?wsdl'); // TODO : change url
				$session = $proxy->login('mitr_api', 'mitrgroup10'); // TODO : change login and pwd if necessary
				
				$result = $proxy->customerCustomerDelete( $session, '599' );
				$proxy->endSession($session);
				var_dump($result);
		    }

		?>

		<form id="form1" name="form1" method="post" action="">
			<input type="submit" name="btn" id="btn" value="Get Users" />
		</form>
		
		<form id="form2" name="form2" method="post" action="">
			<input type="submit" name="btn2" id="btn2" value="Add User" />
		</form>
		
		<form id="form3" name="form3" method="post" action="">
			<input type="submit" name="btn3" id="btn3" value="Delete User" />
		</form>

 		
 	</body>

</html>
