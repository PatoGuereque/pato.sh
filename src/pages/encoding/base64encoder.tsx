import React from 'react';
import InputOutput from '../../components/InputOutput';

const encode = (input: string) => Buffer.from(input).toString('base64');

const Base64Encoder = () => (
  <InputOutput
    title="Base64 Encoder"
    inputLabel="Enter something to encode to base64"
    outputLabel="Base64 output here"
    mappingFunc={encode}
  />
);

export default Base64Encoder;
