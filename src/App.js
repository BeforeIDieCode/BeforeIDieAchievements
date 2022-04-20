// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';

// App component
const App = () => {
  return (
    <>
        <Header />
        <div className="flex justify-content-center" style={{ marginTop: "50px" }}>
          <ContainerCard className="flex justify-content-center">
            <MasonryLayout />
          </ContainerCard>
        </div>
    </>
  )
}

export default App