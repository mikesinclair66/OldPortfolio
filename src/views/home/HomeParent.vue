<script>
    import '@/assets/css/home.scss';

    import ClassAnim from '@/components/anim/ClassAnim.vue';
    import FooterCustom from '@/components/structures/FooterCustom.vue';
    import GradientRotator from '@/components/structures/GradientRotator.vue';
    import HoverIdAnim from '@/components/anim/HoverIdAnim.vue';
    import IdAnim from '@/components/anim/IdAnim.vue';
    import IdAnimSwitch from '@/components/anim/IdAnimSwitch.vue';
    import Page from '@/components/structures/Page.vue';
    import PageContainer from '@/components/structures/PageContainer.vue';
    import wait from '@/assets/js/wait.js';

    export default {
        extends: Page,

        components: {
            ClassAnim,
            FooterCustom,
            GradientRotator,
            HoverIdAnim,
            IdAnim,
            IdAnimSwitch,
            PageContainer
        },

        data(){
            return {
                tooltipShown: false
            }
        },

        methods: {
            leaveInfoStage(){
                //temp
                let rotationMax = 5, rotationCount = 0, rotationFlipped = false;
                this.$refs['info-banner'].shiftLeft();
                let rotationInterval = window.setInterval(() => {
                    if(!rotationFlipped){
                        rotationFlipped = true;
                        this.$refs['info-banner'].shiftRight();
                    } else {
                        rotationFlipped = false;
                        ++rotationCount;
                        this.$refs['info-banner'].shiftLeft();
                    }

                    if(rotationCount == rotationMax){
                        this.$refs['info-banner'].shiftNeutral();
                        window.clearInterval(rotationInterval);
                    }
                }, 100);

                /*
                this.$refs['info-banner'].toggle();
                this.$refs['ns-overlay'].toggle();
                wait.millis(300, () => {
                    this.$refs['ns-apps-label'].toggle();
                    this.$refs['ns-tech-label'].toggle();
                    this.$refs['ns-apps-fadeout'].toggle();
                    this.$refs['ns-techlabs-fadeout'].toggle();
                    this.$refs['ns-tech-fadeout'].toggle();

                    if(!this.tooltipShown){
                        wait.millis(200, () => {
                            this.$refs['newsletter-tooltip'].toggle();
                            this.tooltipShown = true;
                            wait.millis(3400, () => {
                                if(this.$refs['newsletter-tooltip'].isToggled())
                                    this.$refs['newsletter-tooltip'].toggle();
                            });
                        });
                    }
                });
                */
            },

            returnInfoStage(){
                /*
                this.$refs['ns-apps-label'].toggle();
                this.$refs['ns-tech-label'].toggle();
                this.$refs['ns-overlay'].toggle();
                if(this.$refs['newsletter-tooltip'].isToggled())
                    this.$refs['newsletter-tooltip'].toggle();

                wait.millis(200, this.$refs['info-banner'].toggle);
                */
            }
        }
    }
</script>