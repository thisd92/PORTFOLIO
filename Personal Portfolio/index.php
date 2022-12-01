<?php include 'header.php'; ?>

<main>
    <section>
        <div class="container-fluid p-3">
            <div class="jumbotron">
                <div class="d-flex flex-row align-items-center">
                    <img src="./src/assets/imgs/avatar.png" class="avatar" alt="">
                    <h1 class="display-5 ml-2">Bem-Vindo!</h1>
                </div>
                <div class="mt-3">
                    <p class="lead">Sou um desenvolvedor iniciante, recém formado em Análise e Desenvolvimento de Sistemas,
                        buscando novos aprendizados e criando meu Portfolio.
                    </p>
                    <hr class="my-4">
                    <p>Aqui você pode conferir meu repositório no GitHub e meu LinkedIn.
                    </p>
                </div>
                <div>
                    <a class="btn btn-dark btn-lg" href="https://github.com/thisd92" role="button">
                        <img src="./src/assets/imgs/github.png" width="20" alt="logo github">
                        GitHub
                    </a>
                    <a class="btn btn-dark btn-lg" href="https://www.linkedin.com/in/thiago-dutra-a8359a206/" role="button">
                        <img src="./src/assets/imgs/linkedin.png" width="20" alt="logo linkedin">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="pb-3">
        <div class="container-fluid row d-flex flex-row justify-content-around">
            <div class="card col-lg-3 col-sm-8" style="width: 18rem;">
                <img src="./src/assets/imgs/BuscaCEP.JPG" class="card-img-top img-thumbnail img-thumb" alt="thumb busca cep">
                <div class="card-body">
                    <h5 class="card-title">Busca CEP</h5>
                    <p class="card-text">Página para realizar buscas de CEPs a partir do número digitado. Projeto
                        desenvolvido com React,
                        utilizando React Hooks e consumindo API do ViaCEP.</p>
                </div>
                <div class="card-body">
                    <a href="http://dev-th.com.br/busca-cep" class="card-link">Visitar</a>
                </div>
            </div>
            <div class="card col-lg-3 col-sm-8" style="width: 18rem;">
                <img id="img-cnpj" src="./src/assets/imgs/BuscaCNPJ.JPG" class="card-img-top img-thumbnail img-thumb" alt="thumb busca cnpj">
                <div class="card-body">
                    <h5 class="card-title">Busca CNPJ</h5>
                    <p class="card-text">Página para realizar buscas de CNPJs a partir do número digitado. Projeto
                        desenvolvido com React,
                        utilizando React Hooks e consumindo API da WS.</p>
                </div>
                <div class="card-body">
                    <a href="http://dev-th.com.br/busca-cnpj" class="card-link">Visitar</a>
                </div>
            </div>
            <div class="card col-lg-3 col-sm-8" style="width: 18rem;">
                <img src="./src/assets/imgs/ColorChanger.PNG" class="card-img-top img-thumbnail img-thumb" alt="thumb busca cep">
                <div class="card-body">
                    <h5 class="card-title">Color Changer</h5>
                    <p class="card-text">Página utilizando jQuery para realizar a troca de cor de acordo com o botão apertado.</p>
                </div>
                <div class="card-body">
                    <a href="http://dev-th.com.br/color-changer" class="card-link">Visitar</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'footer.php'; ?>