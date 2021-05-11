import React from 'react';
import { Progress as _Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

function Progress({ wrapperClassName = '', percent = 60, status = '', type = 'line', ...props }) {
  return (
    <div className={wrapperClassName}>
      <_Progress
        percent={percent}
        status={status}
        type={type}
        theme={{
          success: {
            symbol: '',
            color: '#FF9800',
          },
          active: {
            symbol: '',
            color: '#FF9800',
          },
          default: {
            symbol: '',
            color: '#FF9800',
          },
        }}
        {...props}
      />
    </div>
  );
}

export default Progress;
