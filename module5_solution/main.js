// Initialize Firebase (ADD YOUR OWN DATA)

var firebaseConfig = {
  apiKey: "AIzaSyCX8vZs1c8rwOLyFn9xxrRNIXl9Y6rTE74",
  authDomain: "jpmc-e6d7c.firebaseapp.com",
  databaseURL: "https://jpmc-e6d7c.firebaseio.com",
  projectId: "jpmc-e6d7c",
  storageBucket: "jpmc-e6d7c.appspot.com",
  messagingSenderId: "841228246628",
  appId: "1:841228246628:web:130a59c1ddd8c170248971",
  measurementId: "G-HMXYWHQV0D"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}