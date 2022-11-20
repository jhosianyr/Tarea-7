let RandM_url = 'https://rickandmortyapi.com/api';
let person = undefined;

class characters {
    constructor (name, specie, image){
    this.name= name;
    this.specie= specie;
    this.image= image;
}
    get data (){
        return `The name is ${this.name}, specie ${this.specie} and look like this ${this.image}`
    }
}

const getPeople = async () => {
  try{
  const res = await fetch (RandM_url + "/character");
  const data2 = await res.json(); 
  let character = data2.results;  
  character.map((item) => {
    let person = new characters (item.name, item.species, item.image);
    show(person);
  })
  } catch (failed) {
    console.log(failed);
  }
  }


getPeople();

const show = (item) => {
  let ApiCards = document.getElementById("ApiCards");
  ApiCards.innerHTML += `<div class="CardContainer"><div class="CardContainer__card"><h2>${item.name}</h2><p>${item.specie}</p><img src="${item.image}"/></div></div>`;
};

show ();