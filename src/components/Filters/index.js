import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilters } from "../../actions/Crew";

import { FiltersWrapper, GroupWrapper } from './styled';

class Filters extends Component<{ filters: PersonFilters, setFilters: Function }> {
    name: HTMLInputElement;
    city: HTMLInputElement;

    setFilters(e) {
        this.props.setFilters({ name: this.name.value, city: this.city.value });
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    resetFilters(e) {
        this.props.setFilters({ name: '', city: '' });
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    render() {
        const { filters } = this.props;
        return (
            <form onSubmit={(e) => this.setFilters(e)}>
                <FiltersWrapper>
                    <GroupWrapper>
                        Name:&nbsp;
                        <input
                            type="text"
                            ref={(ref: HTMLInputElement | null) => { ref && (this.name = ref); }}
                            defaultValue={filters.name}
                        />
                    </GroupWrapper>
                    <GroupWrapper>
                        City:&nbsp;
                        <input
                            type="text"
                            ref={(ref: HTMLInputElement | null) => { ref && (this.city = ref); }}
                            defaultValue={filters.city}
                        />
                    </GroupWrapper>
                    <GroupWrapper><button type="submit" onClick={(e) => this.setFilters(e)}>Filter</button></GroupWrapper>
                    <GroupWrapper><button onClick={(e) => this.resetFilters(e)}>Reset</button></GroupWrapper>
                </FiltersWrapper>
            </form>
        )
    }
}

const mapStateToProps = (state: Object) => ({
    filters: state.CrewState.filters,
});

const mapDispatchToProps = (dispatch: Function) => ({
    setFilters: (filters) => dispatch(setFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
