"use strict"

const studentsArray = [];



const handleIntroButtonClick = (e) => {
    document.getElementById('sortingForm').style.display = 'block'
    
}

const handleButtonClick = (e) => {
    const studentName = document.getElementById('inputName').value;
    

    const houses = ['Griffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    let randomHouse = houses[Math.floor(Math.random() * houses.length)];

    if (studentName === '') {
        errorMessage();
    }else {
        let houseSelection = {
            inputName: studentName,
            houseName: randomHouse
        }
    studentsArray.push(houseSelection);
    houseCardBuilder(studentsArray);
    }
    
    

    
    console.log('Array', studentsArray);
    

    };
    


    
    const buttonEvents = () => {
    document.querySelector('#sort').addEventListener('click', handleButtonClick);
    document.querySelector('#introBtn').addEventListener('click', handleIntroButtonClick);
    document.querySelector('#all-cards').addEventListener('click', expelStudent);
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
                        <h5 class="card-title">${studentsArray[i].inputName}</h5>
                        <p class="house-name">${studentsArray[i].houseName}</p>
                        </div>
                        <button type="button" class="btn btn-danger"="${i}">Expel</button>
                     </div>`
    }

    printToDom('all-cards', domString)
}

const errorMessage = () => {
     alert ('Name must enter a name to be sorted');
       
    }


const expelStudent = (e) => {
    const ctype = e.target.type;
    const target = e.target.id;

    if (ctype === 'button') {
        studentsArray.splice(target, 1);

        houseCardBuilder(studentsArray);
    }

}

const init = () => {
buttonEvents();
houseCardBuilder(studentsArray);
}

init();