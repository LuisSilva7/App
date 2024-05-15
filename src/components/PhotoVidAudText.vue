<template>
    <div class="retangulo1">
        <div class="quadrado1">
            <h6>Foto</h6>
        </div>
        <div class="retangulo2">
            <div class="trabalhador" v-for="trabalhador in trabalhadores" :key="trabalhador.nome">
                <h6>{{ trabalhador.nome }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            tittle: 'Gestão de Evento',
            trabalhadores: []
        }
    },
    mounted() {
        if (localStorage.getItem('iniciatives')) {
            const iniciativas = JSON.parse(localStorage.getItem('iniciatives'))
            this.trabalhadores = iniciativas[this.id].trabalhadores
        }
    }
}
</script>

<style scoped>
.retangulo1 {
    display: flex;
    width: 550px; /* largura fixa do retângulo1 */
    height: 100px; /* altura fixa do retângulo1 */
    border: 2px solid #ccc;
    border-radius: 10px;
}

.quadrado1 {
    width: 150px; /* largura fixa do quadrado1 */
    height: 100%; /* altura igual à do retângulo1 */
    border-right: 2px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.retangulo2 {
    width: 450px; /* largura fixa do retângulo2 */
    height: 100%; /* altura igual à do retângulo1 */
    overflow-x: auto; /* habilita a rolagem horizontal */
    overflow-y: hidden; /* esconde a barra de rolagem vertical */
    display: flex;
    align-items: center;
    white-space: nowrap; /* impede a quebra de linha dos elementos */
}

.trabalhador {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    margin: 5px;
    display: inline-flex; /* permite que os trabalhadores fiquem em linha */
    justify-content: center;
    align-items: center;
}
</style>