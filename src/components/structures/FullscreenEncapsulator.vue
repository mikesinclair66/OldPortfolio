<template>
    <div :style="loadHeight">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                height: 0
            }
        },

        computed: {
            loadHeight(){
                return `height: ${this.height}px`;
            }
        },

        methods: {
            checkHeight(){
                this.height = screen.availHeight;
            }
        },

        mounted(){
            this.checkHeight();
            window.addEventListener("resize", this.checkHeight);
        },

        beforeUnmount(){
            window.removeEventListener("resize", this.checkHeight);
        }
    }
</script>
