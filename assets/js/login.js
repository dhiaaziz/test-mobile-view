
//prevent page resize when android soft keyboard opened
setTimeout(function () {
    let viewheight = $(window).height();
    let viewwidth = $(window).width();
    let viewport = document.querySelector("meta[name=viewport]");
    // alert("jalan");
    viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
}, 300);

//prevent caret to overflow
// var obj = document.getElementById('partitioned');
// obj.addEventListener("keydown", stopCarret);
// obj.addEventListener("keyup", stopCarret);

// function stopCarret() {
// if (obj.value.length > 3){
//   setCaretPosition(obj, 3);
// }
// }
//
// function setCaretPosition(elem, caretPos) {
//   if(elem != null) {
//       if(elem.createTextRange) {
//           var range = elem.createTextRange();
//           range.move('character', caretPos);
//           range.select();
//       }
//       else {
//           if(elem.selectionStart) {
//               elem.focus();
//               elem.setSelectionRange(caretPos, caretPos);
//           }
//           else
//               elem.focus();
//       }
//   }
// }


$(document).ready(function(){
  //blur after reach max length of otp input

  var maxLength = $('#partitioned').attr('maxlength');
  $('#partitioned').keyup(function(){
    var curLength = $(this).val().length;

    // console.log(curLength,maxLength);
    if (curLength >= maxLength){
      $(this).blur();
    }
  });

  //hide footer in case it pushed up when keyboard opened
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function(){
    if($(window).width() + $(window).height() != _originalSize){
      $('.footer').addClass('hidden-class');
    }else{
      $('.footer').removeClass('hidden-class');
    }
  });
});
