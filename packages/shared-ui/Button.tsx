// packages/shared-ui/Button.tsx
import React from "react";

export function Button(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const [count, setCount] = React.useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        props.onClick();
      }}
    >
      {props.children} {count}
    </button>
  );
}
export default Button;
