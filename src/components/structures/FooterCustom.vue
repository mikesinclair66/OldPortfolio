<template>
    <footer>
        <div>
            &#169; Copyright 2024 | Tech Labs | All Rights Reserved
        </div>
    </footer>
</template>

<script>
    export default {}
</script>

<style>
    footer{
        background-color: black;
        color: white;
        text-align: center;
        padding: 12pt;
        font-family: Tahoma, sans-serif;
    }

    footer div{
        cursor: text;
    }

    @media only screen and (orientation: landscape){
        footer{
            padding: 12pt 0;
        }
    }
</style>