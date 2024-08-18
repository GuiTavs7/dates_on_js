// 1) Criando data atual e exibindo no console

const dataAtual = new Date();

console.log(dataAtual);

// 2) Obtendo informações específicas - dia; mês; ano

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

console.log(dia);
console.log(mes);
console.log(ano);

// 3) Trabalhando com datas no futuro ou passado - adicionando e subtraindo

const novaData = new Date(dataAtual);

novaData.setDate(novaData.getDate() + 7);

console.log(novaData);

// 4) Operações entre datas - calculando a idade de uma pessoa

const dataNascimento = new Date("1990-05-15");

const diferencaEmMilissegundos = (dataAtual - dataNascimento);

const idade = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));

console.log(idade);

// 5) Formatando datas com método toLocaleDateString()

const dataFormatada = dataAtual.toLocaleDateString('pt-BR');

console.log(dataFormatada);

// 6) Formatando datas com API Intl.DateTimeFormat

const formato = new Intl.DateTimeFormat('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

const dataFormatadaIntl = formato.format(dataAtual);

console.log(dataFormatadaIntl);

// 7) Mais exemplos

// 7.1) Operações com datas

let umDiaDepois = new Date(dataAtual);

umDiaDepois.setDate(dataAtual.getDate() + 1);

umDiaDepois = umDiaDepois.toLocaleDateString('pt-BR');

console.log(umDiaDepois);

// --------------------------------------------------------

let umMesAtras = new Date(dataAtual);

umMesAtras.setMonth(umMesAtras.getMonth() - 1);

umMesAtras = umMesAtras.toLocaleDateString('pt-BR');

console.log(umMesAtras);

// --------------------------------------------------------

// 7.2) Predefinindo opções com objeto antes de usar os formatadores

const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataFormatadaOpcoes = dataAtual.toLocaleDateString('pt-BR', opcoes);

console.log(dataFormatadaOpcoes);

// -----------------------------------------------------------

const formatador = new Intl.DateTimeFormat('pt-br', opcoes);

const dataFormatadaIntlOpcoes = formatador.format(dataAtual);

console.log(dataFormatadaIntlOpcoes);