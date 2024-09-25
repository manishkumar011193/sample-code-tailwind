import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function () {
  return (
    <div 
      className="w-full h-screen flex justify-center items-center border-0 border-black border-solid"
    >
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack>
    </div>
  );
}