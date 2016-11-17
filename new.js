function removeClass(){

$('*').removeClass('on');
};
//ones place
function zero(){
$('.a, .b, .one, .two, .m, .n, .seven,.eight').addClass('on');

}
function one(){
$('.four, .five, #athree, #btwo, #bthree, .m, .n, #cone, #ctwo' ).addClass('on');

};

function twoFirst(){

  $('.m, .n, #lone, #ltwo, #ktwo, #kthree, #jthree, #jfour, #ifour, #ifive, #hfive, #hsix, #gsix, #gseven, #fseven, #feight, #eseven, #eeight, #dseven, #deight, #cseven, #cone, #ctwo, #done, #dtwo, #ceight, #atwo, #athree, #afour, #afive, #asix, #aseven, .b').addClass('on');
};
function three(){};
function four(){};
function five(){};
function six(){};
function seven(){};
function eight(){};
function nine(){};
//tens place


  function zeroTwo(){

    $('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

  };

  function oneTwo(){

    $('.four, .five, #athree, #btwo, #bthree, .m, .n, #cone, #ctwo, #cthree').addClass('on');

  };
  function twoTwo(){


  };
  function threeTwo(){};
  function fourTwo(){};
  function fiveTwo(){};
  function sixTwo(){};
  function sevenTwo(){};
  function eightTwo(){};
  function nineTwo(){};

$(document).ready(function(){

  // //define removeClass




display = 0;
secdisplay = 0;

//event listener for change in increment input
$('#increment').on('input', function(){

//assign display to the value of increment
var display = parseInt(document.getElementById('increment').value);

if (display == 0){
  removeClass();
  zero();
  zeroTwo();


}
else if(display == 1){
removeClass();
zeroTwo();
oneTwo();


}
else if (display == 2){
removeClass();
zeroTwo();
twoFirst();


}
else if (display == 3){
  removeClass();
  $('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

$('.a, .b, .m, .n, .g, .h').addClass('on');
$('.eight, .seven').each(function(){

  $(this).addClass('on');

});

}
else if (display == 4){
  removeClass();
  $('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

$('#aone, #bone, #atwo, #btwo, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo, .g, .h').addClass('on');

$('.eight, .seven').each(function(){

  $(this).addClass('on');

});

}
else if (display == 5){
$('*').removeClass('on');
$('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

$('.a, .b, .g, .h, .m, .n, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo, #ieight, #iseven, #jeight, #jseven, #keight, #kseven, #leight, #lseven ').addClass('on');
}
else if(display == 6){

  removeClass();
  $('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

$('.a, .b, .m, .n, .g, .h, #iseven, #ieight, #jseven, #jeight, #kseven, #keight, #leight, #lseven').addClass('on');
$('.one, .two').each(function(){

  $(this).addClass('on');

});
}
else if (display == 7){
  removeClass();
  $('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

  $('.a, .b').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });
}
else if (display == 8){
  removeClass();
  $('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

  $('.a, .b, .g, .h, .m, .n').addClass('on');
  $('.seven, .eight, .one, .two').each(function(){

    $(this).addClass('on');

  });
}
else if (display == 9){
removeClass();
$('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');

  $('.a, .b, .g, .h, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });
}

else{
console.log('else');

};
});
});
