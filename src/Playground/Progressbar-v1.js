
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--border-radius": '4px',
    "--height": '8px'
  },
  medium: {
    "--border-radius": '4px',
    "--height": '12px'
  },
  large: {
    "--border-radius": '8px',
    "--height": '24px',
    "--padding": '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const STYLES = SIZES[size];

  return (
    <>
      <label>
        <VisuallyHidden>Loading Progress</VisuallyHidden>

        <ProgressBarEl determinate role="progressbar" style={STYLES} max='100' value={value}>
          {value}
        </ProgressBarEl>
      </label>
    </>
  );
};



const ProgressBarEl = styled.progress`
  appearance: none;
  border: none;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35}; 
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  max-width: 370px;
  height: var(--height);
  padding: var(--padding);
  &::-webkit-progress-value{
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
    border-top-right-radius: ${p => p.value > 99 && '4px'};
    border-bottom-right-radius:${p => p.value > 99 && '4px'};
  }
  &::-webkit-progress-bar{
    background-color: ${COLORS.transparentGray15};
  }

`

export default ProgressBar;
