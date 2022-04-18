export function RepositoryItem(props){
    return( //se eu for retornar só uma linha de html aí não preciso dos ().
            <li>
            <strong>{props.repository.name ?? 'Default'}</strong> 
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
            Acessar o repositório
            </a>
            </li>
    );
}
