// this structure is used because of redux middleware design
export default ({ dispatch }) => next => action => {
    const { payload } = action;

    //Check if action contains promise in payload
    if(!payload || !payload.then){
        return next(action);
    }

    payload.then(response => {
        const newAction = { ...action, payload: response};
        //goes through all middlewares => action - dispatch - middleware - reducer
        dispatch(newAction);
    })
}