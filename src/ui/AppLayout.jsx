import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    transition: grid-template-columns 0.3s ease;
    grid-template-rows: auto 1fr;
    height: 100vh;
`


const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 2rem 2.5rem 6.5rem;
`

function AppLayout(){

    const [collapse, setCollapse] = useState('26rem')

    function Update(val){
        setCollapse(val)
    }
    
    return(
        <StyledAppLayout width = {collapse}>
            <Header/>
            <Sidebar />
                <Main>
                <Outlet/>
                    
                </Main>
            
        </StyledAppLayout>
    )
}

export default AppLayout;