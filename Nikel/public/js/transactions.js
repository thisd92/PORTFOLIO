const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("btn-logout").addEventListener("click", logout);


checkLogged();
getCash();

// Checar se está logado e quem
function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged){
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged)
    if(dataUser){
        data = JSON.parse(dataUser);
    }
}

// Logout
function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

// Mostrar Entradas
function getCashIn(){
    const transactions = data.transactions;
    let cashHTML = ``;
                
    transactions.forEach((item) => {
        cashHTML += `
        <tr>
            <th scope="row">${item.date}</th>
            <td>${item.value}</td>
            <td>${item.type}</td>
            <td>${item.description}</td>
        </tr>
        `;
    })
    document.getElementById("tabela").innerHTML = cashHTML;

}

// Mostrar Saídas
function getCashOut(){
    const transactions = data.transactions;
    
    const cashIn = transactions.filter((item) => item.type === "2");
}