<template>
    <div class="parallax">
        <div class="parallax-content" :style="loadBackgroundImage">
            <slot></slot>
        </div>
        <div class="parallax-tint" :style="loadTintOpacity"></div>
    </div>
</template>

<script>
    export default {
        props: {
            path: "",
            overrideRootPath: "",
            tintOpacity: ""
        },

        data() {
            return {
                pPath: "",
                pHasRootPath: true,
                pTintOpacity: 0
            }
        },

        computed: {
            loadBackgroundImage(){
                return `background-image: url("${this.pPath}")`;
            },

            loadTintOpacity(){
                return 'opacity: ' + this.pTintOpacity;
            }
        },

        watch: {
            path(){
                this.checkPath();
            },

            tintOpacity(){
                this.checkTintOpacity();
            }
        },

        methods: {
            checkPath(){
                if(this.pHasRootPath)
                    this.pPath = require(`@/assets/images/${this.path}`);
                else
                    this.pPath = this.path;
            },

            checkTintOpacity(){
                if(!isNaN(this.tintOpacity))
                    this.pTintOpacity = this.tintOpacity;
            }
        },

        mounted(){
            if(this.overrideRootPath == "true")
                this.pHasRootPath = false;
            this.checkPath();
        }
    }
</script>

<style>
    .parallax, .parallax-content{
        display: block;
    }

    .parallax{
        width: 100%;
        height: 100%;
    }

    .parallax-content{
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: center;
        background-size: cover;
    }

    .parallax-tint{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>