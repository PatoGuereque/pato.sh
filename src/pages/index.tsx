import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

export default function Home() {
  return (
    <>
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography>
            Site is a WIP
          </Typography>
        </div>
      </Sheet>
    </>
  );
}
