const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("btn-logout").addEventListener("click", logout);
document.getElementById("transaction-btn").addEventListener("click", function(){
    window.location.href = "transactions.html"
});

// Adicionar Lançamento
document.getElementById("transaction-form").addEventListener("submit", function(e){
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value,
        type: type,
        description: description,
        date: date
    });

    saveData(data);
    e.target.reset();
    myModal.hide();
    getCashIn();
    getCashOut();
    getTotal();
    alert("Lançamento efetuado");
})

checkLogged();

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

    getCashIn();
    getCashOut();
    getTotal();
}

// Logout
function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

// Salvar dados
function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

// Mostrar Entradas
function getCashIn(){
    const transactions = data.transactions;
    
    const cashIn = transactions.filter((item) => item.type === "1");

    if(cashIn.length){
        let cashInHTML = ``;
        let limit = 0;
        if(cashIn.length > 5){
            limit = 5;
        }else{
            limit = cashIn.length;
        }
        
        for(let index = 0; index < limit; index++){
            cashInHTML += `
            <div class="row mb-4">
            <div class="col-12">
              <h3 class="fs-2">R$ ${cashIn[index].value.toFixed(2).replace('.',',')}</h3>
              <div class="container p-0">
                <div class="row">
                  <div class="col-12 col-md-8">
                    <p>${cashIn[index].description}</p>
                  </div>
                  <div class="col-12 col-md-3 d-flex justify-content-end">
                  ${cashIn[index].date}
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
        }
        document.getElementById("cash-in-list").innerHTML = cashInHTML;
    }

}

// Mostrar Saídas
function getCashOut(){
    const transactions = data.transactions;
    
    const cashOut = transactions.filter((item) => item.type === "2");

    if(cashOut.length){
        let cashOutHTML = ``;
        let limit = 0;
        if(cashOut.length > 5){
            limit = 5;
        }else{
            limit = cashOut.length;
        }
        
        for(let index = 0; index < limit; index++){
            cashOutHTML += `
            <div class="row mb-4">
            <div class="col-12">
              <h3 class="fs-2">R$ ${cashOut[index].value.toFixed(2).replace('.',',')}</h3>
              <div class="container p-0">
                <div class="row">
                  <div class="col-12 col-md-8">
                    <p>${cashOut[index].description}</p>
                  </div>
                  <div class="col-12 col-md-3 d-flex justify-content-end">
                  ${cashOut[index].date}
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
        }
        document.getElementById("cash-out-list").innerHTML = cashOutHTML;
    }

}

function getTotal(){
    const transactions = data.transactions;
    let total = 0;
    transactions.forEach((item) => {
        if(item.type === "1"){
            total += item.value;
        }else{
            total -= item.value;
        }
    })

    document.getElementById("total").innerHTML = `R$ ${total.toFixed(2).replace('.',',')}`;
}