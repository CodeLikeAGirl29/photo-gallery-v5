// lightbox.option({
//   'showImageNumberLabel': false,
//   'wrapAround': true,
//   'positionFromTop': 125,
//   'alwaysShowNavOnTouchDevices': true
// })

// const gallery = baguetteBox.run(".gallery");
// baguetteBox.show(index, gallery[0]);

// const search = new Filter("search", "data-caption");
// document.getElementById("search").addEventListener("keyup", filter);

// function filter() {
// let input = document.getElementById("search");
// let results = input.value.toLowerCase();
// let img = document.getElementById('gallery');
// let pic = img.getElementsByTagName('a');

// for (i = 0; i < a.length; i++) {
//   a = pic[i].getElementsByTagName("a")[0];
//   if (a.getAttribute("data-caption").toLowerCase().indexOf(results) > -1){
//     a[i].style.display = ""
//   } else {
//     a[i].style.display = "none"
//   }
// }
// }

// if (input.value === "") {
//   img.style.display = "";
// }

// filter();
document.getElementById('search').addEventListener("keyup", filter)

function filter(){
    const searchFilter = document.getElementById('search');
    const text = searchFilter.value.toLowerCase();
    const images = document.getElementsByTagName('img');

    for ( let i = 0; i< images.length; i++ ) {
        const dataCaption = document.getElementsByTagName('a')[i].getAttribute('data-caption')
    
        if (dataCaption.toLowerCase().indexOf(text) > -1) {
            images[i].style.display = '';
        } else {
            images[i].style.display = 'none';
        }
    }
}