// Quand la page est bien chargée
document.addEventListener('DOMContentLoaded', function () {

  // On récupère tous les boutons de filtre (en haut)
  const boutons = document.querySelectorAll('.listing__filters button');

  // On récupère toutes les cartes de villas
  const cartes = document.querySelectorAll('.listing__card');

  // Pour chaque bouton
  boutons.forEach(function (bouton) {

    // Quand on clique dessus
    bouton.addEventListener('click', function () {

      // On prend la catégorie du bouton
      const categorieCliquee = bouton.getAttribute('data-category');

      // D'abord, on enlève la couleur active de tous les boutons
      boutons.forEach(function (b) {
        b.classList.remove('active');
      });

      // Puis on ajoute la couleur rouge (classe active) sur le bouton cliqué
      bouton.classList.add('active');

      // Si on a cliqué sur "All"
      if (categorieCliquee === 'all') {
        // On affiche toutes les cartes
        cartes.forEach(function (carte) {
          carte.style.display = 'block';
        });
      } else {
        // Sinon, on filtre les cartes selon la catégorie
        cartes.forEach(function (carte) {

          // On regarde la catégorie de chaque carte
          const categorieCarte = carte.getAttribute('data-category');

          // Si la carte correspond, on l'affiche
          if (categorieCarte === categorieCliquee) {
            carte.style.display = 'block';
          } else {
            // Sinon, on la cache
            carte.style.display = 'none';
          }
        });
      }
    });
  });
});
