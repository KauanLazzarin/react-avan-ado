import React from "react";
import PropTypes from "./proptypes/Proptypes";

/* 
  Para utilizar o método suspense loading é necessário
  importar o componente por uma callback que retornará uma 
  promisse. Assim o elemento só será renderizado quando 
  estiver realmente pronto.
*/

const Contato = React.lazy(() => import('./LazySuspense/Contato.jsx'));

export default function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div className="App">
      <PropTypes color="blue" headText="utilizando proptypes" paragraphText={124123}/>

        <p>O elemento a seguir só será carregado quando clicar no botão e ele estiver pronto</p>
        <button onClick={() => setAtivo(!ativo)}>Mostrar elemento</button>
        {
          ativo && (
            <React.Suspense fallback={<div>Carregando...</div>}>
            <Contato />
            </React.Suspense>
          )
        }
    </div>
  );
}
