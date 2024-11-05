<script>
    import Target from './Target.vue';
    
    export default {
        extends: Target,

        props: {
            toggleOnRender: "",
            disabledIf: ""
        },

        data(){
            return {
                toggled: false
            }
        },

        computed: {
            loadStateAttr(){
                return this.pTarget + (this.toggled ? "-anim" : "")
                    + (this.alternatives ? ' ' + this.alternatives : '');
            }
        },

        methods: {
            toggleNative(){
                if(!this.disabledIf || !this.disabledIf()){
                    this.toggled = !this.toggled;
                    return true;
                } else
                    return false;
            },

            toggle(){
                if(this.toggleNative())
                    this.$emit('toggle-switch', { toggled: this.toggled });
            },

            isToggled(){
                return this.toggled;
            }
        },

        mounted(){
            if(this.toggleOnRender == "true")
                this.toggled = true;//disregard disabled-if
        }
    }
</script>