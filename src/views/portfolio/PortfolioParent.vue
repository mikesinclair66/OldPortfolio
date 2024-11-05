<script>
    import '@/assets/css/portfolio.scss';

    import ClassAnimSwitch from '@/components/anim/ClassAnimSwitch.vue';
    import HoverIdAnim from '@/components/anim/HoverIdAnim.vue';
    import HoverClassAnim from '@/components/anim/HoverClassAnim.vue';
    import IdAnimSwitch from '@/components/anim/IdAnimSwitch.vue';
    import IdAnim from '@/components/anim/IdAnim.vue';
    import MediaComponent from '@/components/structures/MediaComponent.vue';
    import NavigationBar from './NavigationBar.vue';
    import Page from '@/components/structures/Page.vue';
    import PageDesktopOnly from '@/components/structures/PageDesktopOnly.vue';
    import wait from '@/assets/js/wait.js';

    export default {
        extends: Page,

        components: {
            ClassAnimSwitch,
            HoverIdAnim,
            HoverClassAnim,
            IdAnimSwitch,
            IdAnim,
            MediaComponent,
            NavigationBar,
            PageDesktopOnly
        },

        data(){
            return {
                isMobile: false,
                headerAnim: undefined,
                headerAnimDegrees: 0,
                headerAnimAttr: "",
                verticalIconSegment: 0,
                verticalLineHeight: 0,
                disk: {
                    freeroamImg: {
                        selected: -1,
                        path: "",
                        uploaded: false,
                        //destination: [60, 230],
                        positionX: 0,
                        positionY: 0,
                        VERTICAL_TRANSITION: 165
                    },
                    names: [
                        "Skills",
                        "Under Development",
                        "Public Sites",
                        "Logos & Designs",
                        "Apps & Prototypes",
                        "University & Hobbies"
                    ],
                    sublevel: 0,
                    logoSection: {
                        hoverData: [
                            {
                                pinged: false,
                                opacity: [0, 1]
                            },
                            {
                                pinged: false,
                                opacity: [0, 1]
                            },
                            {
                                pinged: false,
                                opacity: [0, 1]
                            },
                            {
                                pinged: false,
                                opacity: [0, 1]
                            },
                            {
                                pinged: false,
                                opacity: [0, 1]
                            },
                            {
                                pinged: false,
                                opacity: [0, 1]
                            }
                        ]
                    }
                },
                viewport: {
                    initialInterval: undefined,
                    level: {
                        page: 0,
                        category: 0
                    },
                    message: "",
                    messages: [
                        "Click Disk to Insert",
                        "Loading..."
                    ]
                }
            }
        },

        computed: {
            loadGradient(){
                return `background-image: linear-gradient(${this.headerAnimDegrees}deg, #01B2D3, #00D3A8)`;
            },

            bamMonitorFirstPageAttr(){
                return (this.viewportLevel == 0) ? '' : 'display: none';
            },

            loadFbIcon(){
                return `margin-top: ${this.verticalIconSegment}px`;
            },

            loadIgIcon(){
                return `margin-top: ${this.verticalIconSegment * 2}px`;
            },

            loadLnIcon(){
                return `margin-top: ${this.verticalIconSegment * 3}px`;
            },

            loadTwIcon(){
                return `margin-top: ${this.verticalIconSegment * 4}px`;
            },

            loadFirstDisk(){
                if(this.disk.freeroamImg.selected == 0)
                    return 'transition: none; opacity: 0';
                else
                    return '';
            },

            loadSecondDisk(){
                if(this.disk.freeroamImg.selected == 1)
                    return 'transition: none; opacity: 0';
                else
                    return '';
            },

            loadThirdDisk(){
                if(this.disk.freeroamImg.selected == 2)
                    return 'transition: none; opacity: 0';
                else
                    return '';
            },

            loadFourthDisk(){
                if(this.disk.freeroamImg.selected == 3)
                    return 'transition: none; opacity: 0';
                else
                    return '';
            },

            loadFifthDisk(){
                if(this.disk.freeroamImg.selected == 4)
                    return 'transition: none; opacity: 0';
                else
                    return '';
            },

            loadSixthDisk(){
                if(this.disk.freeroamImg.selected == 5)
                    return 'transition: none; opacity: 0';
                else
                    return '';
            },

            loadFreeroamDisk(){
                return `left: ${this.disk.freeroamImg.positionX}px; top: ${this.disk.freeroamImg.positionY}px`;
            }
        },

        methods: {
            animateHeaderBackground(){
                this.headerAnim = window.setInterval(() => {
                    this.headerAnimDegrees += 2;
                    if(this.headerAnimDegrees >= 360)
                        this.headerAnimDegrees = 0;
                }, 25);
            },

            locateVerticalIcons(){
                let pf = document.getElementById("portfolio");
                this.verticalIconSegment = pf.offsetHeight / 5;
            },

            bulletClicked(i){
                window.scrollTo({
                    top: document.getElementById("portfolio-page").scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            },

            initiateInterval(){
                if(!this.disk.freeroamImg.uploaded){
                    let counter = 0,  diskLeaningLeft = true;
                    this.$refs['page-options'].shiftLeft();

                    this.viewport.initialInterval = window.setInterval(() => {
                        if(!this.disk.freeroamImg.uploaded){
                            if(++counter * 150 == 450 || counter * 150 == 900){
                                diskLeaningLeft = !diskLeaningLeft;
                                if(!diskLeaningLeft)
                                    this.$refs['page-options'].shiftRight();
                                else
                                    this.$refs['page-options'].shiftLeft();
                            }

                            if(counter * 150 == 900)
                                counter = 0;
                        }
                    }, 150);
                }
            },

            closeInterval(){
                window.clearInterval(this.viewport.initialInterval);
                this.viewport.initiateInterval = undefined;
            },

            logoMouseover(ref, id){
                this.disk.logoSection.hoverData[id].pinged = true;
                this.$refs[ref].shiftLeft();

                wait.millis(175, () => {
                    this.disk.logoSection.hoverData[id].opacity[0] = 1;
                    this.disk.logoSection.hoverData[id].opacity[1] = 0;
                });
                wait.millis(200, () => {
                    this.$refs[ref].shiftRight();
                    wait.millis(200, () => this.disk.logoSection.hoverData[id].pinged = false);
                });
            },

            logoMouseout(ref, id){
                this.disk.logoSection.hoverData[id].pinged = true;
                this.$refs[ref].shiftLeft();

                wait.millis(175, () => {
                    this.disk.logoSection.hoverData[id].opacity[0] = 0;
                    this.disk.logoSection.hoverData[id].opacity[1] = 1;
                });
                wait.millis(200, () => {
                    this.$refs[ref].shiftNeutral();
                    wait.millis(200, () => {
                        this.disk.logoSection.hoverData[id].pinged = false;
                    });
                });
            },

            openBlueDemise(){
                window.open('https://www.youtube.com/watch?v=EiCT7Rf6srY&list=PLTf0FZDyHcGg4ZiYB57AOflMuuSfkVn90',
                    '_blank');
            },

            lcdHovered(){
                if(this.disk.freeroamImg.uploaded && !this.$refs['cp-disk-lcd-component'].isToggled())
                    this.$refs['cp-disk-lcd-component'].toggle();
            },

            lcdUnhovered(){
                if(this.$refs['cp-disk-lcd-component'].isToggled())
                    this.$refs['cp-disk-lcd-component'].toggle();
            },

            eject(){
                if(this.disk.freeroamImg.uploaded){
                    this.$refs['cp-disk-lcd-eject'].toggle();
                    this.viewport.message = this.viewport.messages[0];
                    this.disk.freeroamImg.uploaded = false;
                    this.disk.freeroamImg.selected = -1;
                    this.disk.sublevel = 0;
                    wait.millis(50, this.initiateInterval);
                }
            },

            clickDisk(i){
                this.disk.freeroamImg.selected = i;
                this.disk.freeroamImg.path = document.getElementById("disk-" + i).src;

                let startingOffset;
                if(window.innerWidth < 1328)
                    startingOffset = 20;
                else if(window.innerWidth < 1358)
                    startingOffset = 65;
                else
                    startingOffset = 90;

                let cpDiskSlot = document.getElementById("cp-disk-slot");
                this.disk.freeroamImg.positionX = cpDiskSlot.offsetLeft + cpDiskSlot.offsetWidth / 2;
                this.disk.freeroamImg.positionY = cpDiskSlot.offsetTop + startingOffset;
                this.viewport.message = this.viewport.messages[1];

                wait.millis(400, () => {
                    this.disk.freeroamImg.positionY -= this.disk.freeroamImg.VERTICAL_TRANSITION;
                    wait.millis(400, () => {
                        this.disk.freeroamImg.uploaded = true;
                        this.viewport.message = this.disk.names[i];
                        this.$refs['cp-disk-lcd-eject'].toggle();
                        this.closeInterval();
                    });
                });
            },

            resetDisk(){
                this.disk.freeroamImg.selected = -1;
                this.disk.freeroamImg.path = "";
            }
        },

        mounted(){
            this.viewport.message = this.viewport.messages[0];
            this.locateVerticalIcons();
            window.addEventListener("resize", this.locateVerticalIcons);
            this.animateHeaderBackground();
            this.initiateInterval();

            let bullets = document.getElementById("bullets").getElementsByTagName("h2");
            for(let i = 0; i < bullets.length; i++)
                bullets[i].addEventListener("click", this.bulletClicked);
				
			wait.millis(500, () => window.alert("Our new portfolio with a new design and set of projects is soon to release! Please view our projects at the bottom right for now."));
        },

        beforeUnmount(){
            window.removeEventListener("resize", this.locateVerticalIcons);
            window.clearInterval(this.headerAnim);
            this.closeInterval();

            let bullets = document.getElementById("bullets").getElementsByTagName("h2");
            for(let i = 0; i < bullets.length; i++)
                bullets[i].addEventListener("click", this.bulletClicked);
        }
    }
</script>