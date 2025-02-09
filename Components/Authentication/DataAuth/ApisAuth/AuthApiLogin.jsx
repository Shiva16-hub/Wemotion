const AuthApiLogin = {
    login: async (email, password) => {
      try {
        const response = await fetch('https://api.wemotions.app/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mixed: email, // Assuming "mixed" can be either email or username
            password: password,
            app_name: 'wemotions',
          }),
        });
        const data = await response.json();
        return { ok: response.ok, data };
      } catch (error) {
        console.error('API Error:', error);
        return { ok: false, data: null };
      }
    },
  };
  
  export default AuthApiLogin;
  