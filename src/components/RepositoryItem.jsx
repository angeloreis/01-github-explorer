
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description ?? 'Default description'}</p>
                    
            <a href={props.repository.link ?? "https://github.com/angeloreis"}>Acessar Repositório</a>
        </li>
    );
}