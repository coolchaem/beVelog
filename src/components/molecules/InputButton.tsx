import React, { useCallback, useState } from 'react';
import { jsx } from '@emotion/react';
import Button from '../atoms/Button';

interface InputButtonProps {
  btnLabel: string;
  inputPlachodler: string;
  onResult: (result: string) => void;
}

const InputButton = (props: InputButtonProps) => {
  const [value, setValue] = useState<string>('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    props.onResult(value);
    setValue('');
  }, [value, props]);

  return (
    <div
      css={{
        display: 'flex',
      }}
    >
      <input placeholder={props.inputPlachodler} name="name" onChange={onChange} value={value} />
      <Button label={props.btnLabel} onClick={onClick} />
    </div>
  );
};

export default InputButton;
