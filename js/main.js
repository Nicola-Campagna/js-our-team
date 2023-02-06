// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. OK
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. OK
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite. OK
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto OK
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// Array di object per rappresentare il team
const arrayTeam = [

    persona = [
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

]

for (proprieta in persona) {
    console.log(persona[proprieta]);
}

// Stampare le stesse informazioni su DOM sottoforma di stringhe
// creare un div e inserire l'oggetto con le rispettive info...x6
const cardTeamEl = document.getElementById("container-team-cards");
cardTeamEl.innerHTML = `
<div>
    ${persona[0].nome} <br>
    ${persona[0].ruolo}<br>
    ${persona[0].foto}
</div>
<br>

<div>
    ${persona[1].nome} <br>
    ${persona[1].ruolo}<br>
    ${persona[1].foto}
</div>
<br>

<div>
    ${persona[2].nome} <br>
    ${persona[2].ruolo}<br>
    ${persona[2].foto}
</div>
<br>

<div>
    ${persona[3].nome} <br>
    ${persona[3].ruolo}<br>
    ${persona[3].foto}
</div>
<br>

<div>
    ${persona[4].nome} <br>
    ${persona[4].ruolo}<br>
    ${persona[4].foto}
</div>
<br>

<div>
    ${persona[5].nome} <br>
    ${persona[5].ruolo}<br>
    ${persona[5].foto}
</div>
    `



