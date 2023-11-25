import { setupWorker } from 'msw';
import { handlers } from './handlers'; // Asegúrate de que la ruta a 'handlers.js' sea correcta

export const worker = setupWorker(...handlers);
