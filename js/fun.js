$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


$('.collapse').click( (e)=> collapse());


var total = 0 
let newt = 0
let final = 0 


$("#myForm1").change(function(){
  console.log("hello")
   
  if ($('input[value = 14]').prop('checked')){
    total = 14;
    console.log("hello")
  }
  else if ($('input[value = 18]').prop('checked')){
    total =18;
  }
  else if ($('input[value = 20]').prop('checked')){
    total =20;
  }
  else if ($('input[value = 30]').prop('checked')){
    total =30;
  }
  caltotal();


});

$("#myForm2").change(function(){
  

  if ($('input[value = 3]').prop('checked')){
      newt= 3
  }
  if ($('input[value = 5]').prop('checked')){
    newt= 5 
  
  }
  if ($('input[value = 10]').prop('checked')){
    newt =10 ;
  }
  if ($('input[value = 12]').prop('checked')){
    newt =12 ;
  }

  caltotal();

});

function caltotal(){
  final = newt + total
  $("#total").text(final);
}



// calculator for family pack 
let total1= 0 

//one pack

$("#myForm3").change(function(){
  
  $("#total_header").text("Overview")


  if ($('input[value = 14]').prop('checked')){
    total1 = 14;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£168 per year")


  }
  else if ($('input[value = 20]').prop('checked')){
    total1 =20;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£240 per year")
  }
  else if ($('input[value = 30]').prop('checked')){
    total1 =30;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£360 per year")
  }
  else if ($('input[value = 40]').prop('checked')){
    total1 =40;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£480 per year")
  }
  caltotal1();


});


$("#myForm4").change(function(){
   
  if ($('input[value = 21]').prop('checked')){
    total1 = 21.50;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£258 per year")    

  }
  else if ($('input[value = 32]').prop('checked')){
    total1 =32;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£384 per year")   
  }
  else if ($('input[value = 50]').prop('checked')){
    total1 =50;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£600 per year")   
  }
  else if ($('input[value = 68]').prop('checked')){
    total1 =68;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£816 per year")   
  }
  caltotal1();


});

$("#myForm5").change(function(){
   
  if ($('input[value = 28]').prop('checked')){
    total1 = 28.40;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£28.40 per month")
    $("#yearly").text("£340.80 per year")    

  }
  else if ($('input[value = 44]').prop('checked')){
    total1 =44;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£528 per year")   
  }
  else if ($('input[value = 70]').prop('checked')){
    total1 =70;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£840 per year")   
  }
  else if ($('input[value = 96]').prop('checked')){
    total1 =96;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£1152 per year")   
  }
  caltotal1();


});

$("#myForm6").change(function(){
   
  if ($('input[value = 35]').prop('checked')){
    total1 = 35.60;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£35.60 per month")
    $("#yearly").text("£427.20 per year")    

  }
  else if ($('input[value = 56]').prop('checked')){
    total1 =56;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£627 per year")   
  }
  else if ($('input[value = 90]').prop('checked')){
    total1 =90;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£1080 per year")   
  }
  else if ($('input[value = 124]').prop('checked')){
    total1 =124;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£1488 per year")   
  }
  caltotal1();


});


$("#myForm7").change(function(){
   
  if ($('input[value = 42]').prop('checked')){
    total1 = 42.80;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£42.80 per month")
    $("#yearly").text("£513.60 per year")    

  }
  else if ($('input[value = 682]').prop('checked')){
    total1 =68;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£816 per year")   
  }
  else if ($('input[value = 110]').prop('checked')){
    total1 =110;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£1320 per year")   
  }
  else if ($('input[value = 152]').prop('checked')){
    total1 =152;
    $("#overview").text("Price per month:" + total1 )
    $("#monthly").text("£"+total1+" "+ "per month")
    $("#yearly").text("£1824 per year")   
  }
  caltotal1();


});

