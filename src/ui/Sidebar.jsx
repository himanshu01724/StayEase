import styled from "styled-components"
import Logo from './Logo'
import MainNav from './MainNav'
import { getCabins } from "../services/apiCabins"
import { useEffect } from "react"

const SideBar = styled.aside`
    background-color: var(--color-grey-0);
    border-right: var(--color-grey-100);
    padding: 2rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap:3.6rem;
    
    
    
`



function Sidebar({collapse, callBack}){

    // useEffect( ()=>{
    // getCabins().then((data) => console.log(data))
    // },[])
    

    

    return(
        <SideBar>
            <Logo/>
            <MainNav/>
        </SideBar>
    )
}

export default Sidebar