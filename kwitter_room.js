// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCB2GqpUj3UwVn3eG3MDybi41au7VkXUTU",
  authDomain: "kwitter-c7924.firebaseapp.com",
  databaseURL: "https://kwitter-c7924-default-rtdb.firebaseio.com",
  projectId: "kwitter-c7924",
  storageBucket: "kwitter-c7924.appspot.com",
  messagingSenderId: "327458962295",
  appId: "1:327458962295:web:7f110f86c0ee77c3393f72",
  measurementId: "G-BR8FRR5BXV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}