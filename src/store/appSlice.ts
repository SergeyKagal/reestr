import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  firstName: string;
  secondName: string;
  thirdName: string;
  imgUrl: string;
};
interface IState {
  notifyNumber: number;
  currentUser: User | undefined | null;
  isUserLogin: boolean;
  isHeaderMenuOpen: boolean;
  reestrPagesQty: number;
  currentReestrPagenum: number;
}
const initialState: IState = {
  notifyNumber: 4,
  currentUser: {
    firstName: 'Захар',
    secondName: 'Палазник',
    thirdName: 'Геннадьевич',
    imgUrl: './assets/images/user-img.png',
  },
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
    userLogOut(state) {
      state.currentUser = null;
    },
    userLogIn(state) {
      state.currentUser = {
        firstName: 'Захар',
        secondName: 'Палазник',
        thirdName: 'Геннадьевич',
        imgUrl: './assets/images/user-img.png',
      };
    },
  },
});

export const { showHideMenu, setCurrentReestrPage, userLogOut, userLogIn } = appSlice.actions;
export default appSlice.reducer;
