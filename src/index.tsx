//na versão 17 do react as importações do react não são necessárias para todos os arquivos que for usar ele
import {render} from 'react-dom';
import {App} from './App';

render(<App/>, document.getElementById('root'));
