import {postData} from "./api";

const url = 'https://portfolio-js.b.goit.study/api/requests';

const form = document.querySelector('.footer-form');
const modal = document.querySelector('.footer-backdrop');
const modalClose = document.querySelector('[data-modal-close]');
const modalText = document.querySelector('.footer-modal-text');
const emailInput = document.querySelector('#your-email');
const commentsInput = document.querySelector('#your-comments');

// Функція для відображення модального вікна
function openModal(message) {
  modalText.textContent = message;
  modal.classList.add('is-open');

 // Додаємо обробник закриття Esc
  document.addEventListener('keydown', closeModalOnEsc);
}

// Функція для закриття модального вікна
function closeModal() {
  modal.classList.remove('is-open');
  document.removeEventListener('keydown', closeModalOnEsc);
}

// Функція закриття Escape
function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// Функція для обрізання тексту та додавання "..."
function truncateInput(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.substring(0, maxLength) + '...';
  }
}

// Обрізаємо текст під час введення
commentsInput.addEventListener('input', () => {
  truncateInput(commentsInput, 50); // 50 символів максимум
});

// Відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const requestData = {
    email: formData.get('your-email'),
    comment: formData.get('your-comments'),
  };

  // Перевіряємо, що обидва поля заповнені
  if (!requestData.email || !requestData.comment) {
    console.error('Error: Empty form fields');
    openModal('Please fill in all fields.');
    return; // Перериваємо відправку запиту, якщо одне з полів пусте
  }
  
  console.log('Надані дані:', requestData); // Лог перед відправкою

  try {
    const data = postData(requestData);
    console.log('Succes!:', data);
  
    openModal('The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.');
    document.querySelector('.footer-modal').classList.add('success-message');
    form.reset(); 
  } catch (error) {
    console.error('Invalid email, try again:', error);
    openModal('Error sending. Check your details and try again.', false);
    document.querySelector('.footer-modal').classList.add('error-message');
  }
});


// Закриття модального вікна на кліку на "X"
modalClose.addEventListener('click', closeModal);

// Закриття по кліку на backdrop
modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

