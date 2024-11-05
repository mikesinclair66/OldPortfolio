<template>
    <div class="page-content">
        <navbar />
        <slot></slot>
        <footer-custom id="default-footer" />
    </div>
</template>

<script>
    import FooterCustom from './FooterCustom.vue';
    import Navbar from './Navbar.vue';

    export default {
        props: {
            hideDefaultFooter: ""
        },
        
        components: {
            FooterCustom,
            Navbar
        }
    }
</script>