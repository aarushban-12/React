import React, {useState} from "react";
function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isClicked ? 'Clicked!' : 'Click Me!'}
      </button>
    </div>
  );
}

export default ToggleButton;
