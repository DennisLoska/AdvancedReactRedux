import tv4 from 'tv4';
import stateSchema from './schemas/stateSchema';


export default ({ dispatch, getState }) => next => action => {
    next(action)
    
    const isValid = tv4.validate(getState(), stateSchema);

    if(!isValid){
        console.warn('Warning: State got filled with invalid value!');
    }
}