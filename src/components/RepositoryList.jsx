import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos
//por padrão só 21 repositórios vão ser listados por conta da paginção, mas nós conseguimos mostrar mais 

export function RepositoryList(){
    const[repositories, setRepositories] = useState([]);  //criando um estado para armazenar a listagem de repositórios

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json()) //convertendo a resposta em json
        .then(data => setRepositories(data)) //salvando os dados na variável repositóries/ quando a conversão ocorrer vou ter os dados
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
              {repositories}
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}
