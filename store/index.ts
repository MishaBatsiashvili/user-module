import { configureStore } from '@reduxjs/toolkit';
import { iconslice } from './example-slice';

// config the store
const store = configureStore({
   reducer: {
      icon: iconslice.reducer,
   },
});

// export default the store
export default store;
