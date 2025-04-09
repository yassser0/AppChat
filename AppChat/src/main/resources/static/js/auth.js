  // Sélection des éléments DOM
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  // Changement d'onglet
  loginTab.addEventListener('click', function() {
      loginTab.classList.add('active');
      registerTab.classList.remove('active');
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
  });
  
  registerTab.addEventListener('click', function() {
      registerTab.classList.add('active');
      loginTab.classList.remove('active');
      registerForm.classList.add('active');
      loginForm.classList.remove('active');
  });
  
  // Validation du formulaire de connexion
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      let isValid = true;
      
      // Validation de l'email
      if (!validateEmail(email)) {
          document.getElementById('login-email-error').style.display = 'block';
          isValid = false;
      } else {
          document.getElementById('login-email-error').style.display = 'none';
      }
      
      // Validation du mot de passe
      if (password.length < 6) {
          document.getElementById('login-password-error').style.display = 'block';
          isValid = false;
      } else {
          document.getElementById('login-password-error').style.display = 'none';
      }
      
      if (isValid) {
          // Envoi des données au serveur (à implémenter)
          console.log('Login form submitted', { email, password });
          
          // Simulation d'une connexion réussie
          alert('Connexion réussie ! Redirection vers le chat...');
          // Vous pouvez rediriger l'utilisateur vers la page de chat ici
          // window.location.href = 'chat.html';
      }
  });
  
  // Validation du formulaire d'inscription
  registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-confirm-password').value;
      let isValid = true;
      
      // Validation du nom
      if (name.trim() === '') {
          document.getElementById('register-name-error').style.display = 'block';
          isValid = false;
      } else {
          document.getElementById('register-name-error').style.display = 'none';
      }
      
      // Validation de l'email
      if (!validateEmail(email)) {
          document.getElementById('register-email-error').style.display = 'block';
          isValid = false;
      } else {
          document.getElementById('register-email-error').style.display = 'none';
      }
      
      // Validation du mot de passe
      if (password.length < 6) {
          document.getElementById('register-password-error').style.display = 'block';
          isValid = false;
      } else {
          document.getElementById('register-password-error').style.display = 'none';
      }
      
      // Validation de la confirmation du mot de passe
      if (password !== confirmPassword) {
          document.getElementById('register-confirm-password-error').style.display = 'block';
          isValid = false;
      } else {
          document.getElementById('register-confirm-password-error').style.display = 'none';
      }
      
      if (isValid) {
          // Envoi des données au serveur (à implémenter)
          console.log('Register form submitted', { name, email, password });
          
          // Simulation d'une inscription réussie
          alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
          
          // Basculer vers l'onglet de connexion
          loginTab.click();
      }
  });
  
  // Fonction de validation d'email
  function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
  
  