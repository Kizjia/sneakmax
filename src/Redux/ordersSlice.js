import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sneakersAPI } from '../API/api';

export const getSneakers = createAsyncThunk('orders/getSneakers', async () => {
  const response = await sneakersAPI.getSneakers();
  return response;
});

export const getSizeOptions = createAsyncThunk(
  'orders/getSizeOptions',
  async () => {
    const response = await sneakersAPI.getSizeOptions();
    return response;
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    sneakersList: [],
    sizeOptions: [],
    orders: [],
    completedOrders: [],

    sneakersLoading: false,
    sizeOptionsLoading: false,
    sneakersError: null,
    sizeOptionsError: null,
  },

  reducers: {
    addOrder: (state, action) => {
      state.orders.push({
        sneakers: action.payload.sneakers,
        size: action.payload.size,
      });
    },
    deleteOrder: (state, action) => {
      const index = state.orders.findIndex(
        ({ sneakers, size }) =>
          sneakers.id === action.payload.sneakers.id &&
          size === action.payload.size
      );

      if (index !== -1) {
        state.orders.splice(index, 1);
      }
    },
    saveCompletedOrder: (state, action) => {
      const { orderDetails, customerInfo } = action.payload;
      state.completedOrders.push({ orderDetails, customerInfo });
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSneakers.pending, (state) => {
        state.sneakersLoading = true;
        state.sneakersError = null;
      })
      .addCase(getSneakers.fulfilled, (state, action) => {
        state.sneakersLoading = false;
        state.sneakersList = action.payload;
      })
      .addCase(getSneakers.rejected, (state, action) => {
        state.sneakersLoading = false;
        state.sneakersError = action.error.message;
      })
      .addCase(getSizeOptions.pending, (state) => {
        state.sizeOptionsLoading = true;
        state.sizeOptionsError = null;
      })
      .addCase(getSizeOptions.fulfilled, (state, action) => {
        state.sizeOptionsLoading = false;
        state.sizeOptions = action.payload;
      })
      .addCase(getSizeOptions.rejected, (state, action) => {
        state.sizeOptionsLoading = false;
        state.sizeOptionsError = action.error.message;
      });
  },
});

export const { addOrder, deleteOrder, saveCompletedOrder } =
  ordersSlice.actions;

export default ordersSlice.reducer;
