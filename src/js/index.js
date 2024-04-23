import heroes from "./heroes.json";
import "../css/style.css";
import itemsTemplate from "../templates/hero.hbs"

const btnForm = document.querySelector('.btn-form');

btnForm.addEventListener('click', (event) => {
    event.preventDefault();
    handleFormData();
});

renderHeroes();

function handleFormData() {
    const form = document.querySelector('#myForm');
    const formData = new FormData(form);
    const dataObject = {};
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });
    heroes.push(dataObject);
    renderHeroes()
    form.reset();
};

console.log(heroes);

function renderHeroes() {
    const itemHeroes = document.querySelector('.hero-table');
    itemHeroes.innerHTML = '';
    const markup = itemsTemplate(heroes);
    itemHeroes.insertAdjacentHTML('beforeend', markup);
};