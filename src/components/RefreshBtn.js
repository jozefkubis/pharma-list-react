import { usePharmaList } from "../contexts/PharmaListContext"

function RefreshBtn() {
  const { dispatch } = usePharmaList()

  return (
    <div className="refresh-btn-div">
      <button
        className="refresh-btn"
        onClick={() => dispatch({ type: "refresh" })}
      >
        Refresh
      </button>
    </div>
  )
}

export default RefreshBtn
