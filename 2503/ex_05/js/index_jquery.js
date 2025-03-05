//sec1
$(document).ready(function() {
    $('span').click(function() {
        $(this).hide();
    });
});
//sec2
$(document).ready(function() {
    $('button').click(function () {
        $('#p1, #p2').hide();
    });
});
// $(document).ready(function() {
//     $('button').click(function () {
//         $('#p1').hide();
//     });
// });

//sec3
$(document).ready(function(){
    $("button").click(function(){
      $("p").hide(1000);
    });
});