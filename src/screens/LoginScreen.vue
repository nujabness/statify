<template>
    <nb-container :style="styles.bgColorBlack">
        <nb-grid>
            <nb-col :style="styles.alignItemsCenter, styles.justifyContentCenter">
                <view :style="styles.justifyContentCenter, styles.height50">
                    <text :style="styles.fontFamilyCatCafe, styles.colorWhite, styles.fontSize50">Statify</text>
                </view>
                <view>
                    <nb-button :style="styles.justifyContentCenter, styles.width200, styles.mt50" large rounded :on-press="handleSpotifyLogin">
                        <Entypo name="spotify" :size="24" color="#303030" />
                        <text :style="styles.fontFamilyCatCafe, styles.colorGreyDark, styles.ml5, styles.textBold">LOG IN WITH SPOTIFY</text>
                    </nb-button>
                </view>
            </nb-col>
        </nb-grid>
    </nb-container>
</template>

<script>
import { Entypo } from '@expo/vector-icons';
import { MainStyleSheet } from '../shared/stylesheet'
import * as AuthSession from 'expo-auth-session';
import DataService from "../services/http.service";
import {CLIENT_ID_SPOTIFY, SCOPE_SPOTIFY} from "../shared/constants";
import Store from "../store/store"

export default {
    components: {Entypo},
    props: ['navigation'],
    data() {
        return {
            styles: MainStyleSheet,
            didError: false
        }
    },
     methods: {
         async handleSpotifyLogin() {
             let redirectUrl = AuthSession.getRedirectUrl();
             // let redirectUrl = AuthSession.getDefaultReturnUrl();
             let results = await AuthSession.startAsync({
                 authUrl: `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID_SPOTIFY}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(SCOPE_SPOTIFY)}&response_type=token`
             });
             Store.commit('SET_TOKEN', results.params.access_token);
             if (results.type !== 'success') {
                 this.didError = true;
             } else {
                 DataService.login().then(response => {
                     Store.commit('SET_USER', response.data);
                     this.navigation.navigate('Profile')
                 }).catch(error => {
                     console.log(error);
                 });
             }
         },
     }
}
</script>