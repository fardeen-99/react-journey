import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setLoading(state,action) {
            state.loading = action.payload
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResults(state) {
            state.results = []
        },
        addResults(state, action) {
  state.results = [...state.results, ...action.payload];
}
    }
})


export const {
    setQuery,
    setActiveTabs,
    setError,
    setLoading,
    setResults,
    clearResults,
    addResults
} = searchSlice.actions


export default searchSlice.reducer;