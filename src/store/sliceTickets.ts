import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ITicket {
  id: number;
  price: number;
  destinationsThere: string;
  destinationsBack: string;
  timeThere: string;
  totalTimeThere: string;
  timeBack: string;
  totalTimeBack: string;
  transfersNumberThere: number;
  transferPlacesThere: string;
  transfersNumberBack: number;
  transferPlacesBack: string;
}

export interface ITickets {
  tickets: Array<ITicket>;
}

interface ITicketsState extends ITickets {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ITicketsState = {
  tickets: [],
  loading: 'idle',
};

const sliceTickets = createSlice({
  name: 'Tickets',
  initialState,
  reducers: {
    loadTickets(state, action) {
      state.tickets = state.tickets.concat(action.payload);
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

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId: string, { dispatch, rejectWithValue }) => {
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;

    const getTicketsPack = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = response.json();
          return data;
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error('Fetch failed');
        }
      }
      return null;
    };

    let isLoaded = false;
    while (!isLoaded) {
      try {
        const data = await getTicketsPack();
        dispatch(loadTickets(data.tickets));
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

export default sliceTickets.reducer;
export const { loadTickets } = sliceTickets.actions;
