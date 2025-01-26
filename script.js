document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.btn-open');
    openButton.addEventListener('click', () => {
      alert("Les horaires d'ouverture : 9:30 à 19:30");
    });
  
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
      });
  
      card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      });
    });
  });
