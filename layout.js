function darkmode(){
    
    if ($("body").attr("class") == "dark") {
        $("body").attr("class","light");
    }else{
        $("body").attr("class","dark");
    }
}

function animationattack(player){
    
    $(".player[data-player="+player+"] .img-player").attr("data-action","bate");
    setTimeout(() => {  $(".player[data-player="+player+"] .img-player").attr("data-action","unknown"); }, 200);
}

function animationattack2(player){
    
    $(".player[data-player="+player+"] .img-player").attr("data-action","bate2");    
    setTimeout(() => {  $(".player[data-player="+player+"] .img-player").attr("data-action","unknown"); }, 200);
}

function animationheal(player){
    
    $(".player[data-player="+player+"] .img-player").attr("data-action","abaixa");
    setTimeout(() => {  $(".player[data-player="+player+"] .img-player").attr("data-action","unknown"); }, 200);
}

function animationattack3(player){
    
    $(".player[data-player="+player+"] .img-player").attr("data-action","bate3");    
    setTimeout(() => {  $(".player[data-player="+player+"] .img-player").attr("data-action","unknown"); }, 200);
}

function move1(player){

    var hp = $(".player[data-player="+player+"] .hp");
    if (Math.ceil(Math.random()*100) < 90){
        hp.attr('value', Number(hp.attr('value')) - 10);
    }
   
    animationattack(-Number(player)+3);
    turn(-Number(player)+3);
    
    if ( Number(hp.attr('value')) < 1){
        win(-Number(player)+3);
    }
}

function move2(player){

    var hp = $(".player[data-player="+player+"] .hp");
    if (Math.ceil(Math.random()*100) < 95){
        hp.attr('value', Number(hp.attr('value')) + 15);
    }

    animationheal(player);
    turn(player);
    
}

function move3(player){

    var hp = $(".player[data-player="+player+"] .hp");

    if (Math.ceil(Math.random()*100) < 50){
        hp.attr('value', Number(hp.attr('value')) - 20);
    }
    
    animationattack2(-Number(player)+3);
    turn(-Number(player)+3);
    
    if ( Number(hp.attr('value')) < 1){
        win(-Number(player)+3);
    }
    
}

function move4(player){

    var hp = $(".player[data-player="+player+"] .hp");

    if (Math.ceil(Math.random()*100) < 5){
        hp.attr('value', Number(hp.attr('value')) - 100);
    }

    animationattack3(-Number(player)+3);
    turn(-Number(player)+3);
    
    if ( Number(hp.attr('value')) < 1){
        win(-Number(player)+3);
    }
    
}

function win(player){
    $("#winner").attr("class","win");
    $("#winner img").attr("src", $(".player[data-player="+player+"] img").attr("src") ) ;
    //$("#campeao").insertAdjacentText("afterend", "texte" ) ;
    //$("#winner p").innerHtml('  $(".player[data-player="+player+"] .name").attr("data-name") ') ;
    var texto = $('.player[data-player='+player+'] .name').attr("data-name");    
    $('#campeao').append( texto );    
    
}

function reload(){
    location.reload()
}

function turn(player){

    if(player == 1){        
        $("#turn").attr("class","left");
    }else if(player == 2){        
        $("#turn").attr("class","right");
    }else{
        player = Math.floor(Math.random() * 2) + 1;
        turn(player);
    }
}
