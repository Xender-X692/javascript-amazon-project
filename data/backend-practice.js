const xhr = new XMLHttpRequest(); // create http

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
xhr.open("GET", `https://supersimplebackend.dev`);
xhr.send();
