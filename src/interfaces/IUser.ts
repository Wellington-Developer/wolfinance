export default interface IUser {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: null | number;
  data: string;
}