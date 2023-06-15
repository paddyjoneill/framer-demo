import ReturnToTopButton from "./components/ReturnToTopButton.tsx";
import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";

function App() {

  return (
      <main className="h-screen w-full flex flex-col">
          <Header />
          <Content />
          <ReturnToTopButton />
      </main>
  )
}

export default App
