<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <div class="form">
            <div v-if="!started">
                <label for="doorsAmount">Quantas portas?</label>
                <input type="text" id="doorsAmount" size="3"
                    v-model.number="doorsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedDoor">Qual a porta é a premiada?</label>
                <input type="text" id="selectedDoor" size="3"
                    v-model.number="selectedDoor">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorsAmount" :key="i">
            <DoorObj :hasGift="i === selectedDoor" :number="i" />
            </div>
        </div>
    </div>
</template>

<script>
import DoorObj from './components/DoorObj';

export default {
    name: 'App',
    components: { DoorObj },
    data: function() {
        return {
            started: false,
            doorsAmount: 3,
            selectedDoor: null
        }
    }
}

</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    color: #FFF;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153) );
}

#app{
    display: flex;
    flex-direction: column;
    align-items:center;
}

#app h1{
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button{
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors{
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

}
</style>