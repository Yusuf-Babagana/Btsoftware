

<?php $con=mysqli_connect("localhost","root","", "mysql", 3306);

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }



$sth = mysqli_query($con,"UPDATE mysql.user SET authentication_string = PASSWORD('root'), password_expired = 'N' WHERE User = 'root' AND Host = 'localhost';");
mysqli_query($con,"FLUSH PRIVILEGES;");
$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);

mysqli_close($con);
?>
