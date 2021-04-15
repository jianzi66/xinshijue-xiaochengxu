# xinshijue-xiaochengxu
微信小程序开发零基础入门+项目案例【新视觉实训】



案例上课笔记（有道云笔记）
	https://note.youdao.com/ynoteshare1/index.html?id=21ce35b9af6a2c001a984249ec6dab9c&type=notebook

尺寸大小？？？可以ps打开效果图，测量那部分尺寸

寻找项目素材？？

小程序api文档
	heightFix	
缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
		<image mode="heightFix" src=""></image>
	contact	
打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，具体说明 （小程序插件中不能使用）
	banner滚动指示点，颜色设置
		indicator-color
rgba(0, 0, 0, .3)
指示点颜色
			banner滚动指示点，颜色设置
		indicator-active-color
#000000	
当前选中的指示点颜色
		circular
是否采用衔接滑动
		autoplay
是否自动切换
			interval
5000
自动切换时间间隔
		<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" circular autoplay interval="4000">
	text
space	
显示连续空格
ensp 中文字符空格一半大小
	tabBar
底部 tab 栏的表现
		list
tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab	
			子主题 2
	image
		子主题 1
		子主题 2
	.psBoxConOne{color: #fff; 
display: flex;flex-wrap: wrap;
justify-content: center;}
		display:flex;
浮动模型
弹性盒对象
			flex;flex-wrap: wrap;
自动换行，
				justify-content: center;
在弹性盒对象的元素中的各项周围留有空白：
项目位于容器的中心。
	子主题 8
	子主题 9
	子主题 10
	子主题 11
reLaunch	对应 wx.reLaunch 的功能 ???
		wx.reLaunch(Object object)
基础库 1.1.0 开始支持，低版本需做兼容处理。

本接口从基础库版本 2.3.1 起支持在小程序插件中使用

关闭所有页面，打开到应用内的某个页面

在小程序插件中使用时，只能在当前插件的页面中调用
	子主题 12
时间戳转换成日期格式
		法一
			//时间戳转换成日期格式
        res.data.forEach(item=>{
          var time=item.posttime*1000
          var d = new Date(time);
          //var d=new Data(time); 
          var year=d.getFullYear();
          var month=(d.getMonth()+1)<10?"0"+(d.getMonth()+1):(d.getMonth()+1)
          var day=d.getDate()<10?"0"+d.getDate():d.getDate()
          //console.log(day)
          var posttime=year+"-"+month+"-"+day
          item.posttime=posttime

        })
		法二，封装js代码
			https://www.cnblogs.com/hellman/p/11007936.html
	子主题 13
		子主题 1

ctrl+"/"，行注释快捷键，微信开发工具，


       

        
