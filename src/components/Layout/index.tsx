import { Box, Sheet } from '@mui/joy';
import React, { useState } from 'react';
import Drawer from './Drawer';
import Header from './Header';
import Navigation from './Navigation';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />
      {drawerOpen && (
        <Drawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Drawer>
      )}
      <Box
        sx={{
          position: 'fixed',
          height: '100%',
          display: {
            xs: 'none',
            md: 'inherit',
          },
        }}
      >
        <Sheet
          sx={{
            minWidth: 256,
            width: 'max-content',
            height: '100%',
            p: 2,
            boxShadow: 'lg',
          }}
        >
          <Navigation />
        </Sheet>
      </Box>

      <Box
        sx={{
          ml: {
            xs: 0,
            md: '256px',
          },
        }}
      >
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
