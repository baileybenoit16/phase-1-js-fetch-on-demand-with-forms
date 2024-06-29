console.log(5 + 5)
const init = () => {
  const inputForm = document.querySelector("form");
  console.log(inputForm)
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");
    
    console.log(input.value)

    fetch("http://localhost:3000/movies")
        .then((response) => response.json())
        .then((data) => {
            const result = data.find(({id}) => id === input.value)
            console.log(result);
        });
  });
};

document.addEventListener('DOMContentLoaded', init);

console.log(5 + 5)