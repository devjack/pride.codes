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

    

  var corner = '<a target="_blank" href="https://pride.codes/thanks" class="pridecodes-voteyes-corner" aria-label="Vote Yes"> <svg viewBox="0 0 150 149" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="pridecodes-voteyes-left-corner-svg" style="position: fixed;top: 0;border: 0;left: 0;><g id="corner-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="top-left" transform="translate(38.000000, 37.000000) rotate(-90.000000) translate(-38.000000, -37.000000) translate(-75.000000, -76.000000)"><g id="Group" transform="translate(112.826425, 113.080213) rotate(-45.000000) translate(-112.826425, -113.080213) translate(59.326425, 7.080213)"><polygon id="Rectangle-2" fill="#D3555C" points="1.35355339 4.26325641e-14 36.7088924 35.3553391 1 35.4123828"></polygon><polygon id="Rectangle-2-Copy" fill="#F48D3A" points="1 35.4123828 36.7067649 35.3553391 72.0599976 70.7106781 1 70.8223826"></polygon><polygon id="Rectangle-2-Copy-2" fill="#FDC753" points="1 70.8247655 72.0642315 70.7106781 106.712464 105.35891 1 106.237148"></polygon><polygon id="Rectangle-2-Copy-3" fill="#70BC53" points="1 106.237148 106.712464 105.35891 69.9429112 142.128463 1 141.649531"></polygon><polygon id="Rectangle-2-Copy-4" fill="#249CD5" points="1 141.649531 70.6500179 141.421356 34.5875721 177.483802 1 177.061914"></polygon><polygon id="Rectangle-2-Copy-5" fill="#9D61A4" points="1 177.061914 35.2946789 176.776695 0.646446609 211.424928"></polygon></g><path d="M107.139272,137.278414 C106.683599,137.80857 105.167916,138.414722 104.447921,137.694727 C103.728229,136.975035 104.978683,135.117824 104.978683,135.117824 C106.077749,133.791677 106.001753,135.913815 106.683901,135.913512 C107.366049,135.913815 107.593129,136.747652 107.139272,137.278414 Z M112.634606,134.284592 C110.057098,135.875665 109.754627,134.89135 107.177422,133.299368 C104.600519,131.707689 105.130675,129.888325 105.130978,127.91818 C105.13128,125.947429 103.917765,125.037898 103.614992,121.930839 C103.311311,118.822872 95.7713491,116.738884 93.3833768,117.53427 C90.9957072,118.330563 89.1345602,116.960514 90.8067767,114.957669 C92.9189227,112.428302 90.9993405,109.490191 93.4212234,105.977113 C96.220059,101.91753 100.507328,104.650966 100.507328,104.650966 C102.250393,106.01496 103.197771,104.916196 104.220841,104.044512 C105.243912,103.172828 106.456519,104.158354 107.896508,103.627896 C109.335892,103.097437 110.359568,103.362364 110.624495,104.082661 C110.889724,104.802656 110.089192,105.403963 111.150109,106.237195 C112.211026,107.071033 112.292472,105.370961 113.921695,105.029736 C116.568539,104.304291 115.9639,106.210248 118.081194,107.266019 C119.971104,108.208854 117.478069,108.549172 116.308759,109.464152 C114.916305,110.552622 117.360593,111.40614 117.588279,113.603668 C117.815359,115.801196 120.059817,113.972748 121.234879,112.645693 C122.409639,111.319547 123.389414,110.746094 124.114858,110.978624 C125.394378,111.389184 123.205025,113.707519 122.826255,114.313368 C122.447183,114.91952 123.129331,115.905047 122.901949,116.738582 C122.674566,117.572722 120.665969,118.974562 121.727189,120.187168 C122.788106,121.399472 122.182257,122.384999 122.182257,122.384999 C120.893957,124.204364 122.256739,124.750264 121.272726,127.76649 C118.885359,133.260916 115.210298,132.692308 112.634606,134.284592 Z" id="Combined-Shape" fill="#FFFFFF"></path></g></g></svg> </a> ';

  var css =
  '@media only screen and (min-width: 768px) {' +
  '#pridecodes-voteyes-left-corner-svg {width: 110px;}' +
  '} @media only screen and (max-width: 767px) {' +
  '#pridecodes-voteyes-left-corner-svg {width: 70px;}' +
  '}' +
  '@keyframes enterIn {0% {opacity: 0;}100% {opacity: 100;}}'+
  '#pridecodes-voteyes-left-corner-svg { animation: enterIn 2s; transition: all .2s ease-in-out; z-index: 1000; }' +
  '#pridecodes-voteyes-left-corner-svg:hover { transform: scale(1.1); transform-origin:left top; }';

  var style = document.createElement('style');
  style.innerHTML = css;

  document.body.insertAdjacentHTML( 'beforeEnd', corner );
  document.body.appendChild(style);

}
