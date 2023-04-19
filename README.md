# Interactive Photo Gallery

A project demonstrating skills acquired from [Team
Treehouse](http://referrals.trhou.se/lindseykdeveloper) on the Front End Web
Development Techdegree track.

> Live link can be found [here](https://myjsphotogallery.netlify.app/)

In this project, you will create an interactive photo gallery using JavaScript and CSS Grid Layout. Thumbnails and photos will be provided with descriptions. At the top of the page, you'll have a search area where photos will hide and show depending on user input. When the user clicks on a thumbnail, the photo will display in a lightbox. There should be "back" and "previous" arrows to cycle through photos.

Included:
- ```gallery_mockup.png``` is an example of how the gallery page should look.
= ```photo_lightbox.png``` is an example of what the lightbox should look like when active.
- ```photo_captions.txt``` is the text you can use for the captions that should be displayed with each image in the lightbox mode.
- An ```images``` folder contains the thumbnail images for the gallery page and larger images for the lightbox.
- ```searchFilter.js``` is a plugin used to search and filter the thumbnail
  images based on the caption text.

## Screenshot
![screenshot](https://res.cloudinary.com/codelikeagirl29/image/upload/v1681764327/projects/127-0-0-1-63098-index-html_f7xjvp.png)

## Instructions
1. Build the web page layout using HTML and CSS, using the layout in the gallery_mockup.png file.
   - Create a gallery using the provided thumbnail images.
   - Create a search box field.
   - Use CSS Grid to layout the thumbnail gallery.
   - The design does not need to be exact, but the general spacing and arrangement of the elements should match the design of the mockups.
2. Download and install the JavaScript lightbox plugin [baguetteBox.js](https://github.com/feimosi/baguetteBox.js/).
   - Structure your HTML to match the baguetteBox [usage docs](https://github.com/feimosi/baguetteBox.js/#usage).
   - Create a folder named 'js'.
   - Move the baguetteBox.js file into the 'js' folder.
   - Create an app.js file in the 'js' folder.
   - Add ```baguetteBox.run('.gallery');``` into your app.js file.
3. Utilize the included JavaScript search plugin searchFilter.js
   - The search box at the top of the page should filter photos based on the captions.
   - The photos should filter in real-time as you type, and only display photos that match the search.
4. Make sure to check your code is valid by running it through an HTML and CSS validator.
   - [HTML Validator](https://validator.w3.org/#validate_by_input) This will
     help you spot any errors that might be in your code.
   - [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
   - [JSHint](https://jshint.com/)
   - There are a few exceptions that you don’t need to fix:
     - Don’t worry about any warnings, we just need you to check any errors that might be there.
     - If CSS validator flags use of calc, vendor prefixes or pseudo-elements/pseudo-classes these errors should be ignored.
     - If HTML validator flags use of pipe (‘|’) in Google font links/URLs this error can also be ignored.
5. You should also check for issues with your JavaScript code using JSHint, linked in the Project Resources.
JSHint may show you some warnings, so make sure to check through those for any potential problems. You do not need to fix every warning listed but reviewing them can be useful.
6. Before you submit your project for review, make sure you can check off all of the items on the [Student Project Submission Checklist](http://treehouse-techdegree.s3.amazonaws.com/Student-Project-Submission-Checklist.pdf). The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!
7. If you're having trouble with this project, make sure you take a look at this great study guide:
[Project 5 Study Guide](https://drive.google.com/file/d/1KCrJLiPfJh-gy54K2yKi-taLuql7UvUL/view?usp=sharing)
