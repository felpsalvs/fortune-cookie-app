import React, { Component } from 'react';
import './style.css'
class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
            'Uma bela flor é incompleta sem suas folhas.',
            'Sem o fogo do entusiasmo, não há o calor da vitória.',
            'Não há melhor negócio que a vida.', 'A gente há obtém a troco de nada.',
            'O riso é a menor distância entre duas pessoas.',
            'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
            'É mais fácil conseguir o perdão do que a permissão.',
            'Os defeitos são mais fortes quando o amor é fraco.',
            'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
            'Surpreender e ser surpreendido é o segredo do amor.',
            'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
            'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
            'A paciência na adversidade é o sinal de um coração sensível.',
            'A sorte favorece a mente bem preparada.',
            'Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.',
            'Quem olha para fora sonha; quem olha para dentro acorda.',
            'As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.',
            'Espere pelo mais sábio dos conselhos: o tempo.',
            'Todas as coisas são difíceis antes de se tornarem fáceis.',
            'Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.',
            'Se você se sente só é porque construiu muros ao invés de pontes.',
            'Vencer é 90 por cento suor e 10 por cento técnica.',
            'O amor está mais próximo do que você imagina.',
            'A vida coloca em nossa frente opções.',
            'Você é do tamanho do seu sonho.',
            'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
            'Conhecimento é a única virtude e ignorância é o único vício.',
            'O nosso primeiro e último amor é… o amor-próprio.',
            'Deixe de lado as preocupações e seja feliz.',
            'A vontade das pessoas é a melhor das leis.',
            'Nós somos o que pensamos.'];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleotorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '"' + this.frases[numeroAleotorio] + '"'
        this.setState(state);
    }
    
    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir biscoitinho" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>    
           </div>
            
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    }
}
export default App;