//générateur MDP

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('generer').addEventListener('click', genererMotDePasse);
   
});

function genererMotDePasse() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    const longueur = 16; // Longueur du mot de passe
    
    let motDePasse = "";
    for (let i = 0; i < longueur; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[index];
    }

    document.getElementById('motDePasse').value = motDePasse;
}

//Formulaire 
function detectLoginForms() {
    // Rechercher les champs de nom d'utilisateur et de mot de passe
    const usernameInputs = document.querySelectorAll('form input[type="text"]');
    const passwordInputs = document.querySelectorAll('form input[type="password"]');
    // Parcourir les champs de mot de passe et ajouter des écouteurs d'événements
    passwordInputs.forEach((passwordInput) => {
      // Rechercher le champ de nom d'utilisateur associé dans le même formulaire
      const usernameInput = usernameInputs.find((input) => input.form === passwordInput.form);
      if (usernameInput) {
        // Écouteur d'événements pour le champ de mot de passe
        passwordInput.addEventListener('input', (event) => {
          const username = usernameInput.value;
          const password = passwordInput.value;
          // Enregistrer les informations de connexion (à implémenter)
          saveLoginCredentials(username, password);
        });
      }
    });
  }
  // Appeler la fonction pour détecter les formulaires de connexion
  detectLoginForms();