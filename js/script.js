let btn = document.querySelector("#btn");
let show = document.querySelector("#show");
let author = document.querySelector("#author");

// first way:-

// btn.addEventListener("click", quoteGenerator);

// function quoteGenerator() {
//   let data = fetch("https://type.fit/api/quotes");
//   data
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       console.log(response);
//       let randomNumber = Math.floor(Math.random() * response.length);
//       console.log(randomNumber);
//       show.innerHTML = response[randomNumber].text;
//       author.innerHTML = response[randomNumber].author;
//     });
// }

// first way:-

btn.addEventListener("click", quoteGenerator);

async function quoteGenerator() {
  let data = await fetch("https://type.fit/api/quotes");
  let response = await data.json();
  console.log(response);
  let randomNumber = Math.floor(Math.random() * response.length);
  console.log(randomNumber);
  show.innerHTML = response[randomNumber].text;

  // if (
  //   response[randomNumber].author.includes("type.fit") ||
  //   response[randomNumber].author.includes(" type.fit")
  // ) {
  //   // console.log(response[randomNumber].author);
  //   author.innerHTML = response[randomNumber].author.replace(", type.fit", "");
  // }

  if (response[randomNumber].author.includes("type.fit"))
    author.innerHTML = response[randomNumber].author.replace(",type.fit", "");
  if (response[randomNumber].author.includes(" type.fit"))
    author.innerHTML = response[randomNumber].author.replace(", type.fit", "");
}
