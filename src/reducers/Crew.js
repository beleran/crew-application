import { FETCH_CREW, SET_STATUS } from "../actions/Crew";
import { STATUSES } from "../common/constants";

const initialState = {
    crew: [],
};

const CrewState = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case FETCH_CREW:
            const newState = Object.assign({}, state);
            newState.crew = action.crew;
            return newState;

        case SET_STATUS:
            const crew = [...state.crew];
            const index = crew.indexOf(action.person);
            const status = STATUSES[STATUSES.indexOf(action.person.status) + action.direction];

            if (index !== -1 && status) {
                crew.splice(index, 1, Object.assign(crew[index], { status }));
            }
            return Object.assign({}, state, { crew });

        default:
            return state;
    }
}

export default CrewState;
