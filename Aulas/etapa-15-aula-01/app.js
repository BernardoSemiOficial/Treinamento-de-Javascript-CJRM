const listGames = document.querySelector("[data-list='games']");
const formAddGame = document.querySelector("[data-js='add-game-form']");

const db = firebase.firestore();

function insertIntoDOM(snapshot) {

    snapshot.docs.reduce((acc, doc, index) => {
    
        const { title, developedBy, createdAt } = doc.data();

        acc += `
            <li id="${doc.id}" data-id="${index}" class="my-4">
                <h5>${title}</h5>
                <ul>
                    <li>Desenvolvido por ${developedBy}</li>
                    <li>Adicionado no banco em ${new Intl.DateTimeFormat("pt-BR", { dateStyle: 'short', timeStyle: 'short' }).format(createdAt.toDate())}</li>
                </ul>
                <button data-remove="${index}" class="btn btn-danger btn-sm">Remover</button>
            </li>
        `

        listGames.innerHTML = acc;

        return acc
    }, '')
}

function createGame(e) {
    
    e.preventDefault();

    const currentTarget = e.target;
    const title = currentTarget.title.value;
    const developer = currentTarget.developer.value;

    const fields = {
        title,
        developedBy: developer,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }

    handleFirestore("ADD", "games", fields);
}

function removeGame(e) {

    const currentTarget = e.target;

    if(!currentTarget.dataset.remove) {
        return;
    }

    const itemId = currentTarget.dataset.remove;

    const item = document.querySelector(`[data-id='${itemId}']`);

    handleFirestore("DELETE", "games", null, item.id);
}

async function handleFirestore(method, collection, fields, idDocument) {

    let response = null;

    if(method === "DELETE") {
        response = await db
            .collection(collection)
            .doc(idDocument)
            .delete();
    }
    
    if(method === "ADD") {
        response = await db
            .collection(collection)
            .add(fields);
    }

    if(method === "UPTADE") {
        response = await db
            .collection(collection)
            .doc(idDocument)
            .uptade(fields);
    }

    if(method === "SET") {
        response = await db
            .collection(collection)
            .doc(idDocument)
            .set(fields);
    }
    
    if(method === "GET") {
        response = await db
            .collection(collection)
            .get();
    }

    console.log(await response)

    // if(!response.ok) {
    //     throw new Error("HTTP erro: " + response.status + "Mensagem: ", response.message);
    // }

    const data = response;
    return data;
}

db.collection("games").onSnapshot(snapshot => {

    if(!snapshot.metadata.hasPendingWrites) {
        insertIntoDOM(snapshot);
    }

})

formAddGame.addEventListener("submit", createGame)
listGames.addEventListener("click", removeGame);



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

/* ATUALIZAR UM DOCUMENT COM UPTADE E SET
db.collection("games").doc("7sRFwzx9NLYyjxVGHi85")
    // .set({ title: "FIFA 2021" }, { merge: true })
    .update({ title: "League of Legends" })
    .then(() => console.log("Document atualizado"))
    .catch((e) => console.log(e))
*/