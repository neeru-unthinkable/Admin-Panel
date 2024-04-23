const validatePassword = (password) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(password);

const validateEmail = (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)(\.\w{2,6})+$/.test(email);

const validateName = (name) => /[a-zA-Z ]/.test(name);

const validateUsername = (username) => /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(username);

const isUsername = (username) => /^[a-zA-Z0-9_.]{0,20}$/i.test(username);

const isName = (name) => /^[a-zA-Z ]{0,20}$/.test(name); 

const notContainSpace = (value) =>  /^\S+$/i.test(value)

const isBirthYear = (value) => /^(19|20)\d{2}$/.test(value)

export {validateEmail, validateName, validatePassword, validateUsername, isUsername, isName, notContainSpace, isBirthYear};