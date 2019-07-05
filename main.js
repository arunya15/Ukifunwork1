

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {   SC.stream("/tracks/204799106",function(sound){
  $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

});

$(document).ready(function() {   SC.stream("/tracks/475197861",function(sound){
  $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

});$(document).ready(function() {   SC.stream("/tracks/237436326",function(sound){
  $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

});$(document).ready(function() {   SC.stream("/tracks/641888586",function(sound){
  $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

});$(document).ready(function() {   SC.stream("/tracks/641888586",function(sound){
  $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
       });
   });
