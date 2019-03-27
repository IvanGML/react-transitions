import styled from 'styled-components';

// :root {
//     --toggler-width: 120px;
//     --toggler-height: 40px;
//     --toggler-bg-color: #ffbf00;
//     --toggler-active-bg-color: #ffcf40;
//     --menu-starting-top: 0px;
//     --menu-ending-top: 45px;
//     --menu-width: 200px;
//     --menu-max-height: 200px;
//     --menu-bg-color: #ffdc73;
//     --fade-from-color: transparent;
//     --fade-to-color: black;
//     --timeout: 350ms;
//   }
  
//   .container {
//     position: relative;
//   }
  
export const Toggler = styled.button`
    position: relative;
    z-index: 2;
    width: var(--toggler-width);
    height: var(--toggler-height);
    background-color: var(--toggler-bg-color);
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: background-color 350ms;
`;
  
//   .toggler--active {
//     background-color: var(--toggler-active-bg-color);
//   }
  
//   .menu {
//     position: absolute;
//     top: var(--menu-ending-top);
//     z-index: 1;
//     box-sizing: border-box;
//     width: var(--menu-width);
//     padding: 0 20px;
//     overflow: hidden;
//     background-color: var(--menu-bg-color);
//     border-radius: 5px;
//   }
  
//   .list {
//     padding: 0;
//     list-style-type: none;
//   }
  
//   .list-item {
//     padding: 5px 0;
//   }
  
//   /* plain animation with appearance 
  
//   .balloon-enter {
//   opacity: 0;
//   }
  
//   .balloon-enter-active {
//   opacity: 1;
//   transition: all var(--timeout);
//   }
  
//   .balloon-exit {
//   opacity: 1;
//   }
  
//   .balloon-exit-active {
//   opacity: 0;
//   transition: all var(--timeout);
//   }*/
  
//   /* swipe to top menu animation */
  
//   .balloon-enter,
//   .balloon-appear {
//     top: var(--menu-starting-top);
//     width: var(--toggler-width);
//     max-height: var(--toggler-height);
//     color: var(--fade-from-color);
//     background-color: var(--toggler-bg-color);
//     z-index: 3;
//   }
  
//   .balloon-enter-active,
//   .balloon-appear-active {
//     top: var(--menu-ending-top);
//     width: var(--menu-width);
//     max-height: var(--menu-max-height);
//     color: var(--fade-to-color);
//     background-color: var(--menu-bg-color);
//     transition: all var(--timeout);
//   }
  
//   .balloon-exit {
//     top: var(--menu-ending-top);
//     width: var(--menu-width);
//     max-height: var(--menu-max-height);
//     color: var(--fade-to-color);
//     background-color: var(--menu-bg-color);
//   }
  
//   .balloon-exit-active {
//     top: var(--menu-starting-top);
//     width: var(--toggler-width);
//     max-height: var(--toggler-height);
//     color: var(--fade-from-color);
//     background-color: var(--toggler-bg-color);
//     transition: all var(--timeout);
//   }
  
//   .highlighted a {
//     color: #29970d;
//     transition: all var(--timeout);
//   }
  
//   .swipe-container {
//     position: absolute;
//   }
  
//   .swipe-enter {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
  
//   .swipe-enter-active {
//     transform: translateY(0%);
//     opacity: 1;
//     transition: all 500ms;
//   }
  
//   .swipe-exit {
//     transform: translateY(0%);
//     opacity: 1;
//   }
  
//   .swipe-exit-active {
//     transform: translateY(100%);
//     opacity: 0;
//     transition: all 500ms;
//   }