import React, { memo } from 'react';

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  onChange: any;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <label htmlFor={id}>
      <p>{label}</p>
      <input
        id={id}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

export default memo(TextInput);
