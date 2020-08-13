
  
$(window).scroll(function () {
        
    if ($(this).scrollTop() >= 1000) {
        
        $('#scroll-top').show();
        
    } else {
        
        $('#scroll-top').hide();
    }
});


//nice scroll
// $("html").niceScroll();
    
// $('.carousel').carousel({
    
//     interval: 6000
    
// });


  // Click On Button To Scroll Top
    
  $('#top').click(function () {
        alert('nfn');
    $("html,body").animate({ scrollTop : 0 }, 600);
    
});

$('#test').click(function(){
    alert('test')
}
)
