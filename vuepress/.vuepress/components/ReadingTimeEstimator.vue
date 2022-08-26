<template lang="pug">
  div
    wysiwyg(v-model="text")
    .container
      form.form-inline.my-2.ml-2
        .form-group.row
          label.col-sm-2.col-form-label(for="locale") Locale
          .col-sm-2
            select#locale.form-control(name="locale" v-model="locale")
              option(value='en') en
              option(value='fr') fr
              option(value='es') es
              option(value='cn') cn
              option(value='ja') ja
        .form-group.row
          label.col-sm-6.col-form-label(for="wordPerMinutes") {{ msg[lang].wpm }}
          .col-sm-1
            input#wordPerMinutes.form-control(name="wordPerMinutes" v-model="wordsPerMinute" type="number" min="0")
    p {{ msg[lang].result }}:
    pre(v-highlightjs=result)
      code.json {{ result }}
  </div>
</template>
<script>
import { readingTime } from '@dynamic/reading-time-estimator'
import wysiwyg from 'vue-wysiwyg'
import VueHighlightJS from 'vue-highlightjs'
import Vue from 'vue'

Vue.use(wysiwyg)
Vue.use(VueHighlightJS)

export default {
  props: {
    lang: {
      type: String,
      default: 'en',
    },
  },
  data: () => {
    return {
      text: '',
      locale: 'en',
      wordsPerMinute: 300,
      msg: {
        en: {
          noText: 'No text provided',
          result: 'Result',
          wpm: 'Words per minute',
        },
        fr: {
          noText: 'Aucun texte fourni',
          result: 'Résultat',
          wpm: 'Mots par minute',
        },
        es: {
          noText: 'No hay texto proporcionado',
          result: 'Resultado',
          wpm: 'Palabras por minuto',
        },
        cn: {
          noText: '没有提供文字',
          result: '结果',
          wpm: '每分钟字数e',
        },
        ja: {
          noText: 'テキストがありません',
          result: '結果',
          wpm: '1分あたりの単語数',
        },
      },
    }
  },
  computed: {
    result() {
      return this.text !== ''
        ? readingTime(this.text, this.wordsPerMinute, this.locale)
        : this.msg[this.lang].noText
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~vue-wysiwyg/dist/vueWysiwyg.css'
</style>
