import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes"

export const fetchStart = () => {
    return {
        type: FETCH_START
    }
}

export const fetchSuccess = (result) => {
    return {
        type: FETCH_SUCCESS,
        result
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error
    }
}

export const fetchWeather = (citycode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${citycode}.html`;
        dispatch(fetchStart());
        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            
            response.json().then((responseJson) => {
                console.log(responseJson);
                dispatch(fetchSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                dispatch(fetchFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchFailure(error));
        })
    }
}