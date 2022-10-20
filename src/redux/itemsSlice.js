import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            page: 2,
            name: 'ABC',
            color: 'bg-sky-500',
            border: 'border-sky-600',
            pinned: false
        },
        {
            id: 2,
            page: 1,
            name: 'ABC',
            color: 'bg-orange-500',
            border: 'border-orange-600',
            pinned: false
        },
        {
            id: 3,
            page: 2,
            name: 'MNO',
            color: 'bg-pink-500',
            border: 'border-pink-600',
            pinned: false
        },
        {
            id: 4,
            page: 1,
            name: 'MNO',
            color: 'bg-purple-500',
            border: 'border-purple-600',
            pinned: false
        },
        {
            id: 5,
            page: 2,
            name: 'XYZ',
            color: 'bg-red-500',
            border: 'border-red-600',
            pinned: false
        },
        {
            id: 6,
            page: 1,
            name: 'XYZ',
            color: 'bg-blue-500',
            border: 'border-blue-600',
            pinned: false
        }
    ]
};

export const itemsSlice = createSlice({
    name: 'itemsSlice',
    initialState,
    reducers: {
        togglePinned: (state, action) => {
            state.items = state.items.map(current => {
                if (current.id !== action.payload.id) {
                    return current;
                }

                return {
                    ...current,
                    pinned: !current.pinned
                }
            });
        }
    },

})

export const { togglePinned } = itemsSlice.actions;

export default itemsSlice.reducer;