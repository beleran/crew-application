import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilters } from "../../actions/Crew";

import './styles.scss';

class Filters extends Component {
    constructor() {
        super();
        this.name = null;
        this.city = null;
    }
    setFilters(e) {
        if (e) {
            e.preventDefault();
        }
        this.props.setFilters({ name: this.name.value, city: this.city.value });
    }
    resetFilters() {
        this.props.setFilters({ name: '', city: '' });
    }
    render() {
        const { filters } = this.props;
        return (
            <form onSubmit={(e) => this.setFilters(e)}>
                <div className="ca-filters">
                    <div>Name: <input type="text" ref={(ref) => { this.name = ref; }} defaultValue={filters.name}  /></div>
                    <div>City: <input type="text" ref={(ref) => { this.city = ref; }} defaultValue={filters.city} /></div>
                    <div><button type="submit" onClick={() => this.setFilters()}>Filter</button></div>
                    <div><button onClick={() => this.resetFilters()}>Reset</button></div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.CrewState.filters,
});

const mapDispatchToProps = dispatch => ({
    setFilters: (filters) => dispatch(setFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
