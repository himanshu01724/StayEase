import styled, {css} from "styled-components";

const Row = styled.div`
    display:flex;
    ${(props) => 
        props.type === 'horizontal' &&
            css`
                display: flex;
                justify-content: space-around;
                align-items: center;
                
            `
    }
        ${(props) => 
            props.type === 'vertical' &&
            css`
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
            `
        }
    
`

export default Row;