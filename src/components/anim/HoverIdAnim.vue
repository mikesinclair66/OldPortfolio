<template>
    <id-anim :target="target" ref="anim" @mouseover="enableAnim" @mouseout="disableAnim">
        <slot></slot>
    </id-anim>
</template>

<script>
    import IdAnim from './IdAnim.vue';

    export default {
        components: {
            IdAnim
        },

        props: {
            target: "",
            mouseOverFunc: "",
            mouseOutFunc: ""
        },

        methods: {
            enableAnim(){
                if(!this.mouseOverFunc)
                    this.$refs['anim'].toggle();
                else
                    this.mouseOverFunc();
            },

            disableAnim(){
                if(!this.mouseOutFunc)
                    this.$refs['anim'].toggle();
                else
                    this.mouseOutFunc();
            },

            toggle(){
                this.$refs['anim'].toggle();
            },

            isToggled(){
                return this.$refs['anim'].isToggled();
            }
        }
    }
</script>