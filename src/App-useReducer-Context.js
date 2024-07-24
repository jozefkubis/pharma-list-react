import { PharmaListProvider } from "./contexts/PharmaListContext"
import Form from "./components/Form"
import FilteredMed from "./components/FilteredMed"
import RefreshBtn from "./components/RefreshBtn"

const App = () => {
  return (
    <section className="section">
      <PharmaListProvider>
        <Form />
        <FilteredMed />
        <RefreshBtn />
      </PharmaListProvider>
    </section>
  )
}

export default App
