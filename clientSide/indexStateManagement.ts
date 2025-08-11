import { createAction, createReducer, configureStore } from "npm:@reduxjs/toolkit";

interface State {
  index: number;
  maxIndex?: number;
}

const initialState: State = { index: 0 };
const incrementIndex = createAction("index/increment");
const decrementIndex = createAction("index/decrement");
const setIndex = createAction<number>("index/set");
const setMaxIndex = createAction<number>("maxIndex/set");

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementIndex, (state) => {
    if((state.index + 1) <= Number(state.maxIndex)) {
      state.index++;
    }
  });
  builder.addCase(decrementIndex, (state) => {
    if((state.index - 1) >= 0) {
      state.index--;
    }
  });
  builder.addCase(setIndex, (state, action) => {
    state.index = action.payload;
  });
  builder.addCase(setMaxIndex, (state, action) => {
    state.maxIndex = action.payload;
  });
});

const store = configureStore({
  reducer,
  devTools: false
});

export { incrementIndex, decrementIndex, setMaxIndex, store };