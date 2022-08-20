const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };
  
  console.log("within async");
  
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  console.log("after await");

  jokeEl.innerHTML = data.joke;
};

// generateJoke();
console.log(generateJoke());

console.log("hello");

jokeBtn.addEventListener("click", () => generateJoke());