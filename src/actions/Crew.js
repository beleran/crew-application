import { APPLIED } from "../common/constants";

export const FETCH_CREW = 'FETCH_CREW';
export const SET_STATUS = 'SET_STATUS';
export const SET_FILTERS = 'SET_FILTERS';

export function fetchCrew() {
    return (dispatch: Function) => {
        fetch('https://randomuser.me/api/?nat=gb&results=5')
            .then(resource => resource.json())
            .then(response => {
                dispatch({ type: FETCH_CREW, crew: response.results.map(person => Object.assign({}, person, { status: APPLIED }))})
            })
    }
}

export const setStatus = (person: Person, direction: number) => ({ type: SET_STATUS, person, direction });
export const setFilters = (filters: PersonFilters): Object => ({ type: SET_FILTERS, filters });
