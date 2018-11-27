<?php
/**
* 通过淘宝IP接口获取IP地理位置
* @param string $ip
* @return: string
**/
function getCity($ip)
{
$url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
$ipinfo=json_decode(file_get_contents($url));
if($ipinfo->code=='1'){
return false;
}
$city = $ipinfo->data->region.$ipinfo->data->city;
return $city;
}
header("Content-type:text/html;charset=utf-8");
// 这样调用，显示山东省临沂市
var_dump(getCity("112.234.69.189"));
?>