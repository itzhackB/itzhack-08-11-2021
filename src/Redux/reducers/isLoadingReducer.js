const isLoadingReducer = (state = true, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return false
        default:
            return state
    }
}
export default isLoadingReducer
