const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close');
let modalShown = false;

const openModal = () => {
  if (!modalShown) {
    modal.style.display = 'block';
    modalShown = true;
    document.body.style.overflow = 'hidden';
  }
};
const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const openModalOnScroll = () => {
  if (!modalShown && (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', openModalOnScroll);
  }
};

window.addEventListener('scroll', openModalOnScroll);
setTimeout(openModal, 10000);
const btnGet = document.getElementById('btn-get');
btnGet.addEventListener('click', openModal);
