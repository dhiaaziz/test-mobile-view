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

//blur after reach max length of otp input
$(document).ready(function(){
  var maxLength = $('#partitioned').attr('maxlength');
  $('#partitioned').keyup(function(){
    var curLength = $(this).val().length;

    // console.log(curLength,maxLength);
    if (curLength >= maxLength){
      $(this).blur();
    }
  });

  // console.log(maxLength);
});
