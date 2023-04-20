// lightbox.option({
//   'showImageNumberLabel': false,
//   'wrapAround': true,
//   'positionFromTop': 125,
//   'alwaysShowNavOnTouchDevices': true
// })

// const gallery = baguetteBox.run(".gallery");

document.querySelector("#search").addEventListener("keyup", userSearch);

function userSearch() {
   const caption = document.querySelectorAll("a[data-caption]");
   let captionsList = [];

   for (let i = 0; i < caption.length; i++) {
      let captions = caption[i].getAttribute("data-caption");
      captionsList.push(captions.toLowerCase());
      // create variable set it to user search input toLowerCase()
      let searchVar = document.querySelector("#search");
      searchVar = searchVar.value.toLowerCase();
      // create conditional statement (if) to search indexOf
      if (captionsList[i].indexOf(searchVar) > -1) {
         // set style of lstCnt to display block
         caption[i].style.display = "block";
      } else {
         // set style of lstCnt to display none
         caption[i].style.display = "none";
      }
   }
}

console.log(userSearch());
// document.getElementById('search').addEventListener('keyup', searchFilter);
// let thumbnails = document.getElementsByTagName('img');

// function searchFilter() {
//     // grabs user input as its being typed into search field and converts it to all upper case for case sensitivity
//     let userInput = document.getElementById('search').value.toUpperCase();
//     // targets all a tags with the data-caption attribute
//     let links = document.querySelectorAll('a[data-caption]');
//     // iterating through all the a tags
//     for (let i = 0; i < links.length; i++) {
//         let captions = links[i].getAttribute('data-caption');
//         //turning captions into upper case for case sensitivity
//         captions = captions.toUpperCase();
//         // check if the current value of the search input is included within any captions, if it is display the associated thumbnail, if not, hide it
//         if (captions.includes(userInput)) {
//             thumbnails[i].parentNode.style.display = '';
//         } else {
//             thumbnails[i].parentNode.style.display = 'none';
//         }
//     }
// }