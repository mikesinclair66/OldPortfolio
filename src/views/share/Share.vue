<template>
    <div id="page-container">
        <page-desktop-only id="share-page">
            <div id="content-share">
                <div id="option-icons">
                    <click-class-anim target="option-icon" @toggle-switch="() => activateOption(0)" toggle-on-render="true"
                    ref="option-icon-0" key="oi-0" :disabled-if="() => this.optionIconSelected == 0">
                        <img src="@/assets/images/icons/computer.png" alt="Inventory" />
                        <img src="@/assets/images/icons/computer_color.png" alt="Inventory" />
                    </click-class-anim>
                    <click-class-anim v-if="itemSelected.id != ''" target="option-icon" toggle-on-render="true"
                    @toggle-switch="() => activateOption(1)" ref="option-icon-1" key="oi-1" :disabled-if="() =>
                    this.optionIconSelected == 1">
                        <img src="@/assets/images/icons/share_image.png" alt="Inventory" />
                        <img src="@/assets/images/icons/share_image_color.png" alt="Inventory" />
                    </click-class-anim>
                    <click-class-anim v-if="itemSelected.id != ''" target="option-icon" @toggle-switch="() =>
                    activateOption(2)" ref="option-icon-2" key="oi-2" :disabled-if="() => this.optionIconSelected == 2">
                        <img src="@/assets/images/icons/info.png" alt="Inventory" />
                        <img src="@/assets/images/icons/info_color.png" alt="Inventory" />
                    </click-class-anim>
                    <click-class-anim target="option-icon" @toggle-switch="() => activateOption(lastOptionIconIndex)"
                    :ref="`option-icon-${lastOptionIconIndex}`" :key="`oi-${lastOptionIconIndex}`"
                    :disabled-if="() => this.optionIconSelected == lastOptionIconIndex">
                        <img src="@/assets/images/icons/male.png" alt="My Profile" />
                        <img src="@/assets/images/icons/male_color.png" alt="My Profile" />
                    </click-class-anim>
                    <class-anim target="upload-images-extension" ref="upload-images-extension">
                        <input type="file" id="upload-images" hidden multiple />
                        <div class="btn" @click="uploadImages">Upload Images</div>
                    </class-anim>
                </div>

                <control-panel v-if="optionIconSelected == 0" @item-selected="data => selectItem(data)" />
                <login-details v-else-if="optionIconSelected == lastOptionIconIndex" />
                <browse-attachments v-else-if="optionIconSelected == 1" ref="browse-attachments"
                    :category-id="itemSelected.categoryId" :id="itemSelected.id" />
                <item-info v-else />
                
                <div id="logo-section">
                    <a href="https://intivatechnologies.ca" target="_blank">
                        <div id="caption">Powered by</div>
                        <img src="@/assets/images/intiva_horizontal_black.png" alt="Intiva Technologies" />
                    </a>
                </div>
            </div>
        </page-desktop-only>
    </div>
</template>

<script>
    import BrowseAttachments from './BrowseAttachments.vue';
    import ClassAnim from '@/components/anim/ClassAnim.vue';
    import IdAnim from '@/components/anim/IdAnim.vue';
    import ControlPanel from './ControlPanel.vue';
    import LoginDetails from './LoginDetails.vue';
    import Page from '@/components/structures/Page.vue';
    import PageDesktopOnly from '@/components/structures/PageDesktopOnly.vue';
    import Parallax from '@/components/image/Parallax.vue';
    import ClickClassAnim from '@/components/anim/ClickClassAnim.vue';
    import ItemInfo from '@/views/share/ItemInfo.vue';
    import { ref } from 'vue';
    import wait from '@/assets/js/wait.js';

    export default {
        extends: Page,

        components: {
            BrowseAttachments,
            ClassAnim,
            IdAnim,
            ControlPanel,
            LoginDetails,
            PageDesktopOnly,
            Parallax,
            ClickClassAnim,
            ItemInfo
        },

        data(){
            return {
                optionIconSelected: 0,
                snippetSelected: -1,
                snippetWidth: 0,
                lastOptionIconIndex: 1,
                itemSelected: {
                    categoryId: "",
                    id: ""
                }
            }
        },

        computed: {
            processSnippet(){
                return 'width: ' + this.snippetWidth + 'px';
            }
        },

        methods: {
            activateOption(n){
                this.optionIconSelected = n;
                for(let i = 0; i < this.lastOptionIconIndex + 1; i++){
                    if(i != this.optionIconSelected && this.$refs['option-icon-' + i].isToggled())
                        this.$refs['option-icon-' + i].toggleNative();
                }

                if((this.lastOptionIconIndex == 3 && n == 1) || this.$refs['upload-images-extension'].isToggled())
                    this.$refs['upload-images-extension'].toggle();
            },

            uploadImages(){
                let uploadImages = document.getElementById("upload-images");
                uploadImages.addEventListener("change", this.scanImages);
                uploadImages.click();
            },

            selectItem(data){
                this.itemSelected.categoryId = data.categoryId;
                this.itemSelected.id = data.id;
                this.lastOptionIconIndex = 3;
                wait.millis(100, async () => {
                    this.activateOption(1);
                    await this.$nextTick();
                    this.$refs['browse-attachments'].loadSelectedItem(data.snippet);
                });
            },

            scanImages(ev){
                for(let file of ev.target.files){
                    let fr = new FileReader();
                    fr.addEventListener("load", () => this.$refs['browse-attachments'].generateItemImage(fr.result));
                    fr.readAsDataURL(file);
                }
            }
        },

        mounted(){
            this.optionIconSelected = ref(0);

            if(new URLSearchParams(window.location.search).get('landOnLogin') == 'true')
                this.optionIconSelected = 1;
            else
                this.optionIconSelected = 0;
        }
    }
</script>

<style lang="scss">
    #share-page{
        overflow: hidden;
    }

    #content-share{
        background-color: #f9f9f9;
        border-radius: 28pt;
        width: 660pt;
        height: 375pt;
        margin: 40pt 0 40pt 50%;
        transform: translateX(-50%);
        box-shadow: 2px 4px 8px #959595;
    }

    #option-icons{
        padding-left: 8pt;
        background: linear-gradient(to bottom, white, #e6e6e6);
    }

    .option-icon, .option-icon-anim{
        transition: 0.4s;
        padding: 4pt;
        cursor: pointer;
        display: inline-block;

        img{
            transition: 0.4s;
            width: 24pt;

            &:first-child{
                position: absolute;
            }

            &:last-child{
                position: relative;
            }
        }
    }

    .option-icon{
        &:hover, &:active{
            padding-top: 7pt;
            padding-bottom: 7pt;
            background-color: #e3e3e3;
        }

        img:last-child{
            opacity: 1;
        }
    }

    .option-icon-anim{
        padding-top: 7pt;
        padding-bottom: 7pt;
        background-color: #b5b5b5;
        cursor: url('@/assets/images/icons/cursor_small.png'), auto;

        img{
            transform: rotate(-15deg);

            &:last-child{
                opacity: 0;
            }
        }
    }

    .option-selected{
        display: block;
    }

    #logo-section{
        text-align: center;
        background: linear-gradient(to bottom, white, #e3e3e3);
        width: 660pt;
        height: 28pt;
        border-radius: 0 0 28pt 28pt;
        border-top: solid #e3e3e3 1pt;
        position: absolute;
        top: 347pt;

        #caption{
            display: inline-block;
            margin-right: 4pt;
            font-family: Tahoma, sans-serif;
            color: black;
            position: relative;
            bottom: 1pt;
        }

        img{
            width: 125pt;
            position: relative;
            top: 4pt;
        }
    }

    #share-page{
        footer{
            position: absolute;
            top: 100%;
            width: 100%;
        }

        #company-btn{
            display: none;
        }
    }

    .upload-images-extension, .upload-images-extension-anim{
        transition: 0.4s;
        display: inline-block;
        transform: translateY(-50%);
        position: relative;
        top: 15pt;
        left: 10pt;
        opacity: 0;
        pointer-events: none;
    }

    .upload-images-extension-anim{
        top: 5pt;
        opacity: 1;
        pointer-events: auto;
    }
</style>