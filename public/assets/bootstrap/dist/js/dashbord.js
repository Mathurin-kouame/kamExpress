

document.addEventListener('DOMContentLoaded', function() {
    // Exemple de données d'inscription (peut être remplacé par des données dynamiques provenant d'une base de données)
    var inscriptions = [
      { id: 1, nom: 'John Doe', email: 'john@example.com', telephone: '123456789', personnes: 10, date: '2023-07-10' },
      { id: 2, nom: 'Jane Smith', email: 'jane@example.com', telephone: '987654321', personnes: 5, date: '2023-07-15' },
      // Ajoutez d'autres enregistrements d'inscription ici
    ];
  
    // Récupérer le tableau du DOM
    var tbody = document.querySelector('tbody');
  
    // Générer les lignes de tableau pour chaque inscription
    inscriptions.forEach(function(inscription) {
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + inscription.nom + '</td>' +
                      '<td>' + inscription.email + '</td>' +
                      '<td>' + inscription.telephone + '</td>' +
                      '<td>' + inscription.personnes + '</td>' +
                      '<td>' + inscription.date + '</td>' +
                      '<td class="actions">' +
                      '<button class="btn-edit" data-id="' + inscription.id + '">Modifier</button>' +
                      '<button class="btn-delete" data-id="' + inscription.id + '">Supprimer</button>' +
                      '</td>';
      tbody.appendChild(row);
    });
  
    // // Gestionnaire d'événement pour les boutons de suppression
    
    // tbody.addEventListener('click', function(event) {
    //   if (event.target.classList.contains('btn-delete')) {
    //     var
  