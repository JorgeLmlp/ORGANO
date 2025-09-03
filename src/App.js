import Banner from './componentes/banner';
import InputText from './componentes/InputText';

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText label = "Nome" placeholder = "Digite seu nome"/>
      <InputText label = "Cargo" placeholder = "Digite seu cargo"/>
      <InputText label = "Imagem" placeholder = "Informe o endereço da imagem"/>
      <InputText label = "Time"/>
    </div>
  );
}

export default App;

