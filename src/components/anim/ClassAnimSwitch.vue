<template>
    <div ref="anim" :class="loadStateAttr">
        <slot></slot>
    </div>
</template>

<script>
    import AnimSwitch from './parent/AnimSwitch.vue';

    export default {
        extends: AnimSwitch
    }
</script>