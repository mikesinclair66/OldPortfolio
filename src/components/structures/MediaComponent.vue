<template>
    <div class="sm-container">
        <!--
        <a href="https://www.facebook.com/profile.php?id=100093345190099" target="_blank">
            <img :src="loadFb" alt="Our Facebook" />
        </a>
        <a href="https://www.instagram.com/intivatechnologies/" target="_blank">
            <img :src="loadIg" alt="Our Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/95027268" target="_blank">
            <img :src="loadLn" alt="Our LinkedIn" />
        </a>
        <a href="https://twitter.com/IntivaTech" target="_blank">
            <img :src="loadTw" alt="Our Twitter" />
        </a>
    -->
        <slot></slot>
        <a href="https://www.youtube.com/channel/UCl19znfHE0bx5hjIjsoDiag" target="blank" class="yt-icon-container">
            <img src="@/assets/images/yt_black.png" alt="Our YouTube" />
        </a>
        <a href="mailto:intiva.technologies@gmail.com" target="_blank" class="mail-icon-container">
            <img src="@/assets/images/logo_small_black.png" alt="Email Us" />
            <img src="@/assets/images/logo_small_email.png" alt="Email Us" />
        </a>
    </div>
</template>

<style>
    .sm-container a{
        text-decoration: none;
    }

    .sm-container a:last-child{
        margin-right: 0;
    }

    .sm-container img{
        transition: 0.2s;
        width: 25pt;
    }

    .sm-container img:active, .sm-container img:hover{
        width: 30pt;
    }

    .mail-icon-container img:first-child{
        position: absolute;
    }

    .mail-icon-container img:last-child{
        pointer-events: none;
        position: relative;
        opacity: 0;
    }

    .mail-icon-container:active img, .mail-icon-container:hover img{
        width: 30pt;
    }

    .mail-icon-container:active img:last-child, .mail-icon-container:hover img:last-child{
        opacity: 1;
    }
</style>