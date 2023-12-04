// GENERO UNA FUNZIONE CHE MI CREA UNA CARD, DA USARE IN UN CICLO PER STAMPARE I DATI DEI DIPENDENTI

function createCard(photo, name, role){

    // CREO IL CONTENITORE "CARD"
    let col = document.getElementById(`test`)
    let card = document.createElement(`div`)
    card.classList.add(`card`)
    card.classList.add(`text-center`)
    card.style.width = `270px`
    col.appendChild(card)

    // AGGIUNGO L'IMMAGINE ALLA CARD
    let img = document.createElement(`img`)
    img.src = `../img/${photo}`
    img.classList.add(`card-img-top`)
    card.appendChild(img)

    // CREO IL CONTENITORE DELLA CARD CHE CONTERRA' IL TESTO
    let card_body = document.createElement(`div`)
    card_body.classList.add(`card-body`)
    card.appendChild(card_body)

    // CREO GLI ELEMENTI DI TESTO CHE CONTERRANNO I DATI DELL'ARRAY
    let nome = document.createElement(`h5`)
    let ruolo = document.createElement(`p`)
    nome.classList.add(`card-title`)
    ruolo.classList.add(`card-text`)
    nome.innerHTML = `${name}`
    ruolo.innerHTML = `${role}`
    card_body.appendChild(nome)
    card_body.appendChild(ruolo)

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
        photo: "wayne-barnett-founder-ceo.jpg"
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

// MILESTONE 2: CICLO CHE STAMPA SU STRINGA I DATI DEI DIPENDENTI
// for(let i=0; i<employees.length; i++){
//     let name = employees[i].name
//     let role = employees[i].role
//     let photo = employees[i].photo
//     let date = `Nome: ${name} - Ruolo: ${role} - Foto: ${photo}`
//     createString(date)
// }


// BONUS 1 + BONUS 2: CICLO CHE STAMPA SU CARD I DATI DEI DIPENDENTI
for(let i=0; i<employees.length; i++){
    let name = employees[i].name
    let role = employees[i].role
    let photo = employees[i].photo
    createCard(photo, name, role)
}