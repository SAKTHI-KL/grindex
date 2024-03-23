// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// slideshow
let slideIndex = 0;
showSlides();


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
function plusSlides(n) {
  showSlide(slideIndex += n);
}
function currentSlide(n) {
  showSlide(slideIndex = n);
}
function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

let popslideIndex = [1,1];
let slideId = ["mySlides1", "mySlides11"]
showpopSlides(1, 0);
showpopSlides(1, 1);

function pluspopSlides(n, no) {
  showpopSlides(popslideIndex[no] += n, no);
}

function showpopSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {popslideIndex[no] = 1}    
  if (n < 1) {popslideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[popslideIndex[no]-1].style.display = "block";  
}



function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "slkarthi9@gmail.com",
    Password : "9F40E5C512A806E1C4FA4CDDFDE29112AD5D",
    To : 'lsakthikarthi@gmail.com',
    From : 'slkarthi9@gmail.com',
    Subject : "New Query Raised from Website",
    Body : "Name : " + document.getElementById("name").value 
            + "<br><br> Email : " + document.getElementById("email").value
            + "<br><br> Phone No : " + document.getElementById("phone").value
            + "<br><br> Message : <br> " + document.getElementById("message").value
  }
  // ).then(
  //   message => alert(message)
  );
}

// Function to display the popup
function displayPopup(n) {
  document.getElementById("popup"+n).style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to hide the popup
function hidePopup(n) {
  document.getElementById("popup"+n).style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Submit event listener for the form
// document.getElementById("contactForm").addEventListener("submit", function(event){
//   event.preventDefault(); // Prevent the default form submission

//   // Here you would typically submit the form data to a server using AJAX or fetch
//   // For this example, we'll just display the popup
//   displayPopup(0);
  
// });

function CopyToClipboard(n){
  var r = document.createRange();
  r.selectNode(document.getElementById("copy"+n));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  try {
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      // console.log('Successfully copy text: hello world ' + r);
      let x = document.getElementById("message");
      x.value = "Hi, Please Send a Quote for this product below <br> <br>"+r;
  } catch (err) {
      console.log('Unable to copy!');
  }
}