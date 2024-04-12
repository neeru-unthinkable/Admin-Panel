import { ERRORS, INPUT_NAMES } from "../constants";
import {
  isName,
  isUsername,
  notContainSpace,
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from "./RegexHelpers";

const handleChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleFormChange = (e, formData, setFormData, setFormErrors) => {
  const { name, value } = e.target;
  setFormErrors((prev) => ({ ...prev, [name]: "" }));
  const cloneFormData = { ...formData };
  if (name === INPUT_NAMES.USERNAME && isUsername(value)) {
    cloneFormData[name] = value;
  } else if (name === INPUT_NAMES.NAME && isName(value)) {
    cloneFormData[name] = value;
  } else if (
    name === INPUT_NAMES.EMAIL &&
    notContainSpace(value) &&
    value.length <= 50
  ) {
    cloneFormData[name] = value;
  } else if (
    name === INPUT_NAMES.PASSWORD &&
    value.length <= 20 &&
    notContainSpace(value)
  ) {
    cloneFormData[name] = value;
  } else if (
    name === INPUT_NAMES.CONFIRM_PASSWORD &&
    value.length <= 20 &&
    notContainSpace(value)
  ) {
    cloneFormData[name] = value;
  }
  if (!value.length) {
    cloneFormData[name] = value;
  }
  setFormData(cloneFormData);
};

const handleBlur = (e, formData, setFormData, setFormErrors) => {
  const { name } = e.target;
  let { value } = e.target;
  value = value.trim();
  setFormData((prev) => ({ ...prev, [name]: value }));
  let error = "";
  if (name === INPUT_NAMES.USERNAME && !validateUsername(value)) {
    error = ERRORS.USERNAME_ERROR;
  } else if (name === INPUT_NAMES.NAME && !validateName(value)) {
    error = ERRORS.NAME_ERROR;
  } else if (name === INPUT_NAMES.EMAIL && !validateEmail(value)) {
    error = ERRORS.EMAIL_ERROR;
  } else if (name === INPUT_NAMES.PASSWORD && !validatePassword(value)) {
    error = ERRORS.PASSWORD_ERROR;
  } else if (name === INPUT_NAMES.CONFIRM_PASSWORD) {
    if (validatePassword(value)) {
      if (formData.password !== value) {
        error = ERRORS.PASSWORD_MISMATCH;
      }
    } else {
      error = ERRORS.PASSWORD_ERROR;
    }
  }
  if (error) {
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  }
};

export { handleChange, handleFormChange, handleBlur };
