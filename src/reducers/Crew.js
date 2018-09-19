import { FETCH_CREW, SET_STATUS } from "../actions/Crew";
import { STATUSES } from "../common/constants";

const initialState = JSON.parse(localStorage.getItem('savedState') || '{"crew":[]}');

const CrewState = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case FETCH_CREW: {
            const newState = Object.assign({}, state);
            newState.crew = action.crew;
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

        default:
            return state;
    }
}

export default CrewState;
