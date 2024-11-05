<template>
    <div class="monitor-navigation">
        <hover-class-anim target="mn-option" id="mn-option-left" @click="() => this.$emit('exit-clicked')">
            <span>&#60; Exit</span>
        </hover-class-anim>
        <hover-class-anim target="mn-option" id="mn-option-right" @click="checkRightCallback">
            <div v-if="rightAssignment">
                <span>{{ pRightAssignment }} &#62;</span>
            </div>
        </hover-class-anim>
    </div>
</template>

<script>
    import HoverClassAnim from '@/components/anim/HoverClassAnim.vue';

    export default {
        components: {
            HoverClassAnim
        },

        props: {
            rightAssignment: "",
            rightCallback: ""
        },

        data(){
            return {
                pRightAssignment: ""
            }
        },

        watch: {
            rightAssignment(){
                if(this.rightAssignment)
                    this.pRightAssignment = this.rightAssignment;
            }
        },

        methods: {
            checkRightCallback(){
                if(this.rightCallback)
                    this.rightCallback();
            }
        },

        mounted(){
            if(this.rightAssignment)
                this.pRightAssignment = this.rightAssignment;
        }
    }
</script>

<style>
    .monitor-navigation{
        margin-top: 15pt;
        margin-left: 15pt;
        margin-right: 15pt;
    }

    .mn-option, .mn-option-anim{
        transition: 0.2s;
        cursor: pointer;
        display: inline-block;
        font-family: "IBM Plex Mono", sans-serif;
    }

    .mn-option-anim{
        background-color: #00D2D0;
        color: rgb(35, 35, 35);
    }

    #mn-option-left{
        position: absolute;
    }

    #mn-option-right{
        transform: translateX(-100%);
        position: relative;
        left: 195pt;
    }
</style>