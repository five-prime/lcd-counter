$(document).ready(function(){

display = 0;
  $('#increment').on('input', function(){
  display = parseInt(document.getElementById('increment').value);
if (display == 0){
  removeClass();
$('.a, .b, .one, .two, .m,.n,.seven,.eight').addClass('on');

}
else if(display == 1){
removeClass();
$('.four, .five, #athree, #btwo, #bthree, .m, .n, #cone,#ctwo,#cthree').addClass('on');

}
else if (display == 2){
removeClass();
$('.m, .n, #lone, #ltwo, #ktwo, #kthree, #jthree, #jfour, #ifour, #ifive, #hfive, #hsix, #gsix, #gseven, #fseven, #feight, #eseven, #eeight, #dseven, #deight, #cseven, #cone, #ctwo, #done, #dtwo, #ceight, #atwo, #athree, #afour, #afive, #asix, #aseven, .b').addClass('on');

}
else if (display == 3){
removeClass();
$('.a, .b, .m, .n, .g, .h').addClass('on');
$('.eight, .seven').each(function(){

  $(this).addClass('on');

});

}
else if (display == 4){
removeClass();
$('#aone, #bone, #atwo, #btwo, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo, .g, .h').addClass('on');

$('.eight, .seven').each(function(){

  $(this).addClass('on');

});

}
else if (display == 5){
$('*').removeClass('on');
$('.a, .b, .g, .h, .m, .n, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo, #ieight, #iseven, #jeight, #jseven, #keight, #kseven, #leight, #lseven ').addClass('on');
}
else if(display == 6){

removeClass();
$('.a, .b, .m, .n, .g, .h, #iseven, #ieight, #jseven, #jeight, #kseven, #keight, #leight, #lseven').addClass('on');
$('.one, .two').each(function(){

  $(this).addClass('on');

});
}
else if (display == 7){
  removeClass();
  $('.a, .b').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });
}
else if (display == 8){
  removeClass();
  $('.a, .b, .g, .h, .m, .n').addClass('on');
  $('.seven, .eight, .one, .two').each(function(){

    $(this).addClass('on');

  });
}
else if (display == 9){
  removeClass();
  $('.a, .b, .g, .h, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });
}
else if (display >= 10, display <= 19){
  removeClass();
  $('.four, .five, #athree, #btwo, #bthree, .m, .n, #cone,#ctwo,#cthree').addClass('on');

}
else if (display >= 20, display <=29){

  removeClass();
  $('.m, .n, #lone, #ltwo, #ktwo, #kthree, #jthree, #jfour, #ifour, #ifive, #hfive, #hsix, #gsix, #gseven, #fseven, #feight, #eseven, #eeight, #dseven, #deight, #cseven, #cone, #ctwo, #done, #dtwo, #ceight, #atwo, #athree, #afour, #afive, #asix, #aseven, .b').addClass('on');


}
else if (display >= 30, display <= 39){

  removeClass();
  $('.a, .b, .m, .n, .g, .h').addClass('on');
  $('.eight, .seven').each(function(){

    $(this).addClass('on');

  });

}
else if (display >= 40, display <= 49){

  removeClass();
  $('#aone, #bone, #atwo, #btwo, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo, .g, .h').addClass('on');

  $('.eight, .seven').each(function(){

    $(this).addClass('on');

  });

}

else if (display >= 50, display <= 59){

  $('*').removeClass('on');
  $('.a, .b, .g, .h, .m, .n, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo, #ieight, #iseven, #jeight, #jseven, #keight, #kseven, #leight, #lseven ').addClass('on');
  }

else if (display >= 60, display <=69){

  removeClass();
  $('.a, .b, .m, .n, .g, .h, #iseven, #ieight, #jseven, #jeight, #kseven, #keight, #leight, #lseven').addClass('on');
  $('.one, .two').each(function(){

    $(this).addClass('on');

  });


}
else if (display >= 70, display <= 79){

  removeClass();
  $('.a, .b').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });
}
else if (display >= 80, display <= 89){
  removeClass();
  $('.a, .b, .g, .h, .m, .n').addClass('on');
  $('.seven, .eight, .one, .two').each(function(){

    $(this).addClass('on');

  });

}
else if (display >= 90, display <= 99){

  removeClass();
  $('.a, .b, .g, .h, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });

}
else if (display == 100){

  removeClass();
$('.a, .b, .one, .two, .m,.n,.seven,.eight').addClass('on');

}
else{
console.log('else');

}

//define removeClass
function removeClass(){

$('*').removeClass('on');
}
});
});






//
// //column 1
//
// $('.one').each(function(){
//
//   $(this).addClass('on');
//
// });
