import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IState {
  notifyNumber: number;
  currentUser: string;
  isUserLogin: boolean;
  isHeaderMenuOpen: boolean;
  reestrPagesQty: number;
  currentReestrPagenum: number;
}
const initialState: IState = {
  notifyNumber: 4,
  currentUser: 'Захар Палазник',
  isUserLogin: true,
  isHeaderMenuOpen: false,
  reestrPagesQty: 58,
  currentReestrPagenum: 1,
};

const appSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    showHideMenu(state) {
      state.isHeaderMenuOpen = !state.isHeaderMenuOpen;
    },
    setCurrentReestrPage(state, action: PayloadAction<number>) {
      state.currentReestrPagenum = action.payload;
    },
  },
});

export const { showHideMenu, setCurrentReestrPage } = appSlice.actions;
export default appSlice.reducer;
