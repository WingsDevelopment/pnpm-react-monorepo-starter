// packages/shared-ui/Button.tsx
import React from "react";

export function Button(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <button onClick={() => props.onClick()}>{props.children}</button>;
}
export default Button;
