
import InputText from '../InputText';
import './formText.css'
const FormText = () => {
    return (
        <section className='form-text-container'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome do Personagem" placeholder="Digite seu nome" />
                <InputText label="Função do personagem" placeholder="Digite a Função do personagem" />
                <InputText label="Imagem" placeholder="Informe o endereço da imagem" />
                <InputText label="Rota do Personagem" />
            </form>
        </section>
    );
}
export default FormText;