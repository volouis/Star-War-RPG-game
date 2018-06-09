
$(document).ready(function(){

    $(".charSel").attr("data-char", 0);
    $(".enimies").attr("data-char", 0);
    
    $(".charSel").on("click", function(){
        $(this).attr("data-char", 1);

        console.log($(this));

        $(".charSel").hide();
        $(".enimies").show();

        if($(this).attr("data-char") === "1"){
            $(this).show();
            if($(this).hasClass("btn1")){
                $("#enemy1").hide();
            }else if($(this).hasClass("btn2")){
                $("#enemy2").hide();
            }else if($(this).hasClass("btn3")){
                $("#enemy3").hide();
            }else if($(this).hasClass("btn4")){
                $("#enemy4").hide();
            }
        }
        // $(".charSel").hide($(this).attr("data-letter") === "0");
    })

    $(".enimies").on("click", function(){
        $(this).hide();
        $(this).attr("data-char", 1);
        if($(this).attr("data-char") === "1"){
            if($(this).hasClass("btn1")){
                $("#fight1").show();
            }else if($(this).hasClass("btn2")){
                $("#fight2").show();
            }else if($(this).hasClass("btn3")){
                $("#fight3").show();
            }else if($(this).hasClass("btn4")){
                $("#fight4").show();
            }
        }
    });

});