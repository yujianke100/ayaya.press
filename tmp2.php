<?php
        global $link;
        date_default_timezone_set('PRC');//设置时区，否则得到的时间不是北京时间
        $ip=$_SERVER["REMOTE_ADDR"];
        $date=date('Y-m-d H:i:s');
        $url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
        $ipinfo=json_decode(file_get_contents($url));
        $country = $ipinfo->data->country;
        $region=$ipinfo->data->region;
        $city =$ipinfo->data->city;
        $location=$country.$region.$city;

    if(!file_exists("count.txt")){
        $one_file=fopen("count.txt","w+"); //建立一个统计文本，如果不存在就创建
        fwrite("count.txt","1");  //把数字1写入文本
        fclose("$one_file");
     }else{ //如果不是第一次访问直接读取内容，并+1,写入更新后再显示新的访客数
        $num=file_get_contents("count.txt");
        $num++;
        file_put_contents("count.txt","$num");
        $newnum=file_get_contents("count.txt");
    }
    echo"您是第<font color='red'><b>".$newnum."</b></font>位访客，您的IP：".$ip." 您的位置：".$location;
?>