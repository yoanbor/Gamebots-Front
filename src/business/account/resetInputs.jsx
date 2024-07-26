export const resetInputs = (setPseudo, setEmail, setPassword, setPhoneNumber, defaultPseudo, defaultEmail, defaultPhoneNumber) => {
    setPseudo(defaultPseudo);
    setEmail(defaultEmail);
    setPassword('');
    setPhoneNumber(defaultPhoneNumber);
};