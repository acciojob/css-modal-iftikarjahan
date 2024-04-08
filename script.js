//your JS code here. If required.
// Get the modal and the button that opens it
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModal');

// Get the close button inside the modal
var closeModalBtn = modal.querySelector('.close-modal');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal(event) {
  if (event.target === modal || event.target === closeModalBtn) {
    modal.style.display = 'none';
  }
}

// Event listener to open the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

// Event listener to close the modal when clicked outside or on the close button
document.addEventListener('click', closeModal);
