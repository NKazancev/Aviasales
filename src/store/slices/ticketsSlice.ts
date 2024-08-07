import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import fetchResource from 'utils/fetchResource';
import { ITickets } from 'models/ticket';

interface ITicketsState extends ITickets {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  visibleTicketsNumber: number;
}

const initialState: ITicketsState = {
  tickets: [],
  loading: 'idle',
  visibleTicketsNumber: 5,
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId: string, { dispatch, rejectWithValue }) => {
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;

    let isLoaded = false;

    while (!isLoaded) {
      try {
        const data = await fetchResource(url);
        dispatch(addTickets(data.tickets));
        isLoaded = data.stop;
      } catch (error) {
        if (isLoaded)
          if (error instanceof Error) {
            rejectWithValue(error.message);
          }
      }
    }
  }
);

const ticketsSlice = createSlice({
  name: 'Tickets',
  initialState,
  reducers: {
    addTickets(state, action) {
      state.tickets = state.tickets.concat(action.payload);
    },
    showMoreTickets(state) {
      state.visibleTicketsNumber += 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.loading = 'succeeded';
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export default ticketsSlice.reducer;
export const { addTickets } = ticketsSlice.actions;
