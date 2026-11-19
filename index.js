
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);



const submitButton = document.getElementById("rsvp-button");
const addParticipant = (person) => {
    let name = document.getElementById("name").value;
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value;

    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd.`;
    
    const participantsDiv = document.querySelector(".rsvp-participants");
    participantsDiv.appendChild(newParticipant);
}



const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value.trim(),
    state: rsvpInputs[1].value.trim(),
    email: rsvpInputs[2].value.trim()
  };

  if (person.name.length < 2) {
    containsErrors = true;
    rsvpInputs[0].classList.add("error");
  } else {
    rsvpInputs[0].classList.remove("error");
  }

  if (person.state.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  } else {
    rsvpInputs[1].classList.remove("error");
  }

  if (person.email.length < 5 || !person.email.includes("@")) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }

  if (!containsErrors) {
    addParticipant(person);
    toggleModal(person);
    document.getElementById("rsvp-form").reset();
  }
};
document.getElementById("rsvp-form").addEventListener("submit", validateForm);





const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalContent = document.getElementById("modal-content");
    let message = document.getElementById("modal-item");
    let name = person.name;
    modal.style.display = "flex";
    message.textContent = `Thanks, ${name}! Can't wait to see you dancing at the Diljit concert! 💃🕺`;
    let intervalId = setInterval(animateImage, 500);
    setTimeout(() => {
      modal.style.display = "none"
      clearInterval(intervalId);
    }, 5000);
}

let rotateFactor = 0;
let modalImage = document.getElementById("modal-img");
const animateImage = () => {
  if(rotateFactor === 0) {
    rotateFactor = -10;
  }
  else {
    rotateFactor = 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}