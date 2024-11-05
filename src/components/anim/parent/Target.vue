<script>
    export default {
        props: {
            target: "",
            alternatives: ""
        },

        data(){
            return {
                pTarget: ""
            }
        },

        mounted(){
            this.pTarget = this.target;
        }
    }
</script>