# ayaya.press
我的个人网站源码
<br>

### 俩temp.php：
是废弃物，不过我想保留源码，就没删。
<br>

### temp_index.php：
啊，忘记改名字了。。。嫌麻烦也不改了。主要是拿来统计点击量的。逻辑是每次有人访问，就记录他的时间和IP。统计总IP给出总点击量；
统计当前IP的数量，给出访问次数
<br>

## 啊，放上来的话，其实就把里面的彩蛋公开了，hhh

./sukima文件夹里的就是彩蛋。大致就是个B站视频+setu+留言板。

### mysql：
* pageview
  * ip_time
    * ip
    * date
  * comments
    * id(key,自增)
    * user
    * email(可空)
    * comment
    * addtime
