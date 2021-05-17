import React from 'react';
import { Progress as _Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

function Progress({
  wrapperClassName = '',
  percent = 60,
  status = '',
  type = 'line',
  color = '#FF9800',
  trailColor = '#343434',
  symbolClassName = 'hidden',
  ...props
}) {
  return (
    <div className={wrapperClassName}>
      <_Progress
        percent={percent}
        status={status}
        type={type}
        symbolClassName={symbolClassName}
        theme={{
          success: {
            symbol: '',
            trailColor,
            color,
          },
          active: {
            symbol: '',
            trailColor,
            color,
          },
          default: {
            symbol: '',
            trailColor,
            color,
          },
        }}
        {...props}
      />
    </div>
  );
}

export default Progress;
