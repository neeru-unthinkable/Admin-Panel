import ROUTES from "./routes";

const CONSTANTS = {
    SIGNUP: 'Sign Up',
    TO_CONTINUE: 'to continue',
    SIGNUP_AND_CONTINUE: 'Sign up and Continue', 
    USERNAME: 'username',
    SIGNIN_TEXT:'Already a user? ',
    SIGNIN_AND_MANAGE: 'Sign in and manage your account', 
    SIGNIN: 'Sign in', 
    SIGNUP_TEXT:'Not a user yet? ',
    HELPER_TEXT_USERNAME: 'Note: Please enter username without @pinelabs.com', 
    FOOTER:'Copyright ©2022, Lending. All right reserved.',
    WARNING:'You must log in to access this page.', 
    OFFLINE: 'Offline !', 
    INTERNET_LOST:'Internet connection lost',
    CHECK_CONNECTION:'Please check your internet connection and reload your page.',
    RELOAD:'Reload',   
    TOOLTIP:'The password must conatin atleast one uppercase, one lowercase and a number.'
};

const ERRORS = {
    ERROR_CODE:'404', 
    PAGE_NOT_FOUND:'Uhh! Page not found', 
    PAGE_MOVED:'Maybe this moved? Got Deleted?',
    HIDING_QUARANTINE:'Is hiding out in quarantine?',
    PERMISSION:'Maybe you do not have the permission to view this.',
    USERNAME_ERROR: 'Please Enter valid username', 
    NAME_ERROR:'Please Enter valid name',
    EMAIL_ERROR:'Please Enter valid email', 
    PASSWORD_ERROR: 'Please Enter valid password', 
    CONFIRM_PASSWORD_ERROR:'Please Enter valid  password', 
    PASSWORD_MISMATCH: 'Paaswords do not match',
    SOMETHING_WENT_WRONG: 'Something went wrong.',
    SURNAME_ERROR: 'Please enter a valid surname.',
    BIRTHYEAR_ERROR: 'Please enter a valid birthyear'

}

const INPUT_NAMES = {
    USERNAME: 'username',
    EMAIL: 'email',
    PASSWORD: 'password',
    NAME: 'name',
    CONFIRM_PASSWORD: 'confirmPassword',
    SURNAME: 'surname', 
    BIRTHYEAR: 'birthYear'
};

const CTA_LABELS = {
    SIGNUP: 'SIGN UP', 
    SIGNIN: 'SIGN IN',
};

const IMAGE_URLS = {
    BACKGROUND_URL:'assets/login_bg.svg', 
    NO_SERVICE:'assets/noService.svg' ,
    NO_DATA:'assets/noDataWeb.svg', 
    WARNING:'assets/loginWarning.png'
};

const INPUT_LABELS = {
    NAME: 'Name', 
    USERNAME: 'Username', 
    EMAIL: 'Email' ,
    PASSWORD: 'Password', 
    CONFIRM_PASSWORD: 'Confirm Password',
    SURNAME: 'Surname', 
    BIRTHYEAR: 'Birthyear' 
};

const VARIANTS = {
    OUTLINED: 'outlined',
    CONTAINED: 'contained',
    TEXT: 'text',
};

const AUTH_CONFIG = {
    AUTH_SESSION_INFO : 'auth_session_info',
    ADMIN_STORAGE: 'admin_storage',
    NON_AUTHENTICATED_ROUTES: [ROUTES.LOGIN, ROUTES.SIGNUP, ROUTES.LOGOUT],

}

const TOOLTIP = {
    ADD_USER: 'Add user', 
    DELETE_USER: 'Delete User'
}

export {
    CONSTANTS,
    INPUT_NAMES,
    CTA_LABELS,
    IMAGE_URLS,
    VARIANTS,
    INPUT_LABELS, 
    ERRORS,
    AUTH_CONFIG, 
    TOOLTIP
};