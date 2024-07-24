import ampularium from "../data"
import { createContext, useContext, useReducer } from "react"

const PharmaListContext = createContext()

const initialState = {
  searchingMed: "",
  filteredMed: [],
}
// const { searchingMed, filteredMed } = state

const reducer = (state, action) => {
  switch (action.type) {
    case "setSearchingMed":
      return { ...state, searchingMed: action.payload }

    case "setFilteredMed":
      return { ...state, filteredMed: action.payload }

    case "refresh":
      return initialState

    default:
      throw new Error("Invalid action type")
  }
}

function PharmaListProvider({ children }) {
  const [{ searchingMed, filteredMed }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const setFirstWordBold = (result) => {
    const words = result.split(" ")
    const firstWord = words[0]
    const restOfSentence = words.slice(1).join(" ")

    return (
      <span>
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>
          {firstWord}
        </span>
        <span> {restOfSentence}</span>
      </span>
    )
  }

  const medsOnPage = (e) => {
    e.preventDefault()

    const medsAfterFilter = ampularium.filter((meds) => {
      return meds.nazov.toLowerCase().includes(searchingMed.toLowerCase())
    })

    dispatch({ type: "setFilteredMed", payload: medsAfterFilter })

    dispatch({ type: "setSearchingMed", payload: "" })
  }

  return (
    <PharmaListContext.Provider
      value={{
        searchingMed,
        filteredMed,
        setFirstWordBold,
        medsOnPage,
        dispatch,
      }}
    >
      {children}
    </PharmaListContext.Provider>
  )
}

function usePharmaList() {
  const context = useContext(PharmaListContext)
  if (context === undefined) {
    throw new Error("usePharmaList must be used within a PharmaListProvider")
  }

  return context
}

export { PharmaListProvider, usePharmaList }
