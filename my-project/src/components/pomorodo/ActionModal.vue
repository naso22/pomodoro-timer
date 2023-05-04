<template>
    <transition name="modal">
        <div @click.self="$emit('close')" class="backdrop">
                <div class="modal-content">
                    <h3>setting menu</h3>
                    <button data-v-74f6acd3 class="modal__close" @click="$emit('close')">
                        <svg data-v-74f6acd3 xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                            <line data-v-74f6acd3 x1="18" y1="6" x2="6" y2="18"></line>
                            <line data-v-74f6acd3 x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <form @submit.prevent="submitForm()">
                        <div class="content__form">
                            <div class="form__input">
                                <label for="">Focus Time</label>
                                <input type="number" ref="forcusInt">
                            </div>

                            <div class="form__input">
                                <label for="">Short break</label>
                                <input type="number" ref="shortInt">
                            </div>

                            <div class="form__input">
                                <label for="">Long break</label>
                                <input type="number" ref="longInt">
                            </div>

                            <div class="form__input">
                                <label for="">Rounds</label>
                                <input type="number" ref="roundInt">
                            </div>

                        </div>
                        <button type="submit" class="configbtn"> Confirm</button>
                    </form>
                </div>
            </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            timeLimit:10,
            FixedLimit: 10,
            breakLimit: 10,
            longbreak: 10,
        }
    },
    emits: ['close'],
    methods:{
        /*コンフィグボタンを押した時データを親に送る*/
        submitForm(){
            const data = {
                timeLimit: this.$refs.forcusInt.value,
                FixedLimit: this.$refs.forcusInt.value,
                breakLimit: this.$refs.shortInt.value,
                longbreak: this.$refs.longInt.value,
            }
            this.$emit('setup-data',data)
        }
    }
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    border: 2px solid #ffffff;
    padding: 10px;
    width: 100vh;
    border-radius: 15px;
    position: relative;
    background-color: rgb(177, 166, 234);
}

.modal__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    cursor: pointer;
    transition: background-color .3s linear;
    border-radius: 100%;
    padding-top: 0.2rem;
}

.form__input {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content__form {
    display: grid;
    justify-content: space-around;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 25%);
    row-gap: 2rem;
    -moz-column-gap: 4rem;
    column-gap: 4rem;
    margin: 4rem 0;
}

label {
    font-size: 1.5rem;
}

input {
    height: 35px;
    margin: 10px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
}

.configbtn {
    border-radius: 10px;
    padding: 5px 25px;
    font-size: 1.5rem;
    margin: 5px;
    box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.3);
}

.modal-enter-active {
    animation: modal 0.3s ease-out;
}

.modal-leave-active {
    animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>