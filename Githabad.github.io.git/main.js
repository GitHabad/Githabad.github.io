const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dovesqr.jpg") {
    myImage.setAttribute("src", "images/firefox2.png.jpg");
  } else {
    myImage.setAttribute("src", "images/dovesqr.jpg");
  }
};