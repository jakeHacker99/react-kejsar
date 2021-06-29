import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import vapeSlice from "../features/vape/vapeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    vape: vapeSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
