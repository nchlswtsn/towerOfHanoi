function init(){
  $('.col-md-4').click(moveDisc);
}
var selectedDiv = [];

function moveDisc(event){
  if (selectedDiv.length === 1){
    var smaller = $(this).children().first().children().attr("value");
    var larger = selectedDiv.attr('value');
    if (smaller > larger){
      $(this).children().prepend(selectedDiv);
      $('.selected').removeClass('selected');
      selectedDiv = [];
    }else if ($(this).children().first().children().length === 0) {
      $(this).children().prepend(selectedDiv);
      $('.selected').removeClass('selected');
      selectedDiv = [];
    }
  }else{
    $(this).children().children().first().addClass('selected');
    selectedDiv = $(this).children().children().first().clone();
    $('.selected').remove();
  }
  checkWin();
}

function checkWin(){
  if ($('#rightTower').children().first().children().length === 3){
    alert("WINNER!");    
  }
}

$(document).ready(init);
