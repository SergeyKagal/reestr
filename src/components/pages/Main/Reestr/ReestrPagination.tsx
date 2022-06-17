import React, { useState } from 'react';
import { reestrLength } from '../../../../constants/mocks/reest-data-mock';
import { Pagination } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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
const pageNumsInitial = reestrLength;

export const ReestrPagination = () => {
  const [pageNum, setPagenum] = useState(1);

  return (
    <div className="pagination">
      <ThemeProvider theme={theme}>
        <Pagination
          count={pageNumsInitial}
          shape="rounded"
          color="primary"
          showFirstButton
          showLastButton
          page={pageNum}
          onChange={(_, num) => setPagenum(num)}
        ></Pagination>
      </ThemeProvider>
    </div>
  );
};
