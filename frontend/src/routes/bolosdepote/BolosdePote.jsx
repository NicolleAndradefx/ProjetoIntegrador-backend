import React from "react";
import "./BolosdePote.css";
 
const bolos = [
  {
    id: 1,
    nome: "Maracujá com Canela",
    preco: "40,00",
    img: "./public/maracuja-canela.png"
  },
  {
    id: 2,
    nome: "Bolo de Maracujá com Baunilha",
    preco: "40,00",
    img: "./public/bolo-calda.png"
  },
  {
    id: 3,
    nome: "Bolo de Chocolate Branco",
    preco: "40,00",
    img: "./public/bolo-chocolatebranco.png"
  },
  {
    id: 4,
    nome: "Bolo de Doce de Leite",
    preco: "40,00",
    img: "./public/bolo-docedeleite.png"
  },
  {
    id: 5,
    nome: "Bolo de de Framboesa",
    preco: "40,00",
    img: "./public/bolo-framboesa.png"
  },
  {
    id: 6,
    nome: "Bolo de Pudim",
    preco: "40,00",
    img: "./public/bolo-pudim.png"
  },
  {
    id: 7,
    nome: "Bolo Red Velvet",
    preco: "40,00",
    img: "./public/bolo-redvelvet.png"
  },
  {
    id: 8,
    nome: "Bolo de Caramelo com Granola",
    preco: "40,00",
    img: "./public/caramelo-granola.png"
  },
  {
    id: 9,
    nome: "Bolo de Chocolate com Avelã",
    preco: "40,00",
    img: "./public/chocolate-avela.png"
  },
  {
    id: 10,
    nome: "Bolo de Chocolate com Caramelo",
    preco: "40,00",
    img: "./public/chocolate-caramelo.png"
  },
  {
    id: 11,
    nome: "Bolo de Canela",
    preco: "40,00",
    img: "./public/maracuja-canela.png"
  },
  {
    id: 12,
    nome: "Bolo de Morango com Ninho",
    preco: "40,00",
    img: "./public/morango-ninho.png"
  },
  {
    id: 13,
    nome: "Bolo de Amendoim",
    preco: "40,00",
    img: "./public/pasta-amendoim.png"
  },
  {
    id: 14,
    nome: "Bolo de Oreo",
    preco: "40,00",
    img: "./public/bolo-oreo.jpg"
  },
  {
    id: 15,
    nome: "Bolo de Paçoca",
    preco: "40,00",
    img: "./public/bolo-pacoca.jpg"
  },
  {
    id: 16,
    nome: "Bolo de Maracujá",
    preco: "40,00",
    img: "./public/bolo-maracuja.png"
  },
  {
    id: 17,
    nome: "Bolo de Limão",
    preco: "40,00",
    img: "./public/bolo-limao.png"
  },
  {
    id: 18,
    nome: "Bolo de Brigadeiro",
    preco: "40,00",
    img: "./public/bolo-brigadeiro.png"
  },
  {
    id: 19,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 20,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 21,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 22,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 23,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 24,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 25,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 26,
    nome: "",
    preco: "40,00",
    img: "./public/"
  },
  {
    id: 27,
    nome: "",
    preco: "40,00",
    img: "./public/"
  }
];
 
function BolosdePote() {
  return (
    <main className="main-container">
 
      <div className="titulo-area">
        <h2>Nossos Bolos de Pote</h2>
        <p>Aproveite nossa variedades de sabores.</p>
      </div>
 
       <div className="itens-area">
            {bolos.map((item) => (
          <div className="card-bolo" key={item.id}>
 
            <div className="item--img">
              <img src={item.img} alt={item.nome} />
            </div>
 
            <button className="btn-comprar">Comprar</button>
 
            <div className="item--price">R$ {item.preco}</div>
 
            <div className="item--name">{item.nome}</div>
 
            <div className="details">Clique aqui para ver mais detalhes{item.details}</div>
 
          </div>
            ))}
      </div>
 
    </main>
  );
}
 
export default BolosdePote;