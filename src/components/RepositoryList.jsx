import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';


export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
              <RepositoryItem/>
            </ul>
        </section>
    );
}
