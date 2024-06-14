firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userId = user.uid;
        const db = firebase.firestore();

        db.collection('goals').where("userId", "==", userId).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let goal = doc.data();
                let goalDiv = document.createElement('div');
                goalDiv.innerHTML = `<h3>${goal.title}</h3><p>${goal.description}</p>`;
                document.getElementById('goalsList').appendChild(goalDiv);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    } else {
        window.location.href = 'index.html';
    }
});
