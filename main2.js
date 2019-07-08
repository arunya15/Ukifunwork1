
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
  SC.stream('/tracks/9261920',function(sound){

       $("#start1").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop1").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});

  SC.stream('/tracks/583641381',function(sound){

       $("#start2").click(function(e){
              e.preventDefault();
              sound.start();
             });


              $("#stop2").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});

//button2
$(document).ready(function() {
  SC.stream('',function(sound){

       $("#start3").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop3").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});

//button3
$(document).ready(function() {
  SC.stream('/tracks/568198284',function(sound){

       $("#start4").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop4").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});


//button4
$(document).ready(function() {
  SC.stream('/tracks/568198284',function(sound){

       $("#start5").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop5").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});

//button5

$(document).ready(function() {
  SC.stream('/tracks/301161123',function(sound){

       $("#start6").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop6").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});


//button6

$(document).ready(function() {
  SC.stream('',function(sound){

       $("#start6").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop6").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});

//button7

$(document).ready(function() {
  SC.stream('',function(sound){

       $("#start7").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop7").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});


//button8

$(document).ready(function() {
  SC.stream('/tracks/175651162',function(sound){

       $("#start").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});


//button9

$(document).ready(function() {
  SC.stream('/tracks/568198284',function(sound){

       $("#start9").click(function(e) {
              e.preventDefault();
              sound.start();
             });


              $("#stop9").click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
});
});
