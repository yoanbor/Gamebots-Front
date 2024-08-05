export const togglePassword = (passwordInput, setInputType) => {
  if (passwordInput.current) {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  }
};
