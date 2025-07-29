
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useUserStore = create(persist((set) => (
    {
        user: null,
        token: null,
        profilePicture: null,

        setUser: (user) => set({ user }),
        setToken: (token) => set({ token }),
        setProfilePicture: (profilePicture) => set({ profilePicture }),


        logout: () => set({user: null, token: null, profilePicture: null})
    }
)), 
{
    name: 'auth-storage'
}
)


export default useUserStore;