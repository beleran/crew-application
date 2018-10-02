import React, {Component} from 'react';
import CardsTable from './components/CardsTable';
import Filters from './components/Filters';
import styled from 'styled-components';


const AppWrapper = styled.div`
    text-align: center;
    height: 100%;
`;

class App extends Component<> {

    render() {
        return (
                <AppWrapper>
                    <Filters />
                    <CardsTable />
                </AppWrapper>
        );
    }
}


export default App;
