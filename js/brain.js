var db = firebase.firestore();

function storeData(){
    var input1 = document.getElementById("txt1").value;
    var input2 = document.getElementById("txt2").value;
    db.collection("notifications").doc().set({
        notificationName: input1,
        notificationDescription: input2,
    })
    .then(function() {
        alert("Notification Sent Successfully");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
const month = ['Jan']

function addEvent(){
    var input1 = document.getElementById("txt3").value;
    var input2 = document.getElementById("txt4").value;
    // month1 = month[06]

    // console.log(input2,"date")
    db.collection("events").doc().set({
        eventName: input1,
        eventDate: input2,
    })
    .then(function() {
        alert("Event Added Successfully");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

function upload(){
    const ref = firebase.storage().ref();
      var input1 = document.getElementById("txt5").value;
      const file = document.querySelector("#photo").files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type
      };
      const task = ref.child("FileType.image/"+name).put(file, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          console.log(url);
          db.collection("duas").doc().set({
            duaName: input1,
            duaUrl: url,
          })
          .then(function() {
            alert("Dua Added Successfully");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });

        })
        .catch(console.error);
}