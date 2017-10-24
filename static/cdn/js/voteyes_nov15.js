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

    

  var corner = '<a target="_blank" href="http://www.equalitycampaign.org.au/planyourvote?splash=1" class="pridecodes-voteyes-corner" aria-label="Vote Yes"> <svg viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="pridecodes-voteyes-corner-svg" style="position: fixed;top: 0;border: 0;right: 0;">    <g id="corner-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="top-right">            <use id="Rectangle" fill="#D8D8D8" xlink:href="#path-1"></use>            <g id="Group" mask="url(#mask-2)"> <g transform="translate(112.826425, 38.080213) rotate(-45.000000) translate(-112.826425, -38.080213) translate(59.326425, -67.919787)"> <polygon id="Rectangle-2" fill="#D3555C" points="1.35355339 4.26325641e-14 36.7088924 35.3553391 1 35.4123828"></polygon>           <polygon id="Rectangle-2-Copy" fill="#F48D3A" points="1 35.4123828 36.7067649 35.3553391 72.0599976 70.7106781 1 70.8223826"></polygon> <polygon id="Rectangle-2-Copy-2" fill="#FDC753" points="1 70.8247655 72.0642315 70.7106781 106.712464 105.35891 1 106.237148"></polygon> <polygon id="Rectangle-2-Copy-3" fill="#70BC53" points="1 106.237148 106.712464 105.35891 69.9429112 142.128463 1 141.649531"></polygon> <polygon id="Rectangle-2-Copy-4" fill="#249CD5" points="1 141.649531 70.6500179 141.421356 34.5875721 177.483802 1 177.061914"></polygon> <polygon id="Rectangle-2-Copy-5" fill="#9D61A4" points="1 177.061914 35.2946789 176.776695 0.646446609 211.424928"></polygon> </g> </g> <path d="M107.139272,62.2784138 C106.683599,62.8085697 105.167916,63.4147216 104.447921,62.6947269 C103.728229,61.975035 104.978683,60.1178241 104.978683,60.1178241 C106.077749,58.7916774 106.001753,60.9138149 106.683901,60.9135121 C107.366049,60.9138149 107.593129,61.7476523 107.139272,62.2784138 Z M112.634606,59.2845922 C110.057098,60.8756654 109.754627,59.8913497 107.177422,58.2993682 C104.600519,56.7076894 105.130675,54.8883251 105.130978,52.9181798 C105.13128,50.9474289 103.917765,50.0378982 103.614992,46.9308394 C103.311311,43.8228724 95.7713491,41.7388843 93.3833768,42.5342696 C90.9957072,43.3305631 89.1345602,41.9605143 90.8067767,39.9576695 C92.9189227,37.428302 90.9993405,34.4901907 93.4212234,30.9771131 C96.220059,26.9175298 100.507328,29.6509664 100.507328,29.6509664 C102.250393,31.0149598 103.197771,29.9161958 104.220841,29.0445117 C105.243912,28.1728276 106.456519,29.1583544 107.896508,28.6278957 C109.335892,28.0974371 110.359568,28.3623636 110.624495,29.0826611 C110.889724,29.8026558 110.089192,30.4039634 111.150109,31.2371953 C112.211026,32.0710327 112.292472,30.3709611 113.921695,30.0297357 C116.568539,29.3042911 115.9639,31.2102485 118.081194,32.2660187 C119.971104,33.2088545 117.478069,33.5491716 116.308759,34.4641522 C114.916305,35.552622 117.360593,36.4061397 117.588279,38.6036677 C117.815359,40.8011957 120.059817,38.9727482 121.234879,37.6456932 C122.409639,36.3195465 123.389414,35.746094 124.114858,35.9786239 C125.394378,36.3891844 123.205025,38.7075189 122.826255,39.3133681 C122.447183,39.9195201 123.129331,40.9050469 122.901949,41.7385815 C122.674566,42.5727218 120.665969,43.9745617 121.727189,45.1871685 C122.788106,46.3994724 122.182257,47.3849993 122.182257,47.3849993 C120.893957,49.2043635 122.256739,49.7502636 121.272726,52.7664904 C118.885359,58.260916 115.210298,57.6923079 112.634606,59.2845922 Z" id="Combined-Shape" fill="#FFFFFF" mask="url(#mask-2)"></path> </g> </g></svg> </a> ';

  var css =
  '@media only screen and (min-width: 768px) {' +
  '#pridecodes-voteyes-corner-svg {width: 110px;}' +
  '} @media only screen and (max-width: 767px) {' +
  '#pridecodes-voteyes-corner-svg {width: 70px;}' +
  '}' +
  '@keyframes enterIn {0% {opacity: 0;}100% {opacity: 100;}}'+
  '#pridecodes-voteyes-corner-svg { animation: enterIn 2s; transition: all .2s ease-in-out; z-index: 1000; }' +
  '#pridecodes-voteyes-corner-svg:hover { transform: scale(1.1); transform-origin:right top; }';

  var style = document.createElement('style');
  style.innerHTML = css;

  document.body.insertAdjacentHTML( 'beforeEnd', corner );
  document.body.appendChild(style);

}
