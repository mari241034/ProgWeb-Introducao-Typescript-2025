//===TIPOS EM TYPESCRIPT===

//Tipos primitivos
let texto: string = "Olá mundo!";
let numero: number = 42;
let ativo: boolean = true;

//Arrays
let numeros: number[] = [1,2,3,4,5]
let palavras: Array<string> = ["TypeScript", "é", "massa"]

//Tuplas
let pessoa: [string, number] = ["25",25]

//Enum --  enumeração
enum Cores{
    Vermelho,
    Verde,
    Rosa
}

let corFavorita: Cores = Cores.Rosa;


//Any (evitar sempre que possivel)
let dadoAleatorio: any = 5;
dadoAleatorio = 'Texto' ;
dadoAleatorio = true;


//Unknow (tipo mais seguro do any)
let dadoDesconhecido: unknown = 10;


//Void
function mostrarAlerta(): void{
 console.log("Atenção! preste atenção na aula")
}
   
//Null e undefined
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem:string): never{
    throw new Error(mensagem)
}

//Type aliases
type Usuario = {
    nome: string;
    idade: number;
}

let usuario1: Usuario = {nome:'Mari', idade: 18};



