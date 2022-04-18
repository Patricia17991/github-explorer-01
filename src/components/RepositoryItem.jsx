export function RepositoryItem(props){
    return( //se eu for retornar só uma linha de html aí não preciso dos ().
            <li>
            <strong>{props.repository}</strong> 
            <p>Forms in React</p>
            <a href="">
            Acessar o repositório
            </a>
            </li>
    );
}
