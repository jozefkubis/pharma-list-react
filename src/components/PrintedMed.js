import { usePharmaList } from "../contexts/PharmaListContext"

function PrintedMed() {
  const { filteredMed, setFirstWordBold } = usePharmaList()

  return (
    <div>
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
  )
}

export default PrintedMed
