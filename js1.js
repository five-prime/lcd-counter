$(document).ready(function(){
display = 0;
secdisplay = 0;
//event listener for change in increment input
$('#increment').on('input', function(){
//assign input to the value of increment
var display = parseInt(document.getElementById('increment').value);

if (display == 0){
  removeClass();
$('.a, .b, .one, .two, .m, .n, .seven,.eight').addClass('on');
$('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');


}
else if(display == 1){
removeClass();
$('.four, .five, #athree, #btwo, #bthree, .m, .n, #cone, #ctwo, #cthree').addClass('on');
$('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');


}
else if (display == 2){
removeClass();
$('.m, .n, #lone, #ltwo, #ktwo, #kthree, #jthree, #jfour, #ifour, #ifive, #hfive, #hsix, #gsix, #gseven, #fseven, #feight, #eseven, #eeight, #dseven, #deight, #cseven, #cone, #ctwo, #done, #dtwo, #ceight, #atwo, #athree, #afour, #afive, #asix, #aseven, .b').addClass('on');
$('.seca, .secb, .secone, .sectwo, .secm, .secn, .secseven,.seceight').addClass('on');


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
else if (display = 10, display <= 19){
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
removeClass();
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


  $('.a, .b, .g, .h, #cone, #ctwo, #done, #dtwo, #eone, #etwo, #fone, #ftwo').addClass('on');
  $('.seven, .eight').each(function(){

    $(this).addClass('on');

  });

}
else{
console.log('else');

};
//

// if (secdisplay <=9, secdisplay <= 0){
// //ZERO
//
//
// }
// else if(secdisplay >= 20, secdisplay <= 28){
//
// $('.secfour, .secfive, #secathree, #secbtwo, #secbthree, .secm, .secn, #seccone,#secctwo,#seccthree').addClass('on');
//
// }
// else if (secdisplay == 2){
//
// $('.secm, .secn, #seclone, #secltwo, #secktwo, #seckthree, #secjthree, #secjfour, #secifour, #secifive, #sechfive, #sechsix, #secgsix, #gseven, #fseven, #feight, #eseven, #eeight, #dseven, #deight, #cseven, #cone, #ctwo, #done, #dtwo, #ceight, #atwo, #athree, #afour, #afive, #asix, #aseven, .b').addClass('on');
//
// }
// else if (secdisplay == 3){
//
// $('.seca, .secb, .secm, .secn, .secg, .sech').addClass('on');
// $('.seceight, .secseven').each(function(){
//
//   $(this).addClass('on');
// sec
// });
//
// }
// else if (secdisplay == 4){
//
// $('#secaone, #secbone, #secatwo, #secbtwo, #seccone, #secctwo, #secdone, #secdtwo, #seceone, #secetwo, #secfone, #secftwo, .secg, .sech').addClass('on');
//
// $('.seceight, .secseven').each(function(){
//
//   $(this).addClass('on');
//
// });
//
// }
// else if (secdisplay == 5){
// $('*').removeClass('on');
// $('.seca, .secb, .secg, .sech, .secm, sec.n, #seccone, #secctwo, #secdone, #secsecdtwo, #seceone, #secetwo, #secfone, #secftwo, #secieight, #seciseven, #secjeight, #secjseven, #seckeight, #seckseven, #secleight, #seclseven ').addClass('on');
// }
// else if(secdisplay == 6){
//
//
// $('.seca, .secb, .secm, .secn, .secg, .sech, #seciseven, #secieight, #secjseven, #secjeight, #seckseven, #seckeight, #secleight, #seclseven').addClass('on');
// $('.secone, .sectwo').each(function(){
//
//   $(this).addClass('on');
//
// });
// }
// else if (secdisplay == 7){sec
//
//   $('.seca, .secb').addClass('on');
//   $('.secseven, .seceight').each(function(){
//
//     $(this).addClass('on');
//
//   });
// }
// else if (secdisplay == 8){
//
//   $('.seca, .secb, .secg, .sech, .secm, .secn').addClass('on');
//   $('.secseven, .seceight, .secone, .sectwo').each(function(){
//
//     $(this).addClass('on');
//
//   });
// }
// else if (secdisplay == 9){
//
//   $('.seca, .secb, .secg, .sech, #seccone, #secctwo, #secdone, #secdtwo, #seceone, #secetwo, #secfone, #secftwo').addClass('on');
//   $('.secseven, .seceight').each(function(){
//
//     $(this).addClass('on');
//
//   });
// }
//
//
//
// else{
// console.log('else');
//
// }
// //define removeClass
function removeClass(){

$('*').removeClass('on');
}
});


});



//   $('#increment').on('input', function(){
//     var display = parseInt(document.getElementById('increment').toString());
//     var digits = (display).toString(2).split("").map(function(t){return parseInt(t)})
//     var firstPlace = digits[0];
//     var secondPlat = digits[1];
//     console.log(digits[firstPlace]);
// });
