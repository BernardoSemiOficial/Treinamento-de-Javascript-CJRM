const listGames = document.querySelector("[data-list='games']");
const formAddGame = document.querySelector("[data-js='add-game-form']");

const db = firebase.firestore();

db.collection("games").onSnapshot(snapshot => {

    if(!snapshot.metadata.hasPendingWrites) {

        //snapshot.docs.forEach(doc => console.log(doc.data()))
        snapshot.docs.reduce((acc, doc, index) => {
    
            const { title, developedBy, createdAt } = doc.data();
    
            acc += `
                <li id="${doc.id}" data-id="${index}" class="my-4">
                    <h5>${title}</h5>
                    <ul>
                        <li>Desenvolvido por ${developedBy}</li>
                        <li>Adicionado no banco em ${new Date(createdAt.toDate()).toLocaleDateString("pt-br")}</li>
                    </ul>
                    <button data-remove="${index}" class="btn btn-danger btn-sm">Remover</button>
                </li>
            `
    
            listGames.innerHTML = acc;
    
            return acc
        }, '')
    }

})

/* OBTENDO OS DOCUMENTS DO COLLECTIONS GAMES
db.collection("games").get()
    .then(snapshot => {
         console.log(snapshot)
        //snapshot.docs.forEach(doc => console.log(doc.data()))
        snapshot.docs.reduce((acc, doc, index) => {

            const { title, developedBy, createdAt } = doc.data();

            acc += `
                <li id="${doc.id}" data-id="${index}" class="my-4">
                    <h5>${title}</h5>
                    <ul>
                        <li>Desenvolvido por ${developedBy}</li>
                        <li>Adicionado no banco em ${new Date(createdAt.toDate()).toLocaleDateString("pt-br")}</li>
                    </ul>
                    <button data-remove="${index}" class="btn btn-danger btn-sm">Remover</button>
                </li>
            `

            listGames.innerHTML = acc;

            return acc
        }, '')
    })
    .catch(error => {
        console.log(error.message)
    })
*/

formAddGame.addEventListener("submit", e => {
    e.preventDefault();

    const currentTarget = e.target;
    const title = currentTarget.title.value;
    const developer = currentTarget.developer.value;

    const data = {
        title,
        developedBy: developer,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }

    db.collection("games").add(data)
        .then(snapshot => console.log(snapshot))
        .catch(error => console.log(error.message))
})

listGames.addEventListener("click", (e) => {

    const currentTarget = e.target;

    if(!currentTarget.dataset.remove) {
        return;
    }

    const itemId = currentTarget.dataset.remove;

    const item = document.querySelector(`[data-id='${itemId}']`);
    
    db.collection("games").doc(item.id).delete()
        .then(() => {
            console.log("Document removido");
        })
        .catch(error => error)

})

db.collection("games").doc("7sRFwzx9NLYyjxVGHi85")
    // .set({ title: "FIFA 2021" }, { merge: true })
    .update({ title: "League of Legends" })
    .then(() => console.log("Document atualizado"))
    .catch((e) => console.log(e))