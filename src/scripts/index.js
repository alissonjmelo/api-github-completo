
import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})


document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const insEnterKeyPress = key === 13

    if (insEnterKeyPress) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})


function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Você deve preencher algum nome para busca do usuário!')
        return true
    }
}



async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)

    // user.repositories(repositories)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

}





