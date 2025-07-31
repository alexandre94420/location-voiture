// quand la page est vraiment chargée
document.addEventListener('DOMContentLoaded', function() {

  // on apporte tous les boutons de filtre
  const buttons = document.querySelectorAll('.listing__filters button');

  // on apporte toutes les cartes villas
  const cards = document.querySelectorAll('.listing__card');

  // pour chaque bouton, on ajoute un event clic pour ecouter le bouton
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {

      // On recupere la catégorie que de ce bouton filtre
      const category = button.getAttribute('data-category');

      // si la catégorie cest 'all', on affiche toutes les cartes
      if (category === 'all') {
        cards.forEach(function(card) {
          card.style.display = 'block'; // affichage 
        });
        return; // on sort 
      }

      // sinon on doit filtrer
      cards.forEach(function(card) {

        // ramener la catégorie de la carte
        const cardCategory = card.getAttribute('data-category');

        // Si la carte correspond à la catégorie choisie, on affiche  sinon on cache tout
       
        if (cardCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
