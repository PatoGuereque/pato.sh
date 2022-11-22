import React from 'react';
import { Box, Textarea, Typography } from '@mui/joy';

interface Props {
  title: string;
  inputLabel: string;
  outputLabel: string;
  mappingFunc: (input: string) => string;
}

const InputOutput = ({
  title,
  inputLabel,
  outputLabel,
  mappingFunc,
}: Props) => {
  const [inputText, setInputText] = React.useState('');

  return (
    <Box
      sx={{
        p: 4,
        mx: {
          xs: 4,
          md: 'auto',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 2,
        }}
        color="primary"
      >
        {title}
      </Typography>

      <Typography>{inputLabel}</Typography>
      <Textarea
        minRows={10}
        maxRows={10}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        size="lg"
        sx={{
          mb: 2,
        }}
      />

      <Typography>{outputLabel}</Typography>
      <Textarea
        value={mappingFunc(inputText)}
        minRows={10}
        maxRows={10}
        size="lg"
      />
    </Box>
  );
};

export default InputOutput;
