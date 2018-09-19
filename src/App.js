import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.scss';
import CardsTable from './components/CardsTable';
import Loading from './components/Loading';
import { fetchCrew, setStatus } from "./actions/Crew";

class App extends Component {
    componentWillMount() {
        this.props.fetchCrew();
    }
    render() {
        const { crew } = this.props;
        return (
            <div className="App">
                { crew && crew.length ? <CardsTable crew={crew} onStatusChange={this.props.setStatus} /> : <Loading /> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    crew: state.CrewState.crew,
});

const mapDispatchToProps = dispatch => ({
    fetchCrew: () => dispatch(fetchCrew()),
    setStatus: (person, direction) => dispatch(setStatus(person, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
