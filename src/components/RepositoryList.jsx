import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name:'unform',
    description:'Forms in React',
    link:'https://github.com/unform/unform'
}

export function RepositoryList(){
    const[repositories, setRepositories] = useState([]);  //criando um estado para armazenar a listagem de repositórios

    useEffect(() => {
        
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}
