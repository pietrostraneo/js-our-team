// GENERO UNA FUNZIONE CHE MI CREA UNA CARD, DA USARE IN UN CICLO PER STAMPARE I DATI DEI DIPENDENTI

function createCard(){
    let col = document.querySelector(`col-12`)
    let card = document.createElement(`div`)
    card.classList.add(`card`)
    col.appendChild(card)
}

// GENERO UNA FUNZIONE CHE MI CREA UNA STRINGA, DA USARE IN UN CICLO PER STAMPARE I DATI DEI DIPENDENTI

function createString(employer){
    let col = document.getElementById(`test`)
    let text = document.createElement(`p`)
    text.innerHTML = `${employer}`
    col.appendChild(text)
}

// DICHIARO UN ARRAY DI OGGETTI CON I DATI DEGLI IMPIEGATI

let employees = [
    {
        name: "Wayne Bamett",
        role: "Founder & CEO",
        photo: "wayne-bamett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

console.log(employees)

// CICLO CHE STAMPA SU STRINGA I DATI DEI DIPENDENTI
for(let i=0; i<employees.length; i++){
    createString(employees[i])
}