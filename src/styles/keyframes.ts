import { keyframes } from "@emotion/react";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  20% { background-position: 100% 50%; }
  50% { background-position: 200% 80%; }
  70% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


const shine = keyframes`
0% {
 filter: brightness(100%);
}
50% {
 filter: brightness(200%);
}
100% {
 filter: brightness(100%);
}
`;

const spin = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

export const keyframesAnimations = {gradient, shine, spin}