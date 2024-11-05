<template>
    <div :style="loadGradient" :class="loadClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            colorList: "",
            alternateClasses: "",
            startingDegree: ""
        },

        data(){
            return {
                degree: 0,
                interval: undefined,
                colors: ['#B7B7B7', '#969696']
            }
        },

        watch: {
            colorList(){
                this.checkColors();
            }
        },

        computed: {
            loadGradient(){
                return `background-image: linear-gradient(${this.degree}deg, ${this.colors[0]}, ${this.colors[1]})`;
            },

            loadClasses(){
                return "gradient-rotator" + (this.alternateClasses ? ' ' + this.alternateClasses : '');
            }
        },

        methods: {
            startDegreeTransition(){
                this.interval = window.setInterval(() => {
                    if(this.degree + 2 >= 360)
                        this.degree = 0;
                    
                    this.degree += 2;
                }, 25);
            },

            stopDegreeTransition(){
                window.clearInterval(this.interval);
                this.interval = undefined;
            },

            checkColors(){
                if(this.colorList)
                    this.colors = this.colorList;
            }
        },

        mounted(){
            this.checkColors();
            this.startDegreeTransition();
            if(this.startingDegree)
                this.degree = Number(this.startingDegree);
        },

        beforeUnmount(){
            this.stopDegreeTransition();
        }
    }
</script>