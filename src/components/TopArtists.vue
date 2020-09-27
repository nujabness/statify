<template>
    <nb-container :style="styles.bgColorBlack">
        <scroll-view>
            <nb-col>
                <nb-list-item v-for="(item, index) in topArtists" thumbnail>
                    <nb-left>
                        <nb-thumbnail square :source="{uri: item.images[0].url}"/>
                    </nb-left>
                    <nb-body>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.fontSize18">{{item.name}}</nb-text>
                        <nb-text :style="styles.colorWhite, styles.fontFamilyCatCafe, styles.colorGrey" note>
                            <nb-text v-for="genreAlbum in item.genres" :style="styles.colorGrey, styles.fontFamilyCatCafe, styles.fontSize15">
                                {{genreAlbum}},&nbsp;
                            </nb-text>
                        </nb-text>
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
    props: ['navigation', 'topArtists'],
    data() {
        return {
            styles: MainStyleSheet
        }
    }
}
</script>