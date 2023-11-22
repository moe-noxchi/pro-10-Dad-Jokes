const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("jokeBtn");

jokebtn.addEventListener('click', generateJoke)

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke

}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     });
// }
