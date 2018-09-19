import { APPLIED } from "../common/constants";

export const FETCH_CREW = 'FETCH_CREW';
export const SET_STATUS = 'SET_STATUS';

export function fetchCrew() {
    return (dispatch) => {
        fetch('https://randomuser.me/api/?nat=gb&results=5')
            .then(resource => resource.json())
            .then(response => {
                dispatch({ type: FETCH_CREW, crew: response.results.map(person => Object.assign({}, person, { status: APPLIED }))})
            })
    }
}

export function setStatus(person, direction) {
    return (dispatch) => {
        dispatch({ type: SET_STATUS, person, direction })
    }
}
