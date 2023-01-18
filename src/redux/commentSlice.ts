import { callApi } from './../api/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CommentState, IniState } from '../type/type';

interface CommentError {
  errorMessage: string
}

const initialState: IniState = {
  comment: [],
  maxNum: 0,
};

export const getAllList = createAsyncThunk<
  CommentState[],
  number | undefined,
  { rejectValue: CommentError }
  >("GET_ALL_COMMENT", async () => {
    const response = await callApi.getList();
    return response.data;
  });

export const getList = createAsyncThunk<
  CommentState[],
  number | undefined,
  { rejectValue: CommentError }
  >("GET_COMMENT", async (page = 1) => {
    const response = await callApi.getCommentByPage(page);
    return response.data;
  });

  export const addList = createAsyncThunk<
  CommentState,
  CommentState,
  { rejectValue: CommentError }
  >("POST_COMMENT", async (form) => {
    const response = await callApi.addComment(form);
    return response.data;
  });

  export const updateList = createAsyncThunk<
  CommentState,
  CommentState,
  { rejectValue: CommentError }
  >("UPDATE_COMMENT", async (form) => {
    const response = await callApi.updateComment(form.id, form);
    return response.data;
  });

  export const delList = createAsyncThunk<
  CommentState,
  number,
  { rejectValue: CommentError }
  >("DEL_COMMENT", async (id) => {
    const response = await callApi.delComment(id);
    return response.data;
  });

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllList.fulfilled, (state, action) => {
      state.maxNum = action.payload.length;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(addList.fulfilled, (state, { payload }) => {
      state.comment.pop();
      state.comment.unshift(payload);
      state.maxNum += 1;
    });
    builder.addCase(updateList.fulfilled, (state, { payload }) => {
      const index = state.comment.findIndex(item => item.id == payload.id);
      if (payload.id) state.comment.splice(index, 1, payload);
    });
    builder.addCase(delList.fulfilled, (state, action) => {
      const index = action.meta.arg;
      const NewState = state.comment.filter(state => state.id != index);
      state.comment = NewState;
      state.maxNum -= 1;
    });
  },
})

export default commentSlice.reducer