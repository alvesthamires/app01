import { Component, signal } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal([
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 },
    { nome: 'Teclado', preco: 210 },
    { nome: 'Caixa de som', preco: 997 },
    { nome: 'Fone', preco: 70 },
  ]);

  exibirProduto(nome: string) {
    console.log('Produto selecionado:', nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }

  adicionarProduto() {
    this.produtos.update((listaAtual) => [...listaAtual, { nome: 'Mouse Pad', preco: 50 }]);
  }
}
