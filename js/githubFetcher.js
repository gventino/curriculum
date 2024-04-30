const endpointURL = `https://api.github.com/users/gventino/repos`;

async function fetch_github_repos(){
    try{
        const response = await fetch(endpointURL);
        if(!response.ok) {
            throw new Error('Unable to fetch github repos');
        }
        const repos = await response.json();
        render_repos(repos);
    } catch(error) {
        console.error('Error when fetching github repos', error);
    }
}

function render_repos(repos) {
    const repos_list = document.getElementById('repos-list');
    repos.forEach(repo => {
        const list_item = document.createElement('li');
        const repo_link = document.createElement('a');
        repo_link.href = repo.html_url;
        repo_link.textContent = repo.name;
        list_item.appendChild(repo_link);
        list_item.appendChild(list_item);
        console.log(repo_link.href)
        console.log(repo_link.textContent)
    });
}

//document.addEventListener('DOMContentLoaded', fetch_github_repos);

