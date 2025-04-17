async function loadPartials() {
    try {
      const navbar = await fetch('../navbar.html').then(res => res.text());
      const footer = await fetch('../footer.html').then(res => res.text());
  
      // Injecter navbar au tout début du body
      document.body.insertAdjacentHTML('afterbegin', navbar);
  
      // Injecter footer à la fin du body
      document.body.insertAdjacentHTML('beforeend', footer);
    } catch (error) {
      console.error("Erreur de chargement des partials :", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadPartials);
  