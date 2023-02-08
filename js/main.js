// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. OK
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. OK
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite. OK
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto OK
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe



const cardTeamEl = document.getElementById("container-team-cards");
// Array di object per rappresentare il team
const arrayTeam = [
    // object con le rispettive informazioni

    // object 0
    {
        nome: "Wayne Barnett",
        ruolo: "Founder e CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },


    // object 1
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    // object 2
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    // object 3
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    // object 4
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    // object 5
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Dedigner",
        foto: "barbara-ramos-graphic-designer.jpg"
    }

]


for (const persona of arrayTeam) {
    console.log("nome: " + persona.nome);
    console.log("ruolo: " + persona.ruolo);
    console.log("url: " + persona.foto);

    // CARDS TEAM (creati in JS(con bootstrap) e inseriti nel DOM)
    const cardTeamHtml = `
    <div class="col ">
    <div class="card text-center mt-3">
    <img src="./img/${persona.foto}" class="card-img-top" alt="foto">
    <div class="card-body">
        <h5 class="card-title">${persona.nome}</h5>
        <p class="card-text">${persona.ruolo}</p>
    </div>
    </div>
    </div>
       `
    cardTeamEl.innerHTML += cardTeamHtml;
}



