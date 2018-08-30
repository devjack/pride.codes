addLoadEvent(insert)

function addLoadEvent(func) {
  if (window.addEventListener)
    window.addEventListener("load", func, false);
  else if (window.attachEvent)
    window.attachEvent("onload", func);
  else { // fallback
    var old = window.onload;
    window.onload = function() {
      if (old) old();
      func();
    };
  }
}


function insert() {

  var corner = '<a target="_blank" href="http://wearitpurple.org" class="pridecodes-purple-code-corner" style="position: fixed;z-index: 9999;top: 0;border: 0;right: 0;"> 	<svg width="148px" height="149px" viewBox="0 0 148 149" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 		<g id="Purple-Corner"> 			<polygon id="Path-2" fill="#9D61A4" points="148 -1.42108547e-14 0 -1.42108547e-14 148 149"> 			</polygon> 			<path d="M86.263135,26.9333565 L86.263135,39.8069098 L80.5586862,39.8069098 L80.5586862,21.2289077 L99.1366883,21.2289077 L99.1752319,26.8948129 L92.6228245,26.8948129 L86.263135,26.9333565 Z M122.879897,33.6660016 L127.505126,38.2912304 L87.9208764,55.1347718 L83.2956476,50.509543 L122.879897,33.6660016 Z M122.145428,62.8156493 L122.183971,56.4559598 L122.183971,49.9035524 L127.849877,49.942096 L127.849877,68.5200981 L109.271874,68.5200981 L109.271874,62.8156493 L122.145428,62.8156493 Z" id="Overlay" fill="#FFFFFF" fill-rule="nonzero"> 			</path> 		</g> 	</svg> </a> ';

  var css =
  '@media only screen and (min-width: 768px) {' +
  '#pridecodes-purple-code-corner {width: 100px;}' +
  '} @media only screen and (max-width: 767px) {' +
  '#pridecodes-purple-code-corner {width: 50px;}' +
  '}' +
  '#pridecodes-purple-code-corner { animation: enterIn 2s; }' +
  '@keyframes enterIn {0% {opacity: 0;}100% {opacity: 100;}}' +
  '#pridecodes-purple-code-corner { transition: all .2s ease-in-out; }' +
  '#pridecodes-purple-code-corner:hover { transform: scale(1.1); transform-origin:right top;}';

  var style = document.createElement('style');
  style.innerHTML = css;

  document.body.insertAdjacentHTML( 'beforeEnd', corner );
  document.body.appendChild(style);

}
