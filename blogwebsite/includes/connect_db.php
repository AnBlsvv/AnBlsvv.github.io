<?php 

$connection = mysqli_connect(
	$config['db']['server'],
	$config['db']['username'],
	$config['db']['password'],
	$config['db']['name']
);

if ($connection == false) {
 	echo 'can`t connect to database';
 	echo mysqli_connect_error();
 	exit();
} 