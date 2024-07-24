import PrintedMed from "./PrintedMed"

function FilteredMed({ Children }) {
  return (
    <div className="filtered-med">
      <PrintedMed>{Children}</PrintedMed>
    </div>
  )
}

export default FilteredMed
