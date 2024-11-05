<template>
    <div class="cropped-image" :style="backgroundAttr">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            blob: ""
        },

        computed: {
            backgroundAttr(){
                return `background-image: url('${this.blob}')`
                    + (!this.blob ? '; background-color: rgb(190, 190, 190)' : '');
            }
        }
    }
</script>

<style>
    .cropped-image{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>