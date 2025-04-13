import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInitialState } from '../../components/users/users.constants'


const userSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { setName } = userSlice.actions
export default userSlice.reducer
