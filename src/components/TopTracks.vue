<template>
    <nb-container :style="styles.bgColorPrimary">
        <scroll-view :style="styles.bgColorPrimary">
            <nb-col>
                <nb-list-item v-for="(item, index) in topTracks" thumbnail>
                    <nb-left>
                        <nb-thumbnail square :source="{uri: item.album.images[0].url}"/>
                    </nb-left>
                    <nb-body>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.fontSize18">{{item.name}}</nb-text>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.colorGrey" note>{{item.album.artists[0].name}}</nb-text>
                    </nb-body>
                    <nb-right>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.fontSize18">#{{index+1}}</nb-text>
                    </nb-right>
                </nb-list-item>
            </nb-col>
        </scroll-view>
    </nb-container>
</template>

<script>
import { MainStyleSheet } from '../shared/stylesheet'

export default {
    props: ['navigation', 'topTracks'],
    data() {
        return {
            styles: MainStyleSheet
        }
    }
}
</script>