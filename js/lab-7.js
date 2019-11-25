$('.btn-info').click(function() {
  var ne = document.createElement("form");
  ne.innerHTML = document.getElementsByClassName('wrap')[0].innerHTML;
  document.body.appendChild(ne);

});
$('.btn-danger').click(function() {
  var del = document.getElementsByTagName('form')[1];
  if (document.getElementsByTagName('form').length > 1){
      document.body.removeChild(del);
  }
  else{
    ;
  }
});

  $('.btn-outline-danger').click(function() {
    var deli = document.getElementsByTagName('input');
    var le = deli.length;
    for (var i=0; i<le; i++) {
      deli[i].value = "";
    }
  });
