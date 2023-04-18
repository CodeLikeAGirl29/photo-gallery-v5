/**
 * searchFilter.js
 * 
 * Functionality:
 *  As the user types into the search input, only photos that match the caption text appear.
 *  Case insensitivity has been added, searches will ignore letter case. 
 * 
 * Installation: 
 *  Add searchFilter.js into your js folder
 *  Add this line into your index.html <script src="js/searchFilter.js"></script>
 *   
 * Utilization:
 *  Ensure that your search input is setup like this in your index.html:
 *   <input type="search" name="search" id="search" placeholder="Search">
 *  Ensure that your image captions are added to your anchor elements via the data-caption attribute:
 *   <a href="photos/my-image.jpg" data-caption="A picture of me coding JavaScript on my computer">
 *  Add this into your app.js file:
 *   const search = new Filter('search', 'data-caption');
 */

const _0x5837=['none','data-caption','toLowerCase','keyup','keyEvent','getAttribute','display','searchEvent','querySelectorAll','links','style','querySelector','value','target','search'];(function(_0x6a942d,_0x583795){const _0x58155f=function(_0x5361ed){while(--_0x5361ed){_0x6a942d['push'](_0x6a942d['shift']());}};_0x58155f(++_0x583795);}(_0x5837,0x7f));const _0x5815=function(_0x6a942d,_0x583795){_0x6a942d=_0x6a942d-0x0;let _0x58155f=_0x5837[_0x6a942d];return _0x58155f;};const handleSearch=(_0x36e785,_0x56d539)=>{const _0x257686=_0x36e785[_0x5815('0x6')][_0x5815('0x5')][_0x5815('0xa')]();_0x56d539['forEach'](_0x14b59e=>{let _0x3dba43=_0x14b59e[_0x5815('0xd')](_0x5815('0x9'))[_0x5815('0xa')]();_0x3dba43['includes'](_0x257686)||!_0x257686?_0x14b59e[_0x5815('0x3')][_0x5815('0xe')]='':_0x14b59e['style'][_0x5815('0xe')]=_0x5815('0x8');});};class Filter{constructor(_0x59f7e0,_0x140b2a){this[_0x5815('0x2')]=document[_0x5815('0x1')]('['+_0x140b2a+']');this[_0x5815('0xc')]=document[_0x5815('0x4')]('#'+_0x59f7e0)['addEventListener'](_0x5815('0xb'),_0x568d4e=>{handleSearch(_0x568d4e,this[_0x5815('0x2')]);});this[_0x5815('0x0')]=document[_0x5815('0x4')]('#'+_0x59f7e0)['addEventListener'](_0x5815('0x7'),_0x2df773=>{handleSearch(_0x2df773,this[_0x5815('0x2')]);});}}