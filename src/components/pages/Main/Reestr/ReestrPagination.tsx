import { Pagination } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '../../../../hook';
import { setCurrentReestrPage } from '../../../../store/appSlice';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope',
    fontWeightMedium: 700,
    fontSize: 18,
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009cb4',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

export const ReestrPagination = () => {
  const dispatch = useAppDispatch();
  const { currentReestrPagenum, reestrPagesQty } = useAppSelector((state) => state.app);
  return (
    <div className="pagination">
      <ThemeProvider theme={theme}>
        <Pagination
          count={reestrPagesQty}
          shape="rounded"
          color="primary"
          showFirstButton
          showLastButton
          page={currentReestrPagenum}
          onChange={(_, num) => {
            dispatch(setCurrentReestrPage(num));
          }}
        ></Pagination>
      </ThemeProvider>
    </div>
  );
};
