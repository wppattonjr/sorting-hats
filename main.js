"use strict"

const hogwartsHouses = [
    {
        studentName: 'Harry Potter',
        houseName:  'Griffindor',
        
    },

    {
        studentName: 'Silvanus Kettleburn',
        houseName: 'Hufflepuff',
    },

    {
        studentName: 'Filius Flitwick',
        houseName: 'Ravenclaw',
    },

    {
        studentName: 'Draco Malfoy',
        houseName: 'Slytherin',
    },
];

const handleIntroButtonClick = (e) => {
    document.getElementById('sortingForm').style.display = 'block'
    console.log('Yo')
}

const handleButtonClick = (e) => {
    document.getElementById('inputName').value;
    

    const houses = ['Griffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    let randomHouse = houses[Math.floor(Math.random() * houses.length)];
    
    console.log('inputName', inputName);
    console.log('randomHouse', randomHouse)

    let houseAssignment = {

    };
    

}
    
    const buttonEvents = () => {
    document.querySelector('#sort').addEventListener('click', handleButtonClick);
    document.querySelector('#introBtn').addEventListener('click', handleIntroButtonClick);
}


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const houseCardBuilder = (hogwarts) => {
    let domString = '';

    for (let i = 0; i < hogwarts.length; i++) {
        domString += `<div class="card my-2" style="width: 18rem;" id="${i}">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${hogwartsHouses[i].studentName}</h5>
                        <p class="house-name">${hogwartsHouses[i].houseName}</p>
                        </div>
                        <button type="button" class="btn btn-danger"="${i}">Expel</button>
                     </div>`
    }

    printToDom('all-cards', domString)
}

const init = () => {
buttonEvents();
houseCardBuilder(hogwartsHouses);




}

init();


