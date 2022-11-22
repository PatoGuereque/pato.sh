import React from 'react';
import InputOutput from '../../components/InputOutput';

const decode = (input: string) => Buffer.from(input, 'base64').toString('utf8');

const Base64Decoder = () => (
  <InputOutput
    title="Base64 Decoder"
    inputLabel="Enter something to decode from base64"
    outputLabel="UTF-8 output here"
    mappingFunc={decode}
  />
);

export default Base64Decoder;
