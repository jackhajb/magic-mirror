export const initialState = {

}

export const reducer = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case "FETCH_WEATHER_SUCCESS":
      return( 
        {
          ...state, 
          currentWeather: action.payload
        }
      );

    default:
      return state;
  }
}