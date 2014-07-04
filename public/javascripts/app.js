var grid_id = window.location.pathname.split("/")[1]
var socket = io.connect('/'+grid_id);

socket.on('update', function (data) {
  document.getElementById(data.x + 'x' + data.y).style.backgroundColor="#"+data.rgb;
});
