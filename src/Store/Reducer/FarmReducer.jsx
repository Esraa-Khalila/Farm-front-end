import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";


export const getFarm = createAsyncThunk("farms", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/farm");
  const data = await response.json();
  return data;
});
export const getFarmAll = createAsyncThunk("farms", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/farmAdmin");
  const data = await response.json();
  return data;
});
export const findByTitle = createAsyncThunk(
  "farm/findByTitle",
  async ({ name }) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/farm?name=${name}`);

    return res.data;
  }
);

export const findbylocation = createAsyncThunk(
  "farm/findBylocation",
  async ({ location }) => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/farm?location=${location}`
    );

    return res.data;
  }
);
export const postFarm = createAsyncThunk("addfarm", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/farm", data);
    const farm = await response.data;
    swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    return farm;
  } catch (error) {
    console.error(error);
    swal.fire({
      position: "center",
      icon: "error",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    return rejectWithValue(error.message);
  }
});
const farmSlice = createSlice({
  name: "farms",
  initialState: {
    farms: [],
    loading: false,
  },
  extraReducers: {
    [getFarm.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [getFarm.fulfilled]: (state, action) => {
      state.farms = action.payload;
      state.loading = false;
      console.log(state.farms);
    },
    [getFarm.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.farms);
    },
    // Reducer for adding ads
    [postFarm.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [postFarm.fulfilled]: (state, action) => {
      state.farms.push(action.payload);
      state.loading = false;
      console.log("lyuj", state.farms);
    },
    [postFarm.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.farms);
    },
    [findByTitle.fulfilled]: (state, action) => {
      state.farms = action.payload;
      state.loading = false;
      console.log(state.farms);
    },
    [findbylocation.fulfilled]: (state, action) => {
      state.farms = action.payload;
      state.loading = false;
      console.log(state.ads);
    },
    [getFarmAll.pending]: (state, action) => {
      state.loading = true;
      console.log(action);
    },
    [getFarmAll.fulfilled]: (state, action) => {
      state.farms = action.payload;
      state.loading = false;
      console.log(state.farms);
    },
    [getFarmAll.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.farms);
    },
  },
});
export const farmActions = farmSlice.actions;
export default farmSlice;
