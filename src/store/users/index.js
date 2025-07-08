   // store.js
   import { configureStore } from '@reduxjs/toolkit';
   import usersReducer from '../users/usersSlice1'; // Путь к вашему usersSlice

   const store = configureStore({
     reducer: {
       users: usersReducer, // Добавьте ваш usersReducer
     },
   });

   export default store;
   
