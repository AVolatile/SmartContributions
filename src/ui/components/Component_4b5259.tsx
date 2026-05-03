import React, { useState } from 'react';

export const Component_4b5259 = () => {
  const [state, setState] = useState(false);
  return <div className="cyber-panel p-4" onClick={() => setState(!state)}>
    System Sync: {state ? 'ACTIVE' : 'IDLE'}
  </div>;
};
