<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

import {defineEmit, onMounted, ref, defineProps, computed, watch} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: () => '//please input your  code'
  }
})

const emit = defineEmit(['update:modelValue'])

interface SelectItem<T> {
  label: string
  value: T
}

let instance: monaco.editor.IStandaloneCodeEditor

window.MonacoEnvironment  = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker()
    }
    return new EditorWorker()
  }
}

const config = ref({
  theme: {
    list: [
      {
        label: 'vs',
        value: 'vs'
      },
      {
        label: 'vs-dark',
        value: 'vs-dark'
      }
    ] as SelectItem<string>[],
    change: (value: string) => {
      monaco.editor.setTheme(value)
    },
    value: 'vs',
  },
  language: {
    list: [
      {
        label: 'golang',
        value: 'go'
      },
      {
        label: 'typescript',
        value: 'typescript'
      }
    ] as SelectItem<string>[],
    change: (value: string) => {
      monaco.editor.setModelLanguage(instance.getModel(), value)
    },
    value: 'go'
  }
})

const editorDiv = ref<HTMLElement>()

onMounted(() => {
  instance = monaco.editor.create(editorDiv.value, {
    overviewRulerBorder: false,
    language: 'go',
    value: props.modelValue,
    automaticLayout: true,
    acceptSuggestionOnEnter: 'smart',
    lineNumbers: "on",
    readOnly: false,
    extraEditorClassName: 'editor'
  })
  instance.onDidChangeModelContent(
      (e) => {
        const value = instance.getValue()
        emit('update:modelValue', value)
      }
  )

})


</script>

<template lang="pug">
el-select(@change="config.theme.change" v-model="config.theme.value")
  el-option(v-for="(item) in config.theme.list" :label="item.label" :value="item.value")
el-select(@change="config.language.change" v-model="config.language.value")
  el-option(v-for="(item) in config.language.list" :label="item.label" :value="item.value")

.text-align-left(style={height: '100px'} ref="editorDiv")
</template>

<style lang="stylus" scoped>
.editor
  width 100%
  height 100%
</style>
