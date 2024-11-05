<script>
    import '@/assets/css/main_style.scss';
    import '@/assets/css/tablet_style.css';
    import '@/assets/css/desktop_style.css';

    import media_query from '@/assets/js/media_query';

    export default {
        data(){
			return {
				isPortrait: true,
                isMobile: true
			}
		},

        methods: {
            checkPortrait(){
                this.isPortrait = media_query.isPortrait();
            },

            checkMobile(){
                this.isMobile = media_query.isMobile();
            }
        },

		mounted(){
            this.checkPortrait();
            this.checkMobile();
			window.addEventListener("resize", this.checkPortrait);
            window.addEventListener("resize", this.checkMobile);
		},

        beforeUnmount(){
            window.removeEventListener("resize", this.checkPortrait);
            window.removeEventListener("resize", this.checkMobile);
        }
    }
</script>