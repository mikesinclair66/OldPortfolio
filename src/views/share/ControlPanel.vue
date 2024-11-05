<template>
    <div class="option-selected" id="control-panel-option">
        <div class="panel-section">
            <div class="panel-label" @click="this.$refs['panel-options-listing'].toggle">Listings</div>
            <div id="listings-control-panel">
                <div class="btn" v-if="categorySelected == 0" @click="createCategory">
                    New Category
                </div>
                <div class="btn" v-else @click="() => viewCategory(0)">
                    &#8592; Go Back
                </div>
                <div class="btn" @click="() => createItem(categorySelected)">
                    New Item
                </div>
            </div>
            <class-anim target="panel-options" id="panel-options-listing" ref="panel-options-listing" toggle-on-render="true">
                <div class="panel-options-inner">
                    <div id="listings" :key="`listings-${itemsLength}-${categoriesLength}`">
                        <div class="named-process named-item" v-for="(item, index) of categories[categorySelected].items"
                        :key="`item-selection-${index}`">
                            <cropped-image :blob="item.url" @click="() => viewItem(index)" />
                            <div class="listing-hover-icon">
                                <img src="@/assets/images/icons/caution.png" alt="Note: not updated" />
                                <img src="@/assets/images/icons/cloud.png" alt="Note: not updated" />
                            </div>
                            <input type="text" class="nametag" :id="`item-nametag-${index}`" :value="item.name"
                            @blur="() => itemNameChange(index)" @keypress="ev => nametagKeypress(ev, index, 'item')" />
                        </div>
                        <div class="named-process named-category"
                        v-for="(category, index) in categories.slice(1, categories.length)"
                        v-if="categorySelected == 0" :key="`category-selection-${index}`">
                            <img v-if="category.items.length > 0" src="@/assets/images/icons/folder_icon.png"
                                :alt="category.name" @click="() => viewCategory(index + 1)" />
                            <img v-else src="@/assets/images/icons/folder_icon_empty.png"
                                :alt="category.name" @click="() => viewCategory(index + 1)" />
                            <input type="text" class="nametag" :id="`category-nametag-${index}`" :value="category.name"
                            @blur="() => categoryNameChange(index + 1)"
                            @keypress="ev => nametagKeypress(ev, index, 'category')" />
                        </div>
                    </div>
                </div>
            </class-anim>

            <!--
            <div id="listings-tooltip">
                <p>This listing is not up to date on Facebook or Instagram.</p>
                <p>View the listings on</p>
                <div id="listings-tooltip-social-media">
                    <img src="@/assets/images/fb_blue.png" alt="Facebook" />
                    <img src="@/assets/images/ig_pink.png" alt="Instagram" />
                    <img src="@/assets/images/tw_blue.png" alt="Twitter" />
                    <img src="@/assets/images/ln_blue.png" alt="LinkedIn" />
                </div>
            </div>
            -->
        </div>
        <div class="panel-section" v-if="hasDrafts">
            <div class="panel-label" @click="this.$refs['panel-options-drafts'].toggle">Drafts</div>
            <class-anim target="panel-options" ref="panel-options-drafts">

            </class-anim>
        </div>
        <div class="panel-section">
            <div class="panel-label">Account Discoverable</div>
            <class-anim target="panel-options" toggle-on-render="true" id="panel-options-client-access">
                <div class="panel-options-inner">
                    <b>Website Access</b>
                    <p>Clients will not be able to access your website in password mode.</p>
                    <!--TODO Label onclick-->
                    <input type="radio" name="radio-option" /><label>Live</label>
                    <!--TODO Label onclick-->
                    <input type="radio" name="radio-option" /><label>Password</label>
                </div>
            </class-anim>
        </div>
    </div>
</template>

<script>
    import ClassAnim from '@/components/anim/ClassAnim.vue';
    import ClickClassAnim from '@/components/anim/ClickClassAnim.vue';
    import fetch_controller from '@/assets/js/fetch_controller.js';
    import CroppedImage from '@/components/image/CroppedImage.vue';

    export default {
        components: {
            ClassAnim,
            ClickClassAnim,
            CroppedImage
        },

        data(){
            return {
                profileId: "F320elFSAXoN",
                defaultSnippetTag: "BT",
                hasDrafts: false,
                discoverable: false,
                categories: [
                    {
                        name: '',
                        id: 'mol@',//used in default package request
                        items: [
                            /*
                            {
                                id: '',
                                name: 'Oil Tankard',
                                extension: '',
                                url: ''
                            }
                            */
                        ]
                    }
                ],
                itemNametagInteracting: [],
                categoryNametagInteracting: [],
                itemsLength: 0,
                categoriesLength: 0,
                categorySelected: 0
            }
        },

        methods: {
            nametagKeypress(ev, index, type){
                if(ev.keyCode == 13)
                    document.getElementById(`${type}-nametag-${index}`).blur();
            },

            itemNameChange(index){
                let nametag = document.getElementById("item-nametag-" + index);
                if(nametag.value != this.categories[this.categorySelected].items[index].name){
                    this.categories[this.categorySelected].items[index].name = nametag.value;
                    fetch_controller.put('/profile/listings/category/item/rename', {
                        newName: nametag.value,
                        profile: this.profileId,
                        category: this.categories[this.categorySelected].id,
                        item: this.categories[this.categorySelected].items[index].id
                    });
                }
            },

            categoryNameChange(index){
                let nametag = document.getElementById("category-nametag-" + (index - 1));
                if(nametag.value != this.categories[index].name){
                    this.categories[index].name = nametag.value;
                    console.log("Uploading" + nametag.value);
                    fetch_controller.put('/profile/listings/category/rename', {
                        newName: nametag.value,
                        profile: this.profileId,
                        category: this.categories[index].id
                    }, data => console.log(data));
                }
            },

            viewItem(index){
                this.$emit('item-selected', {
                    categoryId: this.categories[this.categorySelected].id,
                    id: this.categories[this.categorySelected].items[index].id,
                    snippet: this.categories[this.categorySelected].items[index].url
                });
            },

            viewCategory(index=0){
                this.categorySelected = index;
                this.categories[this.categorySelected].items = [];
                if(index == 0)
                    this.categories = [this.categories[0]];

                fetch_controller.getJson(`/profile/${this.profileId}/listings/${this.categories[index].id}`
                + `/item/snippets/${this.defaultSnippetTag}`, data => {
                    console.log(data);

                    for(let item of data.category.items){
                        this.categories[this.categorySelected].items.push({
                            id: item.id,
                            name: item.name,
                            extension: item.extension,
                            url: ''
                        });
                        let itemLen = this.categories[this.categorySelected].items.length - 1;

                        this.itemNametagInteracting.push(false);
                        fetch_controller.getDataURL(`/profile/${this.profileId}/listings/`
                        + `${this.categories[this.categorySelected].id}/${item.id}/${this.defaultSnippetTag}/0`,
                        url => this.categories[this.categorySelected].items[itemLen].url = url);
                    }
                });

                if(index == 0)
                    fetch_controller.getJson(`/profile/${this.profileId}/listings/category/snippets`, data => {
                        for(let category of data.categories){
                            if(category.id != this.categories[0].id)
                                this.categories.push(category);
                            else
                                this.categories[0].name = category.name;
                        }
                    });
            },

            createItem(categoryIndex){
                this.categories[categoryIndex].items.push({
                    id: '',
                    name: '',
                    extension: '',
                    url: ''
                });
            },

            createCategory(){
                this.categories.push({
                    name: '',
                    id: '',
                    items: []
                });
                ++this.categoriesLength;

                // fetch_controller.post('/profile/listings/category/create', {

                // }, data => {

                // });
            }
        },

        mounted(){
            this.viewCategory();
        }
    }
</script>

<style lang="scss">
    #control-panel-option{
        .panel-section{
            .panel-label{
                width: calc(100% - 4pt);
                background-image: linear-gradient(to bottom, white, #e3e3e3);
                box-shadow: 0px 1px 2px #888888;
                color: rgb(50, 50, 50);
                padding: 4pt 0 4pt 4pt;
                cursor: pointer;
            }
    
            .panel-options, .panel-options-anim{
                transition: 0.4s;

                .panel-options-inner{
                    transition: 0.4s;
                    opacity: 0;
                    pointer-events: none;
                    margin-left: 6pt;
                    margin-top: -6pt;
                }
            }
    
            .panel-options-anim{
                .panel-options-inner{
                    opacity: 1;
                    pointer-events: auto;
                    margin-top: 0;
                }
            }

            &:last-child{
                .panel-label{
                    cursor: url('@/assets/images/icons/cursor_small.png'), auto;
                }
            }
        }

        #listings-control-panel{
            background-color: rgb(33, 33, 33);
            color: white;
            padding: 4pt;

            .btn{
                margin-right: 4pt;
            }
        }

        #panel-options-listing{
            .panel-options-inner{
                overflow-x: auto;
            }

            .named-process{
                display: inline-block;
                padding: 20pt 6pt 20pt 6pt;

                .process-container{
                    /*
                    cursor: url('@/assets/images/icons/eye_cursor_small.png'), auto;
                    */
                }

                .nametag, .nametag:focus{
                    width: 73pt;
                    text-align: center;
                    margin-top: 8pt;
                    background-image: linear-gradient(to bottom, rgb(60, 60, 60), rgb(25, 25, 25), black);
                    color: rgb(240, 240, 240);
                    border: solid rgb(190, 190, 190) 1pt;
                    border-radius: 2pt;
                }

                .nametag{
                    cursor: url('@/assets/images/icons/pencil_eraser_color_small.png') 0 40, auto;

                    &:hover{
                        background-image: linear-gradient(to bottom, rgb(90, 90, 90), rgb(50, 50, 50), black);
                    }
                
                    &:active{
                        background-image: linear-gradient(to bottom, black, rgb(35, 35, 35), rgb(70, 70, 70));
                    }
                }

                .nametag:focus{
                    outline: 0;
                    cursor: text;
                    background-image: none;
                    background-color: rgb(235, 235, 235);
                    color: black;
                    box-shadow: 0;

                    &:hover, &:anim{
                        background-color: rgb(235, 235, 235);
                        box-shadow: inset 2px 4px 8px black;
                    }
                }
            }

            .named-item .cropped-image, .named-category img{
                cursor: pointer;
                width: 75pt;
            }

            .named-item .cropped-image{
                height: 75pt;
            }

            .named-category img{
                display: block;
            }
        }
    }

    .listing-hover-icon{
        position: absolute;
        margin-top: -70pt;
        margin-left: 40pt;

        img{
            transition: 0.4s;
            width: 30pt;
            position: absolute;

            &:last-child{
                opacity: 0;
            }
        }

        &:hover, &:active{
            img{
                &:first-child{
                    opacity: 0;
                }

                &:last-child{
                    opacity: 1;
                }
            }
        }
    }

    #listings-tooltip{
        background-color: white;
        box-shadow: 1px 2px 4px #888888;
        border-radius: 8pt;
        padding: 5pt 8pt;
        text-align: center;
        display: inline-block;
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;

        #listings-tooltip-social-media img{
            display: inline-block;
            width: 20pt;
            cursor: pointer;
            margin-left: 4pt;
            margin-right: 4pt;
        }
    }
</style>