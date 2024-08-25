let form = document.getElementById('contact-form');

const resetForm = (form) => {
  form.reset();
  form.querySelector('input').focus();
}

window.resetForm = resetForm;
