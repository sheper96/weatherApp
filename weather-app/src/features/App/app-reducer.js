const initialState = {
    status: 'idle', 
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export const setAppStatusAC = (status) => ({type: 'APP/SET-STATUS', status})


