import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../IconEm';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small:{
    '--font-size': 14/16 + 'rem',
  },
  large:{
    '--font-size': 18/16 + 'rem'
  }
}

const IconInput = ({
  label,
  icon,
  size,
  width = 250,
  placeholder,
}) => {
  const STYLES = SIZES[size]

  return (
    <WrapperLabel style={STYLES} width={width}>
      <Icon id={icon} />
      <Input type={label} placeholder={placeholder}/>
      <VisuallyHidden>{label}</VisuallyHidden>
    </WrapperLabel>
  );
};

const WrapperLabel = styled.label`
  font-size: var(--font-size);
  display: flex;
  color: ${COLORS.gray700};
  width: ${p=>p.width + 'px'};
  align-items: center;
  gap: 1ex;
  border-bottom: 1px solid ${COLORS.black};
  &:focus-within{
    outline: 1px auto -webkit-focus-ring-color;
    outline-offset: 3px;}
`

const Input = styled.input`
  appearance: none;
  border: none;
  background: transparent;
  font-size: inherit;
  width: 100%;
  &::placeholder{
    color: ${COLORS.gray500}
  }
  &:focus{
    outline: none;
  }
`


export default IconInput;
