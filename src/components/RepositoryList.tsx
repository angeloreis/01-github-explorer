import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([] as Repository[])

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())        
            .then(data => setRepositories(data))
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>
            <ul>
                {
                    repositories.map((repository) => {
                        return <RepositoryItem repository={repository} key={repository.name}/>
                    })
                }
            </ul>
        </section>
    );
}