// console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady);

function onReady() {

     // Listeners / Handlers
  $('#red-btn').on("click", makeRedblock) 
  $('#blue-btn').on("click", makeBlueblock) 
  $('#green-btn').on("click", makeGreenblock) 
  $('#yellow-btn').on("click", makeYellowblock) 

$('#blocks').on('click', '.block.red-fill', deleteRedblock)
$('#blocks').on('click', '.block.blue-fill', deleteBlueblock)
$('#blocks').on('click', '.block.green-fill', deleteGreenblock)
$('#blocks').on('click', '.block.yellow-fill', deleteYellowblock)

$('block-counts').on('click', "red-count", addOne)
}

function makeRedblock() {
    console.log("🟥")
    $('#blocks').append(`
      <div class="block red-fill"></div>
    `);
  }

  function makeBlueblock() {
    console.log("🟦")
    $('#blocks').append(`
      <div class="block blue-fill"></div>
    `);
  }

  function makeGreenblock() {
    console.log("🟩")
    $('#blocks').append(`
      <div class="block green-fill"></div>
    `);
  }

  function makeYellowblock() {
    console.log("🟨")
    $('#blocks').append(`
      <div class="block yellow-fill"></div>
    `);
  }

  //function deleteRedblock() {
    $(this).remove()
    console.log($(this))
//}

 // function deleteBlueblock() {
    $(this).remove()
    console.log($(this))
 //}
  // function deleteGreenblock() {
    $(this).remove()
    console.log($(this))
//}

 // function deleteYellowblock() {
    $(this).remove()
    console.log($(this))
//}



$('#red-count').text(addOne); 

function addOne() {
  $('#red-count')+ 1
}