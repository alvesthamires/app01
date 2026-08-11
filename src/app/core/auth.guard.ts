import { CanActivateFn } from '@angular/router';
import { usuarioLogado } from './auth';

// "usuarioLogado" diz se o usuário está logado ou não ( auth.ts )
// quem chamar authguard tem como retorno o "usuarioLogado"
export const authGuard: CanActivateFn = () => {
  return usuarioLogado();
};
