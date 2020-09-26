<template>
    <nb-container :style="styles.bgColorPrimary">
        <nb-grid>
            <nb-col :style="styles.alignItemsStart, styles.mt60">
                <nb-row>
                    <nb-col>
                        <nb-col :style="styles.justifyContentCenter">
                            <view>
                                <nb-thumbnail :style="stylesObj.cardItemImage" :source="{uri: user.images[0].url}"/>
                            </view>
                        </nb-col>
                        <nb-col>
                            <nb-row :style="styles.alignItemsCenter, styles.justifyContentCenter">
                                <view>
                                    <text :style="styles.fontFamilyCatCafe, styles.fontSize18, styles.colorWhite">@{{user.display_name}}</text>
                                </view>
                                <view>
                                    <nb-button
                                            transparent
                                            :on-press="refresh">
                                        <nb-icon :style="{ color: '#FFF' }" name="ios-refresh"/>
                                    </nb-button>
                                </view>
                            </nb-row>
                        </nb-col>
                    </nb-col>
                </nb-row>
                <nb-row size="4">
                    <nb-tabs>
                        <nb-tab :textStyle="styles.tabFontFamilyCatCafe" :activeTextStyle="styles.tabFontFamilyCatCafe" heading="Top Artist">
                            <TopArtists :topArtists="topArtists"/>
                        </nb-tab>
                        <nb-tab :textStyle="styles.tabFontFamilyCatCafe" :activeTextStyle="styles.tabFontFamilyCatCafe" heading="Top Tracks">
                            <TopTracks :topTracks="topTracks"/>
                        </nb-tab>
                        <nb-tab :textStyle="styles.tabFontFamilyCatCafe" :activeTextStyle="styles.tabFontFamilyCatCafe" heading="Recent Track">
                                <RecentTrack :recentlyPlayedTracks="recentlyPlayedTracks"/>
                        </nb-tab>
                    </nb-tabs>
                </nb-row>
            </nb-col>
        </nb-grid>
    </nb-container>
</template>

<script>
import { Dimensions } from "react-native";
import { MainStyleSheet } from '../shared/stylesheet'
import DataService from "../services/http.service";
import Store from "../store/store"
import RecentTrack from "../components/RecentTrack";
import TopArtists from "../components/TopArtists";
import TopTracks from "../components/TopTracks";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;export default {
    components: {TopTracks, TopArtists, RecentTrack},
    props: ['navigation'],
        data() {
            return {
                styles: MainStyleSheet,
                recentlyPlayedTracks: [],
                topArtists: [],
                topTracks: [],
                stylesObj: {
                    cardItemImage: {
                        resizeMode: "cover",
                        height: deviceHeight / 4,
                        width: deviceWidth
                    }
                }
            }
        },
    mounted(){
        this.refresh()
    },
    computed:{
        user() {
            return Store.state.user
        }
    },
    methods: {
        refresh(){
            this.getRecentlyPlayedTracks()
            this.getTopArtists()
            this.getTopTracks()
        },
        getRecentlyPlayedTracks(){
            DataService.getRecentlyPlayedtracks().then(response => {
                this.recentlyPlayedTracks = response.data.items
            }).catch(error => {
                console.log(error);
            });
        },
        getTopArtists(){
            DataService.getTopArtists().then(response => {
                this.topArtists = response.data.items
            }).catch(error => {
                console.log(error);
            });
        },
        getTopTracks(){
            DataService.getTopTracks().then(response => {
                this.topTracks = response.data.items
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
