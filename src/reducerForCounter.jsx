function reducer(state, action) {
    if (action === 'increase_count') {
        return state + 1;
    } else if (action === 'decrease_count') {
        return state - 1;
    }
    else {
        return state;
    }
}


export default reducer