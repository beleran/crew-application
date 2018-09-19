import { FETCH_CREW, SET_STATUS, SET_FILTERS } from "../actions/Crew";
import { STATUSES } from "../common/constants";

const localStorageValue = localStorage.getItem('savedState');
const initialState = localStorageValue ? JSON.parse(localStorageValue) : { crew: [], filteredCrew: [], filters: {  name: '', city: '' } };

const CrewState = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case FETCH_CREW: {
            const newState = Object.assign({}, state, {
                crew: action.crew,
                filteredCrew: action.crew,
            });
            localStorage.setItem('savedState', JSON.stringify(newState));
            return newState;
        }

        case SET_STATUS: {
            const crew = [...state.crew];
            const index = crew.indexOf(action.person);
            const status = STATUSES[STATUSES.indexOf(action.person.status) + action.direction];

            if (index !== -1 && status) {
                crew.splice(index, 1, Object.assign(crew[index], {status}));
            }
            const newState = Object.assign({}, state, {crew});
            localStorage.setItem('savedState', JSON.stringify(newState));
            return newState;
        }

        case SET_FILTERS: {
            const filteredCrew = state.crew.filter((person) => {
                if (action.filters.name) {
                    return `${person.name.first} ${person.name.last}`.search(action.filters.name) !== -1;
                }
                if (action.filters.city) {
                    return person.city.search(action.filters.city) !== -1;
                }
                return true;
            });
            const newState = Object.assign({}, state, { filteredCrew, filters: action.filters});
            localStorage.setItem('savedState', JSON.stringify(newState));
            return newState;
        }

        default:
            return state;
    }
}

export default CrewState;
