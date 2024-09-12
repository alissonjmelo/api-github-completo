const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<img src="${user.avatarUrl}" alt="Foto de perfil">
                            <div>
                            <h1>${user.name ?? 'Esse usuário não possui nome!'}</h1>
                            <p>${user.bio ?? 'Esse usuário não possui biografia'}</p>
                           </div>`


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blanck">${repo.name} </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositorios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    },
renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário nao encontrado!</h3>"
}
}

export { screen }