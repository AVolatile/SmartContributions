import React, { useState } from 'react';

export const Component_cc6e69 = () => {
  const [state, setState] = useState(false);
  return <div className="cyber-panel p-4" onClick={() => setState(!state)}>
    System Sync: {state ? 'ACTIVE' : 'IDLE'}
  </div>;
};
