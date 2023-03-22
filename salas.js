const firebaseConfig = {


    apiKey: "AIzaSyBPQsjl_E4L4Q-oYvNMnAcg7JAcsFOzdvo",


    authDomain: "pipi-e6562.firebaseapp.com",


    databaseURL: "https://pipi-e6562-default-rtdb.firebaseio.com",


    projectId: "pipi-e6562",


    storageBucket: "pipi-e6562.appspot.com",


    messagingSenderId: "247101931555",


    appId: "1:247101931555:web:b766c16e45e4f1f678f196"


};
 firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("nome");
document.getElementById("usuario").innerHTML = "Bem-Vindo,  " + username + ", ser humano!";


function addsala() {
    roomName = document.getElementById("nomesala").value;

    firebase.database().ref("/").child(roomName).update({
        purpose: "adicionar nome de sala"
    });

    localStorage.setItem("nomesala", roomName);

    window.location = "chat.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            console.log("Nome da Sala - " + roomNames);
            row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("nomesala", name);
    window.location = "chat.html";
}

function logout() {
    localStorage.removeItem("nome");
    localStorage.removeItem("nomesala");
    window.location = "index.html";
}