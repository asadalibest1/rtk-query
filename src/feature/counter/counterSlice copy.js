import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';


const initialState = {
  value: [],
  status: 'idle',
};

async function getData() {
  const response = await fetch('http://localhost:3001/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return await response.json();
}

export const incrementAsync = createAsyncThunk(
  'api/list',
  async () => {
    return await getData()
  }
);

export const addAsync = createAsyncThunk(
  'api/add',
  async (data) => {
    return await fetch('http://localhost:3001/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {

    setexpense: (state, action) => {
      state.value = action.payload;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(addAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAsync.fulfilled, (state, action) => {
          const data = action.meta.arg;
          state.value = data 
      });
  },
});

export const { addexpense, setexpense, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export const incrementIfOdd = (amount) => (dispatch, getState) => {

  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
