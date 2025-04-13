export interface UserState {
  name: string
  loading: boolean
}

export const UserInitialState: UserState = {
  name: '',
  loading: false,
}