import { setupWorker } from 'msw/browser';
import { handlers } from './handlers'; // Asegúrate de que la ruta a tus manejadores es correcta

export const worker = setupWorker(...handlers);