import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardsTable from './components/CardsTable';
import Filters from './components/Filters';
import Loading from './components/Loading';
import { fetchCrew, setStatus } from "./actions/Crew";
import styled from 'styled-components';

const AppWrapper = styled.div`
    text-align: center;
    height: 100%;
`;

class App extends Component<{ crew: Person[], filteredCrew: Person[], fetchCrew: Function, setStatus: Function }> {
    componentDidMount() {
        const { crew } = this.props;
        if (!crew || !crew.length) {
            this.props.fetchCrew();
        }
    }
    render() {
        const { crew, filteredCrew } = this.props;
        return (
            <AppWrapper>
                <Filters />
                { crew && crew.length ? <CardsTable crew={filteredCrew} onStatusChange={this.props.setStatus} /> : <Loading /> }
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state: Object) => ({
    crew: state.CrewState.crew,
    filteredCrew: state.CrewState.filteredCrew,
});

const mapDispatchToProps = (dispatch: Function) => ({
    fetchCrew: () => dispatch(fetchCrew()),
    setStatus: (person, direction) => dispatch(setStatus(person, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
