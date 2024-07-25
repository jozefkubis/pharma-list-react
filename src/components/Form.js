import { usePharmaList } from "../contexts/PharmaListContext"

function Form() {
  const { searchingMed, medsOnPage, dispatch } = usePharmaList()

  return (
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
      {searchingMed.length > 0 ? (
        <button className="submit-btn" onClick={medsOnPage}>
          Submit
        </button>
      ) : (
        <button className="submit-btn" disabled>
          ⚕ Search... 💉
        </button>
      )}
    </form>
  )
}

export default Form
