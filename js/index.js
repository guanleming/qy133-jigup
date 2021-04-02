//点击登录让遮罩层显示 登录框显示

$('.clk-login').click(function(){
    $('.login-zz, .login').fadeIn(1000);
})
$('#closeOff').click(function(){
    $('.login-zz, .login').fadeOut(1000);
})


$('.header-list>ul>li').click(function(){
    // console.log(11)
    // console.log(this)
 
    
  $(this).addClass('active').siblings().removeClass('active')
  
})


$(".shoye").click(function(){
    console.log(111)
    $.get("http://192.168.31.254:3000/useing/public",
    {

    },
  
    function(data){
      console.log(data)
    });
  });


