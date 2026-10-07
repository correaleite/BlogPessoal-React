import type Tema from './Tema';
import type Usuario from './usuario';

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    usuario: Usuario | null;
}