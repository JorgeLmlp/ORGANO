
import InputText from '../InputText';
import './formText.css'
const FormText = () => {
    return (
        <section className='form-text-container'>
            <form>
                <h2>Preencha os dados para criar o card da Serie escolhida</h2>
                <InputText label="Nome da Serie" placeholder="Digite o nome da serie" />
                <InputText label="Gênero da serie" placeholder="Digite o genero da serie" />
                <InputText label="Imagem" placeholder="Informe o endereço da imagem" />
                <InputText label="Plataforma em que está disponivel" />
            </form>
        </section>
    );
}
export default FormText;