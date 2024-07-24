import ampularium from "./data"
import { useReducer } from "react"

const initialState = {
  searchingMed: "",
  filteredMed: [],
}

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

const App = (e) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { searchingMed, filteredMed } = state

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
    <section className="section">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Search Med"
          value={searchingMed}
          onChange={(e) =>
            dispatch({ type: "setSearchingMed", payload: e.target.value })
          }
        />
        <button className="submit-btn" onClick={medsOnPage}>
          Submit
        </button>
      </form>

      <div className="filtered-med">
        {filteredMed.map((oneMed) => {
          const {
            id,
            nazov,
            skupina,
            MU,
            indikacie,
            davkovanie,
            sposobPodania,
            nastupAodoznenieUcinku,
            NU,
            KI,
          } = oneMed

          return (
            <div className="printed-med" key={id}>
              <h2>{nazov}</h2>
              <p>{setFirstWordBold(skupina)}</p>
              <p>{setFirstWordBold(MU)}</p>
              <p>{setFirstWordBold(indikacie)}</p>
              <p>{setFirstWordBold(davkovanie)}</p>
              <p>{setFirstWordBold(sposobPodania)}</p>
              <p>{setFirstWordBold(nastupAodoznenieUcinku)}</p>
              <p>{setFirstWordBold(NU)}</p>
              <p>{setFirstWordBold(KI)}</p>
              <div className="div-selector"></div>
            </div>
          )
        })}
      </div>

      <div className="refresh-btn-div">
        <button
          className="refresh-btn"
          onClick={() => dispatch({ type: "refresh" })}
        >
          Refresh
        </button>
      </div>
    </section>
  )
}

export default App
