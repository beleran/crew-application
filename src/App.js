import React, {Component} from 'react';
import './App.scss';
import CardsTable from './components/CardsTable';
import Loading from './components/Loading';

import { APPLIED, STATUSES } from "./common/constants";

class App extends Component {
    constructor() {
        super();

        this.state = {
            crew: [],
        };

        this.setStatus = this.setStatus.bind(this);
    }

    setStatus(person, direction) {
        const crew = [...this.state.crew];
        const index = crew.indexOf(person);
        const status = STATUSES[STATUSES.indexOf(person.status) + direction];

        if (index !== -1 && status) {
            crew.splice(index, 1, Object.assign(crew[index], { status }));
            this.setState({ crew });
        }
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?nat=gb&results=5').then((resource) => {
            return resource.json();
        }).then((response) => {
            this.setState({
                crew: response.results.map(person => Object.assign({}, person, { status: APPLIED })),
            })
        });
    }
    render() {
        const { crew } = this.state;
        return (
            <div className="App">
                { crew && crew.length ? <CardsTable crew={crew} onStatusChange={this.setStatus} /> : <Loading /> }
            </div>
        );
    }
}

export default App;
