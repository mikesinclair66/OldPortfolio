<template>
    <class-anim :target="target" ref="anim" @mouseover="enableAnim" @mouseout="disableAnim">
        <slot></slot>
    </class-anim>
</template>

<script>
    import ClassAnim from './ClassAnim.vue';

    export default {
        components: {
            ClassAnim
        },

        props: {
            target: ""
        },

        methods: {
            enableAnim(){
                this.$refs['anim'].toggle();
                this.$emit('mouse-over');
            },

            disableAnim(){
                this.$refs['anim'].toggle();
                this.$emit('mouse-out');
            }
        }
    }
</script>