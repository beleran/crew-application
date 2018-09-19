import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.scss';
import CardsTable from './components/CardsTable';
import Filters from './components/Filters';
import Loading from './components/Loading';
import { fetchCrew, setStatus } from "./actions/Crew";

class App extends Component {
    componentDidMount() {
        const { crew } = this.props;
        if (!crew || !crew.length) {
            this.props.fetchCrew();
        }
    }
    render() {
        const { crew, filteredCrew } = this.props;
        return (
            <div className="App">
                <Filters />
                { crew && crew.length ? <CardsTable crew={filteredCrew} onStatusChange={this.props.setStatus} /> : <Loading /> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    crew: state.CrewState.crew,
    filteredCrew: state.CrewState.filteredCrew,
});

const mapDispatchToProps = dispatch => ({
    fetchCrew: () => dispatch(fetchCrew()),
    setStatus: (person, direction) => dispatch(setStatus(person, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
