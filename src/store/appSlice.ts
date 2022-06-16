import { createSlice } from '@reduxjs/toolkit';
interface IState {
  notifyNumber: number;
  currentUser: string;
  isUserLogin: boolean;
  isHeaderMenuOpen: boolean;
}
const initialState: IState = {
  notifyNumber: 4,
  currentUser: 'Захар Палазник',
  isUserLogin: true,
  isHeaderMenuOpen: false,
};

const appSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    showHideMenu(state) {
      state.isHeaderMenuOpen = !state.isHeaderMenuOpen;
    },
  },
});

export const { showHideMenu } = appSlice.actions;
export default appSlice.reducer;
