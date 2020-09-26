<template>
    <nb-container :style="styles.bgColorPrimary">
        <nb-grid>
            <nb-col :style="styles.alignItemsStart, styles.mt50">
                <nb-row>
                    <view>
                        <nb-thumbnail :style="stylesObj.cardItemImage" :source="{uri: img}"/>
                    </view>
                    <view>
                        <text :style="styles.colorWhite, styles.mt30, styles.ml10">{{user.display_name}}</text>
                        <text :style="styles.colorWhite, styles.mt30, styles.ml10">{{user.email}}</text>
                    </view>
                </nb-row>
                <view :style="styles.ml30">
                    <nb-button  large success rounded :on-press="log">
                        <text :style="styles.colorWhite">LOG</text>
                    </nb-button>
                </view>
            </nb-col>
        </nb-grid>
    </nb-container>
</template>

<script>
import { Dimensions } from "react-native";
import { MainStyleSheet } from '../shared/stylesheet'
import Store from "../store/store"
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;export default {
        props: ['navigation'],
        data() {
            return {
                styles: MainStyleSheet,
                stylesObj: {
                    cardItemImage: {
                        resizeMode: "cover",
                        height: deviceHeight/5.5,
                        width: deviceWidth /2.5
                    }
                }
            }
        },
    computed:{
        user() {
            return Store.state.user
        },
        img() {
            return this.user.images[0].url
        }
    },
    methods: {
        log(){
            console.log(this.user)
        }
    }
}
</script>
