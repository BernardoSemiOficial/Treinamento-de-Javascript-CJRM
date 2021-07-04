const listGames = document.querySelector("[data-list='games']");

const db = firebase.firestore();

db.collection("games").get()
    .then(snapshot => {
        // console.log(snapshot)
        // snapshot.docs.forEach(doc => console.log(doc.data()))
        snapshot.docs.reduce((acc, doc) => {

            const { title, developedBy, createdAt } = doc.data();

            acc += `
                <li class="my-4">
                    <h5>${title}</h5>
                    <ul>
                        <li>Desenvolvido por ${developedBy}</li>
                        <li>Adicionado no banco em ${new Date(createdAt.toDate()).toLocaleDateString("pt-br")}</li>
                    </ul>
                </li>
            `

            listGames.innerHTML = acc;

            return acc
        }, '')
    })
    .catch(error => {
        console.log(error.message)
    })