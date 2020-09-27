<template>
    <nb-container :style="styles.bgColorBlack">
        <scroll-view>
            <nb-col>
                <nb-list-item v-for="item in recentlyPlayedTracks" thumbnail>
                    <nb-left>
                        <nb-thumbnail square :source="{uri: item.track.album.images[0].url}"/>
                    </nb-left>
                    <nb-body>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.fontSize18">{{item.track.name}}</nb-text>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.colorGrey" note>{{item.track.artists[0].name}}</nb-text>
                    </nb-body>
                </nb-list-item>
            </nb-col>
        </scroll-view>
    </nb-container>
</template>

<script>
import { MainStyleSheet } from '../shared/stylesheet'

export default {
    props: ['navigation', 'recentlyPlayedTracks'],
    data() {
        return {
            styles: MainStyleSheet
        }
    }
}
</script>