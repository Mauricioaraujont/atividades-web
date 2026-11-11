
const nome = 'Mauricio Neto';                  
const profissao = "Aluno"; 
const cidade = `Floriano`;                   

console.log(nome);
console.log(profissao);
console.log(cidade);

console.log("Nome: " + nome + ", Profissão: " + profissao + ", Cidade: " + cidade);


console.log('Ele disse: "Estou aprendendo JavaScript!"');
console.log("It's time to code.");
console.log('No Node.js podemos usar \'aspas simples\', "aspas duplas" e até crases no mesmo texto.');


const produto = "Teclado Mecânico";
const preco = 150.00;
const desconto = 15.00;
const precoFinal = preco - desconto;

console.log(`Produto: ${produto} | Preço Original: R$ ${preco} | Desconto: R$ ${desconto} | Total: R$ ${precoFinal}`);

console.log(`Produto: ${produto} | Preço Original: R$ ${preco} | Desconto: R$ ${desconto} | Total: R$ ${preco - desconto}`);



const TAXA_FIXA = 0.10;
let saldo = 500;

saldo = 600;
console.log("Novo saldo:", saldo);

{
    var vazou = "Consigo ser acessado fora do bloco?";
    let protegido = "Eu fico preso aqui dentro!";
}

console.log(vazou); 


var nomeUsuario = "Ana";
var nomeUsuario = "Carlos"; 
console.log(nomeUsuario);

let sobrenome = "Silva";

let num1 = 18;
let num2 = 4;

console.log(`Soma (+): ${num1 + num2}`);
console.log(`Subtração (-): ${num1 - num2}`);
console.log(`Multiplicação (*): ${num1 * num2}`);
console.log(`Divisão (/): ${num1 / num2}`);
console.log(`Resto (%): ${num1 % num2}`);
console.log(`Exponenciação (**): ${num1 ** num2}`);



let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

let mediaErrada = nota1 + nota2 + nota3 / 3;
let mediaCorreta = (nota1 + nota2 + nota3) / 3;

console.log("Média Errada:", mediaErrada);
console.log("Média Correta:", mediaCorreta);


let saldoConta = 1000;

saldoConta += 2500;
console.log(`Transação realizada. Saldo atual: R$ ${saldoConta}`);

saldoConta -= 180;
console.log(`Transação realizada. Saldo atual: R$ ${saldoConta}`);

saldoConta -= 420;
console.log(`Transação realizada. Saldo atual: R$ ${saldoConta}`);

saldoConta *= 1.05;
console.log(`Transação realizada. Saldo atual: R$ ${saldoConta}`);

saldoConta /= 2;
console.log(`Transação realizada. Saldo atual: R$ ${saldoConta}`);


let pontos = 0;
const MULTIPLICADOR = 2;

pontos += 10;  
pontos++;     
pontos -= 5;  
pontos *= MULTIPLICADOR; 

console.log("RESULTADO FINAL DO JOGO: Pontuação Final: " + pontos + " | Status: Jogador Vitorioso!");


let logSistema = "";

logSistema += "[LOG DE EXECUÇÃO - SISTEMA]\n";
logSistema += "> [INFO] Inicializando módulos...\n";
logSistema += "> [SUCCESS] Conexão com banco established.\n";
logSistema += "> [WARN] Memória em 75% de uso.\n";
logSistema += "> [END] Processo finalizado.";

console.log(logSistema);