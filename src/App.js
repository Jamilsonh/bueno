import { useEffect } from "react";
import { useState } from "react";
import Body from "./components/Body";
import { GlobalStyle } from "./components/Global";
import Header from "./components/Header";
import Rodape from "./components/Rodape";

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function() {
    function posicaoScroll() {
      if (window.scrollY > 40) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll)
  }, []);


  return (
    <>
      <Header acao={ativaCor}/>
      <Body/>
      <Rodape/>
      <GlobalStyle/>
    </>
  );
}

export default App;
