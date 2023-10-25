document.addEventListener('DOMContentLoaded', function() {
    const nameProfile = document.querySelector('#name');
    const usernameProfile = document.querySelector('#username');
    const avatarProfile = document.querySelector('#avatar');
    const repositorioProfile = document.querySelector('#repositorio');
    const followersProfile = document.querySelector('#followers');
    const followingProfile = document.querySelector('#following');
    const linkProfile = document.querySelector('#link');

    fetch('https://api.github.com/users/Thiago-Papudim')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameProfile.innerText = json.name;
        usernameProfile.innerText = json.login;
        avatarProfile.src = json.avatar_url;
        repositorioProfile.innerText = json.public_repos;
        followersProfile.innerText = json.followers;
        followingProfile.innerText = json.following;
        linkProfile.href = json.html_url;
    })
})