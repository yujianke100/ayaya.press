<?php
$link=new mysqli("localhost","root","1478963258","pageview");
function visitorcount(){
    global $link,$ip,$date;
    date_default_timezone_set('PRC');//设置时区，否则得到的时间不是北京时间
    $ip=$_SERVER["REMOTE_ADDR"];
    $date=date('Y-m-d H:i:s');
    // $url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
    // $ipinfo=json_decode(file_get_contents($url));
    // $country = $ipinfo->data->country;
    // $region=$ipinfo->data->region;
    // $city =$ipinfo->data->city;
    // $location=$country." ".$region." ".$city;
    // echo $location;

//然后插入数据库中：

    // $sql="insert into visitor values ('{$ip}','{$date}','{$country}','{$region}','{$city}')";
    $sql="insert into ip_time values ('{$ip}','{$date}')";
    mysqli_query($link, $sql);
} //该函数到此结束；
    visitorcount();
    $sql="select * from ip_time where ip='".$ip."'";
    $result = mysqli_query($link, $sql);
    $yourcount=mysqli_num_rows($result);
    $sql="select * from ip_time";
    $result = mysqli_query($link, $sql);
    $count=mysqli_num_rows($result);
    mysqli_close($link);
	echo "var count_num="."'$count';"; 
	echo "var yourcount_num="."'$yourcount';";  
	echo "var ip_num="."'$ip';";  
?>