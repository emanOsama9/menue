import { configureStore } from "@reduxjs/toolkit";
 import menueslice from './slicemenue'
export let store=configureStore({reducer:{

 menue:menueslice



}})