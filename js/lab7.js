$('.btn-info').click(function() {
  var ne = document.createElement("div");
  ne.innerHTML = document.getElementsByClassName('wrap')[0].innerHTML;
  document.body.appendChild(ne);
})
