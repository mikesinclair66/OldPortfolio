<template>
    <div class="option-selected" id="attachments-option">
        <cropped-image v-if="itemImages.length > 0" :blob="itemImages[0]" />
        <cropped-image v-if="itemImages.length > 1" :blob="itemImages[1]" />
        <cropped-image v-if="itemImages.length > 2" :blob="itemImages[2]" />
        <cropped-image v-if="itemImages.length > 3" :blob="itemImages[3]" />
        <cropped-image v-if="itemImages.length > 4" :blob="itemImages[4]" />
        <cropped-image v-if="itemImages.length > 5" :blob="itemImages[5]" />
        <cropped-image v-if="itemImages.length > 6" :blob="itemImages[6]" />
        <cropped-image v-if="itemImages.length > 7" :blob="itemImages[7]" />
    </div>
</template>

<script>
    import CroppedImage from '@/components/image/CroppedImage.vue';
    import fetch_controller from '@/assets/js/fetch_controller';

    export default {
        components: {
            CroppedImage
        },

        props: {
            categoryId: "",
            id: ""
        },

        data(){
            return {
                itemImages: [],
                imageDims: []
            }
        },

        methods: {
            generateItemImage(element){
                this.itemImages.push(element);
                ++this.itemImageCount;
                let img = new Image();
                img.src = element;
                img.onload = () => this.imageDims.push([img.width, img.height]);
            },

            loadSelectedItem(snippet){
                if(this.itemImages.length > 0){
                    this.itemImages = [];
                    this.imageDims = [];
                }
                this.generateItemImage(snippet);

                //fetch_controller
            }
        }
    }
</script>

<style lang="scss">
    #attachments-option .cropped-image{
        width: 125pt;
        height: 125pt;
        cursor: pointer;
        display: inline-block;
    }
</style>