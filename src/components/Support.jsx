import { useState } from "react";
export default () => {
  const [count, setCount] = useState(0);
  //const displayedCount = {new count };
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {
        /* (() => {
          if (count === 0)
          {
            return "First time!";
          } else
          {
            return `Clicked ${count} times`;
          }
        })() */
        count === 0 ? "First time!" : `Clicked ${count} times`
      }
    </button>
  );
};
