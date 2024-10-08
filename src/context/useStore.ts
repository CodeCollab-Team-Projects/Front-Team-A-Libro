import { create } from 'zustand';

const useStore = create((set) => ({
  isAuth: true,
  JWT: '',
  user: {},
  login: (JWT: string) => set({ JWT, isAuth: true }),
  //Luego hay que agregar las conexiones con la api
}));

export default useStore;
