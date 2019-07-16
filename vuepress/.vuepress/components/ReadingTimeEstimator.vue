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
import { readingTime } from '../../../../reading-time-estimator';
import wysiwyg from 'vue-wysiwyg';
import VueHighlightJS from 'vue-highlightjs'
import Vue from 'vue';

Vue.use(wysiwyg);
Vue.use(VueHighlightJS);

export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    }
  },
  data: () => {
    return {
      text: '',
      locale: 'en',
      wordsPerMinute: 500,
      msg: {
        en: {
          noText: 'No text provided',
          result: 'Result',
          wpm: 'Words per minute'
        },
        fr: {
          noText: 'Aucun texte fourni',
          result: 'Résultat',
          wpm: 'Mots par minute'
        }
      }
    }
  },
  computed: {
    result() {
      return this.text !== '' ? readingTime(this.text, { locale: this.locale, wordsPerMinute: this.wordsPerMinute  }) : this.msg[this.lang].noText;
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~vue-wysiwyg/dist/vueWysiwyg.css'
</style>
