export function RepositoryItem(props){
    return( //se eu for retornar só uma linha de html aí não preciso dos ().
            <li>
            <strong>{props.repository.name}</strong> 
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>
            Acessar o repositório
            </a>
            </li>
    );
}
