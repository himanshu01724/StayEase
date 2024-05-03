import styled, {css} from "styled-components";

const Heading = styled.h1`
    
    ${(props) => 
    props.as === 'h1' &&
    css`
    font-style: arial;
    font-weight: 600;
    `}

    ${(props) =>
        props.as === 'h2' &&
        css`
        font-size: 2rem;
        font-weight: 600;
        `
    }

    ${(props) => 
        props.as === "h3" &&
        css`
        font-weight: 200;
        color: #ffffff;
        `
    }
  
`;

export default Heading;