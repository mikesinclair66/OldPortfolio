<template>
    <div class="page-content-container">
        <page-container>
            <slot></slot>
        </page-container>
        <div id="desktop-limited">
            <div id="desktop-limited-inner">
                <img src="@/assets/images/logo_sad.jpg" alt="Sad Face" />
                <h3>This page is only available on landscape desktop<br />resolutions of 1025px or higher.</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import PageContainer from './PageContainer.vue';

    export default {
        components: {
            PageContainer
        }
    }
</script>

<style>
    .page-content-container .page-content{
        display: none;
    }

    #desktop-limited{
        text-align: center;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 50%;
    }

    #desktop-limited-inner{
        transform: translateY(-50%);
    }

    @media only screen and (min-width: 1025px){
        .page-content-container .page-content{
            display: block;
        }

        #desktop-limited{
            display: none;
        }
    }
</style>