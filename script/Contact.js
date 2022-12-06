const sendButton = document.querySelector('.send');
const prenom = document.querySelector('#prenom');
const tel = document.querySelector('#numero-de-tel');
const mail = document.querySelector('#email');
const userMessage = document.querySelector('#usermsg');
const input = document.querySelectorAll('input');
const form = document.querySelector('.form');
const contactBloc = document.querySelector('.form');
let isPrenomGood = false;
let isTelGood = false;
let isMailGood = false;
let isUserMsg = false;

function sendMail(params) {
  var tempParams = {
    name: prenom.value,
    phone: tel.value,
    email: mail.value,
    message: userMessage.value,
  };
  emailjs.send('service_1k172de', 'template_r3i1g5b', tempParams).then(
    function (response) {},
    function (error) {}
  );
}
input.forEach((input) => {
  input.addEventListener('keyup', () => {
    if (prenom) {
      if (prenom.value.length > 0) {
        isPrenomGood = true;
      } else if (prenom.value.length <= 0) {
        isPrenomGood = false;
      }
    }
    if (tel) {
      if (tel.value.length > 0) {
        isTelGood = true;
      } else if (tel.value.length <= 0) {
        isTelGood = false;
      }
    }
    if (mail) {
      if (mail.value.length > 0) {
        isMailGood = true;
      } else if (tel.value.length <= 0) {
        isMailGood = false;
      }
    }
    if (userMessage) {
      if (userMessage.value.length > 0) {
        isUserMsg = true;
      } else if (tel.value.length <= 0) {
        isUserMsg = false;
      }
    }
  });
});
let add = false;
sendButton.onClick = ' ';
sendButton.addEventListener('click', (e) => {
  if (isPrenomGood === false || isTelGood === false || isMailGood === false || isUserMsg === false) {
    e.preventDefault();
  } else if (isPrenomGood === true && isTelGood === true && isMailGood === true && isUserMsg === true && add === false) {
    add = true;
    sendButton.onclick = 'block';
    prenom.value = ' ';
    tel.value = ' ';
    mail.value = ' ';
    userMessage.value = ' ';
    const success = document.createElement('div');
    success.className = 'envoi-reussi';
    success.innerHTML = 'Votre message a bien été envoyé, nous vous recontacterons dans les meilleurs délais';
    contactBloc.appendChild(success);
  } else if (add === true) {
  }
});
