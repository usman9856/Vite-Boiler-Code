import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserState } from '../components/users/users.constants';
import { userApi } from '../services/userApi';

interface UserStore extends UserState {
  setName: (name: string) => void;
  setLoading: (loading: boolean) => void;
  fetchUserName: () => Promise<void>;
}

export const useUserStore = create<UserStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      name: '',
      loading: false,

      // Actions
      setName: (name: string) => set({ name }),
      setLoading: (loading: boolean) => set({ loading }),
      
      // Async actions
      fetchUserName: async () => {
        set({ loading: true });
        try {
          const response = await userApi.fetchUserName();
          set({ name: response.name, loading: false });
        } catch (error) {
          console.error('Error fetching user name:', error);
          set({ loading: false });
        }
      },
    }),
    {
      name: 'user-store',
    }
  )
);
