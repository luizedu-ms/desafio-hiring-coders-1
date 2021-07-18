const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name =  document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    let data = {
        name,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById('modal-content');
    let modal = document.getElementById('modalId');
    let loading = `<p> Carregando...</p>`;
    let done = `<p>Concluido, mais detalhes em seu e-mail!!</p>`;

    content.style.visibility = "visible";
    modal.innerHTML = loading;
    
    setTimeout(() => {
        modal.innerHTML = done;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    },1000);

    setTimeout(() => {
        content.innerHTML = '';
        content.style.visibility = "hidden";
        document.location.reload();
    },3000);
});
