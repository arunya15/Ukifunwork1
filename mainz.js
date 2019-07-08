

SC.initialize({
//  client_id: '340f063c670272fac27cfa67bffcafc4'
client_id: '340f063c670272fac27cfa67bffcafc4'
});

//$(document).ready(function() {   SC.stream("/tracks/181294675",function(sound){

  $(document).ready(function() {
     SC.stream("/tracks/212104562",function(sound){

  $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
});
  SC.stream("/tracks/475197861",function(sound){
  $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
});

   SC.stream("/tracks/237436326",function(sound){
  $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
});
});
