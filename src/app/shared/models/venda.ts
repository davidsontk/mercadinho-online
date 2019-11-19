import { VendaProduto } from './vendaProduto';

export class Venda {
    valorTotalVenda: number;
    codigoCliente: number;
    formaPagamento: string;
    listVendaProduto: VendaProduto[] = [];
}