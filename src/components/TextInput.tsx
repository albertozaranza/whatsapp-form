import React, { memo } from 'react';

interface TextInputProps {
  label: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label }: TextInputProps) => {
  return (
    <label htmlFor={id}>
      <p>{label}</p>
      <input id={id} type="text" />
    </label>
  );
};

export default memo(TextInput);
