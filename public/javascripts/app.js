var socket = io.connect('/');

socket.on('update', function (data) {
  document.getElementById(data.x + 'x' + data.y).style.backgroundColor="#"+data.rgb;
});
