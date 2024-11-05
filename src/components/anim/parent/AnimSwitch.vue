<script>
    import Target from './Target.vue';
    
    export default {
        extends: Target,

        props: {
            toggleOnRender: ""
        },

        data(){
            return {
                toggleSwitch: -1
            }
        },

        computed: {
            loadStateAttr(){
                let ext = "";
                if(this.toggleSwitch != -1)
                    ext = "-" + this.toggleSwitch;

                return this.pTarget + ext;
            }
        },

        methods: {
            shiftLeft(){
                this.toggleSwitch = 0;
            },

            shiftNeutral(){
                this.toggleSwitch = -1;
            },

            shiftRight(){
                this.toggleSwitch = 1;
            }
        },

        mounted(){
            if(this.toggleOnRender == "left")
                this.toggleSwitch = 0;
            else if(this.toggleOnRender == "right")
                this.toggleSwitch = 1;
        }
    }
</script>