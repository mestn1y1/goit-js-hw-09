const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const updateFormData = () => {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedData) {
  formData.email = storedData.email;
  formData.message = storedData.message;
  emailInput.value = storedData.email;
  messageInput.value = storedData.message;
}

form.addEventListener('input', evt => {
  const target = evt.target;
  if (target === emailInput || target === messageInput) {
    updateFormData();
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
