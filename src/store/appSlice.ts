import { createSlice } from '@reduxjs/toolkit';
interface IState {
  notifyNumber: number;
  currentUser: string;
  isUserLogin: boolean;
}
const initialState: IState = {
  notifyNumber: 4,
  currentUser: 'Захар Палазник',
  isUserLogin: true,
};

const appSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;
export default appSlice.reducer;
