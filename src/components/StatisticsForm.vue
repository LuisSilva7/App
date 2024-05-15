<template>
    <div class="center">
        <form @submit.prevent="handleSubmit">
            <div class="txt_field">
                <input type ="text" required v-model="email">
                <label>Número de Participantes:</label>
            </div>
                <div class="txt_field">
                    <input type ="text" required v-model="password">
                    <label>Donativos (quantidade monetária):</label>
                </div>
                    <div class="txt_field">
                        <input type ="text" required v-model="password">
                        <label>Duração da Iniciativa:</label>
                    </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
* {
    background: url("@/assets/background-header-image.jpeg");
}
    
    body{
    margin:0;
    padding: 0;
    font-family: montserrat;
    height:100vh;
    overflow: hidden;
    }

    .center{
    position:absolute;
    margin-top: 5%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:400px;
    border-radius: 30px;
    border: 2px solid #adadad;
    }

    .center form{
    max-width: 420px;
    margin: 40px 20px;
    text-align: left;
    padding: 10px;
    border-radius: 30px;
    box-sizing: border-box;
    }

    form .txt_field{
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
    }

    label {
        color: #adadad;
        position:absolute;
        top:50%;
        left:5px;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }

    input {
        color: #c6c6c6;
        padding: 0 5px;
        width: 100%;
        height: 40px;
        font-size: 16px;
        border: none;
        background:none;
        outline:none;
    }

    span::before{
    content: '';
    position: absolute;
    top: 40px;
    left:0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
    }

    input:focus ~label,
    input:valid~label{
    top: -5px;
    color: #ffffff;
    }

    input:focus ~ span::before,
    input:valid ~ span::before{
    width: 100%;
    }

    input[type="submit"]{
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor:pointer;
    outline:none;
    margin: -5px 0 -10px 5px;
    }

    input[type="submit"]:hover{
    border-color: #2691d9;
    transition: .5s;
    }


</style>