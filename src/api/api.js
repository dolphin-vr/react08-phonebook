import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const setAuthHeader = token => {
   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
 };
 
 export const clearAuthHeader = () => {
   axios.defaults.headers.common.Authorization = '';
 };

export const serviceSignUp = user=>axios.post("/users/signup", user);
export const serviceLogIn = user=>axios.post("/users/login", user);
export const serviceLogOut = () => axios.post("/users/logout");
export const serviceRefresh = () => axios.get("/users/current");

export const serviceGetContacts = ()=>axios.get("/contacts");
export const serviceAddContact = contact=>axios.post("/contacts", contact);
export const serviceDeleteContact = id=>axios.delete(`/contacts/${id}`);
export const serviceChangeContact = contact=>axios.put(`/contacts/${contact.id}`, {contact});