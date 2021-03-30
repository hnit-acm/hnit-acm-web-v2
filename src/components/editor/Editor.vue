<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

import { defineEmit, onMounted, ref, defineProps, computed, watch } from "vue";

// todo 需要优化

const props = defineProps({
  modelValue: String
})

const emit = defineEmit(['update:modelValue'])


interface SelectItem<T> {
  label: string
  value: T
}

let instance: monaco.editor.IStandaloneCodeEditor|null = null

self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
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
      console.log(value)
      monaco.editor.setModelLanguage(instance.getModel(), value.toString())
    },
    value: 'go'
  }
})

const codeValue = ref('')

onMounted(() => {
  instance = monaco.editor.create(document.getElementById('editor'), {
    overviewRulerBorder: false,
    language: 'go',
    value: props.modelValue,
    automaticLayout: true,
    acceptSuggestionOnEnter: 'smart',
    lineNumbers: true,
    readOnly: false,
    extraEditorClassName: 'editor'
  })
  instance.onDidChangeModelContent(
    (e) => {
      codeValue.value = instance.getValue()
    }
  )
  watch(codeValue, value => {
    emit('update:modelValue', value)
  })

})


</script>

<template lang="pug">
el-select(@change="config.theme.change" v-model="config.theme.value")
  el-option(v-for="(item) in config.theme.list" :label="item.label" :value="item.value")
el-select(@change="config.language.change" v-model="config.language.value")
  el-option(v-for="(item) in config.language.list" :label="item.label" :value="item.value")

#editor.text-align-left(style={height: '100px'})
</template>

<style lang="stylus" scoped>
.editor
  width 100%
  height 100%
</style>
