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
  $("#total").text(final)

}



// $("#1gb").click((event)=>{
//   total =0;
// total+=14 
// $("#total").text("£14")
// })

// $("#6gb").click((event)=>{
//   total = 0;
//   total+=18
//   $("#total").text("£18")
// })

//   $("#10gb").click((event)=>{
//     total+=20
//     $("#total").text("£20")
//     total =0;
//     })

    
//     $("#20gb").click((event)=>{
//       total =0;
//       total+=30
//       $("#total").text("£30")
//       })


//       $("#3").click((event)=>{
//       addtotal()
//         $("#total").text(finalV)
//         })

//   function addtotal(){
