<template>
    <nav>
        <a href="https://intivatechnologies.ca" target="_blank">
            <div class="btn" id="company-btn">
                <img src="@/assets/images/logo_small_white.png" alt="Visit official website" />
                <div class="img-btn-label">Visit official company website</div>
            </div>
        </a>
    </nav>
</template>

<script>
    export default {}
</script>

<style>
    nav{
        background-image: linear-gradient(to bottom, white, #e6e6e6);
        /*box-shadow: 1px 2px 4px #979797;*/
        height: 70pt;
        position: relative;
        z-index: 10;
    }

    nav .btn{
        transform: translateY(-50%);
        position: relative;
        top: 35pt;
    }

    nav .btn:first-child{
        margin-left: 20pt;
    }

    @media only screen and (min-width: 750px){
        nav .btn{
            margin-left: 32pt;
        }
    }
</style>