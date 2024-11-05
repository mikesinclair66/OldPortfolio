<template>
    <div ref="anim" :class="loadStateAttr" @click="toggle">
        <slot></slot>
    </div>
</template>

<script>
    import ClassAnim from './ClassAnim.vue';

    export default {
        extends: ClassAnim
    }
</script>