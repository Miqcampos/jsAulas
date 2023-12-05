var caixa = $("#caixa");

$("#animacao1").on('click', function(){

    caixa.animate({width : "500px", height : "500px", borderRadius : "100%"});

});

$("#animacao2").on('click', function(){

    caixa.animate({width : "300px", height : "300px", borderRadius : "0%"}).
    animate({marginLeft : "300px", rotate : "360deg"});

});

$("#animacao3").on('click', function(){

    caixa.animate({margin : "0px", rotate : "-360deg"}, {duration : 1000});

});

$("#animacao4").on('click', function(){

    caixa.animate({margin : "100px", width : "600px", height : "600px"}, {complete : () => {alert("Me contra!! Por favor ;-;")}});

});

$("#animacao5").on('click', function(){

    // caixa.hide(500);
    caixa.slideUp(500);
    // caixa.fadeOut(500);

});

$("#animacao6").on('click', function(){

    // caixa.show(500);
    caixa.slideDown(500);
    // caixa.fadeIn(500);

});

$("#animacao7").on('click', function(){

    // caixa.fadeToggle(500);
    caixa.slideToggle(500);

});

$("#animacao8").on('click', function(){

    caixa.css("transition","1s");
    caixa.css("backgroundColor","red");
    $("img").attr("src","https://th.bing.com/th/id/R.7c198ed4b20c5fce27bc159a87e43455?rik=lifTPebVyt9hLQ&pid=ImgRaw&r=0");
    $("img").attr("width","300px");
    $("#teste").attr("placeholder","Mensagem legal");

});