<template>
    <div class="page-container" id="demo-luksus">
        <div id="ring-background">
            
        </div>
        <div id="model-list">
            <div class="model-list-inner" v-if="jCombination == 0">
                <div v-for="presetName of presetList" class="model-list-element">
                    <img :src="'@/assets/images/luksus/' + presetName + '.png'" />
                </div>
            </div>
            <div class="model-list-inner" v-else-if="jCombination == 1">
                <div v-for="diamondName of diamondList" class="model-list-element">
                    <img :src="'@/assets/images/luksus/' + diamondName + '.png'" />
                </div>
            </div>
            <div class="model-list-inner" v-else>
                <div v-for="ringName of ringList" class="model-list-element">
                    <img :src="'@/assets/images/luksus/' + ringName + '.png'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                jCombination: 1,
                presetList: ["preset_1", "preset_2", "preset_3"],
                diamondList: ["round", "pear", "princess", "marquise", "oval", "radiant", "emerald", "heart", "cushion", "asscher"],
                ringList: ["ring"]
            }
        }
    }
</script>

<style lang="scss">
    body{
        background-color: grey;
    }

    #ring-background{
        position: absolute;
        top: 75pt;

        img{
            &:first-child{
                position: absolute;
            }

            &:last-child{
                position: relative;
                left: 240pt;
                bottom: 75pt;
                width: 125pt;
            }
        }
    }
</style>