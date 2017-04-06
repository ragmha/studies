// Reference to DOM elements
const button = document.querySelector('#button');
const input = document.querySelector('#input');
const list = document.querySelector('#list');


const pets = [];


button.addEventListener('click', e => {
  if (input.value.length > 0) {
    pets.push(input.value);
    input.value = "";
    render();
  }
});

function render() {
 list.innerHTML = pets.map(x => `<li>${x}</li>`).join('')
}
