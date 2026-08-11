import { signal } from '@angular/core';

// criando uma constante e atribuindo seu valor
export const usuarioLogado = signal(false);

// função 
export function login() {
  usuarioLogado.set(true);
}

export function logout() {
  usuarioLogado.set(false);
}
