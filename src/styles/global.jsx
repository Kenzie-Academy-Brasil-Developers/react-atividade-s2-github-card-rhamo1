import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.boxStyle{
    flex-direction: column;
    justify-content: center;
    color: #000;

    border: 3px solid;
    padding: 1em 1em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;

}

.miniCardsContainer{
    display: flex;
    flex-direction: column;
     margin: 1rem;
     padding: 1rem; 
     align-items: center;

}

.miniCard{
    margin: 3px;
    display: flex;
    flex-direction: row;
    /* height: 100px; */
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
        cursor: pointer;

}

.miniCard img{
    height: 78px;
    
}

.cardText{
    display: flex;
    flex-direction: column;
    height: 80px;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
}


.flexContainer{
    display: flex;

}



/* CSS */
.button {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 1em 1em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button {
    padding: 0.25em 0.75em;
  }
}
`;
