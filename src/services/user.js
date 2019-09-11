export const USER = '';

export const getUser = () => localStorage.getItem(USER);

export const setUser = user =>{ 
    localStorage.setItem(USER, user);
}