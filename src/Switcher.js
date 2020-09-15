import React, {useState} from "react";


export default function Switcher({ onCall }) {
  const [on, setOn] = useState(false);

  const call = () => {
    onCall();
    setOn(prevState => !prevState)
  }
  return (
    <div data-testid="switcher-luna" className={`switcher ${on ? 'on' : 'off'}`} onClick={() => call()}>
    Switcher
      <div className={`toggle-button toggle-button_position-${on ? 'left' : 'right'}`} />
  </div>
  );
}

// Switcher.defaultProps = {
//   callback: () => console.log(8787878)
// };
