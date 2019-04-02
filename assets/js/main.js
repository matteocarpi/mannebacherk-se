// Mobile Menu
function burger(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 200vw 200vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
}

function quit(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 32px 32px';
  links.style.display = 'none';
  quit.style.display = 'none';
}
// Facebook Embed
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2"></script>
