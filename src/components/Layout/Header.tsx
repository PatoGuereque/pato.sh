import React from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/joy';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';
import ModeToggle from './ModeToggle';
import Link from 'next/link';

interface Props {
  setDrawerOpen: (state: boolean) => void;
}

const Header = ({ setDrawerOpen }: Props) => (
  <Box
    sx={{
      display: 'flex',
      p: 2,
      gap: 2,
      borderBottom: '1px solid',
      borderColor: 'divider',
      position: 'sticky',
      top: 0,
      zIndex: 1100,
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: '1 0',
        gap: 1.5,
      }}
    >
      <IconButton
        variant="outlined"
        size="sm"
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        size="sm"
        variant="solid"
        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
        component={Link}
        href="/"
      >
        <TerminalIcon />
      </IconButton>
      <Typography component="h1" fontWeight="xl">
        pato.sh
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flex: '1 0',
        justifyContent: 'center',
      }}
    >
      <TextField
        size="sm"
        placeholder="Search tools…"
        color="primary"
        startDecorator={<SearchRoundedIcon color="primary" />}
        endDecorator={
          <IconButton variant="outlined" size="sm" color="neutral">
            <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
              /
            </Typography>
          </IconButton>
        }
        sx={{
          minWidth: '100%',
          maxWidth: '500px',
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0',
        gap: 1.5,
        justifyContent: 'flex-end',
      }}
    >
      <IconButton
        size="sm"
        variant="outlined"
        color="primary"
        sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
      >
        <SearchRoundedIcon />
      </IconButton>

      <ModeToggle />
    </Box>
  </Box>
);

export default Header;
