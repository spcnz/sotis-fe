import { CREATED_OPTION, SELECTED_OPTION, SET_OPTIONS, SET_OPTION_RESULTS } from '../actions/ActionTypes';

const initialState = {
    result: JSON.parse(localStorage.getItem("result")),
    all : []
  };

const optionReducer = (state = initialState, action) => {
  let options = [];
  switch (action.type) {
    case SET_OPTION_RESULTS:
      let results = action.payload.map(item => ({...item, options: item.options.map(option => ({ option_id: option.id, checked: false }))}))
      localStorage.setItem("result", JSON.stringify(options));
      return {...state, result : results }
    case SET_OPTIONS:
      
      // options = action.payload.map(option => {
      //   let checked = false;
      //   state.result.forEach(item => {
      //       const found = item.options.find(el => el.option_id == option.id);
      //       if (found)
      //         checked = found.checked;
      //   })
      //   return {...option, checked }
      // })

      return {...state, all: action.payload }
    case CREATED_OPTION:
      return {...state, all : [...state.all, action.payload]}
    case SELECTED_OPTION:
      const { option, item } = action.payload;
      let changedResult = state.result.map(el => {
        if (el.item_id == item) {
          const optionExists = el.options.find(el => el.option_id == option)
          console.log(optionExists);
          if (optionExists) {
            optionExists.checked = true;
          }
          return {...el}
        }
        return el;
      })

      console.log(changedResult, 'ovo se menja')
      localStorage.setItem("result", JSON.stringify(changedResult));
      return {...state, result: changedResult }
    default:
      return state;
  }
};


export default optionReducer;

