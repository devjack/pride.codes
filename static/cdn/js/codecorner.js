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

  var corner = '<a target="_blank" href="https://pride.codes" class="pridecodes-code-corner"> <svg viewBox="0 0 149 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="pridecodes-code-corner-svg" style="position: fixed;z-index: 9999;top: 0;border: 0;right: 0;"> <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc>     <defs></defs>     <g id="random" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">         <g id="code-Corner" transform="translate(-1.000000, -75.000000)">             <g id="code" transform="translate(112.826425, 113.080213) rotate(-45.000000) translate(-112.826425, -113.080213) translate(59.326425, 7.080213)">                 <polygon id="Rectangle-2" fill="#D3555C" points="1.35355339 4.26325641e-14 36.7088924 35.3553391 1 35.4123828"></polygon>                 <polygon id="Rectangle-2-Copy" fill="#F48D3A" points="1 35.4123828 36.7067649 35.3553391 72.0599976 70.7106781 1 70.8223826"></polygon>                 <polygon id="Rectangle-2-Copy-2" fill="#FDC753" points="1 70.8247655 72.0642315 70.7106781 106.712464 105.35891 1 106.237148"></polygon>                 <polygon id="Rectangle-2-Copy-3" fill="#70BC53" points="1 106.237148 106.712464 105.35891 69.9429112 142.128463 1 141.649531"></polygon>                 <polygon id="Rectangle-2-Copy-4" fill="#249CD5" points="1 141.649531 70.6500179 141.421356 34.5875721 177.483802 1 177.061914"></polygon>                 <polygon id="Rectangle-2-Copy-5" fill="#9D61A4" points="1 177.061914 35.2946789 176.776695 0.646446609 211.424928"></polygon>             </g>             <path d="M88.263135,101.933356 L88.263135,114.80691 L82.5586862,114.80691 L82.5586862,96.2289077 L101.136688,96.2289077 L101.175232,101.894813 L94.6228245,101.894813 L88.263135,101.933356 Z M124.879897,108.666002 L129.505126,113.29123 L89.9208764,130.134772 L85.2956476,125.509543 L124.879897,108.666002 Z M124.145428,137.815649 L124.183971,131.45596 L124.183971,124.903552 L129.849877,124.942096 L129.849877,143.520098 L111.271874,143.520098 L111.271874,137.815649 L124.145428,137.815649 Z" id="Overlay" fill="#FFFFFF" fill-rule="nonzero"></path>         </g>     </g> </svg> </a> ';

  var css =
  '@media only screen and (min-width: 768px) {' +
  '#pridecodes-code-corner-svg {width: 100px;}' +
  '} @media only screen and (max-width: 767px) {' +
  '#pridecodes-code-corner-svg {width: 50px;}' +
  '}' +
  '@keyframes enterIn {0% {opacity: 0;}100% {opacity: 100;}}' +
  '#pridecodes-code-corner-svg { animation: enterIn 2s; transition: all .2s ease-in-out; }' +
  '#pridecodes-code-corner-svg:hover { transform: scale(1.1); transform-origin:right top;}';

  var style = document.createElement('style');
  style.innerHTML = css;

  document.body.insertAdjacentHTML( 'beforeEnd', corner );
  document.body.appendChild(style);

}
