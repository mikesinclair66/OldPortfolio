<template>
    <div :id="loadStateAttr">
        <slot></slot>
    </div>
</template>

<script>
    import Anim from './parent/Anim.vue';

    export default {
        extends: Anim
    }
</script>