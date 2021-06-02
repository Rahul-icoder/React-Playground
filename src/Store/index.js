import {form_model} from './Form/form_model';
import { createStore} from 'easy-peasy';
export const store = createStore(form_model);
store.reconfigure(form_model);