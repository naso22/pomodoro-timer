<template>
    <div class="modal__backdrop">
    <div class="modal-content">
        <h3>setting menu</h3>
        <button data-v-74f6acd3 class="modal__close">
            <svg data-v-74f6acd3 xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line data-v-74f6acd3 x1="18" y1="6" x2="6" y2="18"></line>
                <line data-v-74f6acd3 x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
            <form>
            <div class="content__form">
                <div class="form__input">
                    <label for="">Focus</label>
                    <input type="text">
                </div>

                <div class="form__input">
                    <label for="">Short break</label>
                    <input type="text">
                </div>

                <div class="form__input">
                    <label for="">Long break</label>
                    <input type="text">
                </div>

                <div class="form__input">
                    <label for="">Rounds</label>
                    <input type="text">
                </div>

            </div>
            <button type="submit" class="configbtn"> Confirm</button>
        </form>
    </div>
    </div>
</template>

<style scoped>
.modal__backdrop {
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsla(0, 6%, 17%, 0.38);
    display: flex;
    justify-content: center;
    align-items: center;
}
h3{
    font-weight: normal;
}
.modal-content {
    border: 2px solid #ffffff;
    padding: 10px;
    width: 80vh;
    border-radius: 15px;
    position: relative;
    background-color: rgb(177, 166, 234);
}

.form__input {
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.content__form{
    display: grid;
    justify-content: space-around;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(2,25%);
    row-gap: 2rem;
    -moz-column-gap: 4rem;
    column-gap: 4rem;
    margin: 4rem 0;
}

label{
    font-size: 1.5rem;
}

input{
    height: 35px;
    margin: 10px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
}

.configbtn{
    border-radius: 10px;
    padding:5px 25px;
    font-size:1.5rem;
    margin: 5px;
    box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.3);
}

.modal__close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    cursor: pointer;
    transition: background-color .3s linear;
    border-radius: 100%;
    padding-top: 0.2rem;
}
</style>
<script setup>
</script>