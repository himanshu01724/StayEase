import styled from "styled-components"
import Logo from './Logo'
import MainNav from './MainNav'


const SideBar = styled.aside`
    background-color: var(--color-grey-0);
    border-right: var(--color-grey-100);
    padding: 2rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap:3.6rem;
    position: relative;
    
    
`

const ButtonPosition = styled.button`
top:70%;
position: absolute;
right: ${props => props.sidebarWidth === 0 ? '0' : '-0.1rem'};
transition: right 0.3 ease;
border: none;
background-color: inherit;

&:focus{
    border: none;
    outline: none;
}

`

function Sidebar({collapse, callBack}){

    function ToggleClick(){
        if(collapse === '26rem'){
            console.log('first interaction')
            callBack('13rem')
        }
        else{
            callBack('26rem')
        }
    }

    return(
        <SideBar>
            <Logo/>
            <MainNav/>
            <ButtonPosition sidebarWidth = {collapse} onClick={() => ToggleClick()}>{collapse == '26rem' ? '>':'<'}</ButtonPosition>
        </SideBar>
    )
}

export default Sidebar