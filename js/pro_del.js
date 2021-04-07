//加载更多

    var timer_5 = null;
    $('.main_more_g>p').on('click',function(){
        console.log(1112);
        clearTimeout(timer_5);
        $(this).removeClass().addClass("main_loding_g");
        $(this).text('正在加载>>>>');
        timer_5 = setTimeout(function(){
            $(".main_more_g>p").removeClass().addClass('nomain_loading_g');
            $('.main_more_g>p').text('点击加载更多');
            more_again();
            console.log(11);
        },2000)
    })

function more_again(){
    ajax({
        type:"get",
        url:"http://192.168.31.254:3000/play/new",
        success: function (res) {
            console.log(res);
            var more_one = doT.template(document.getElementById("index_more_duo").innerText);
            var old = $('.index_certer_mo').html();
            $('.index_certer_mo').html(old + more_one(res[parseInt(Math.random() * 4)]));
        },
    })
}