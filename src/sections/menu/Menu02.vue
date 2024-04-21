<script setup lang="ts">
import { ref } from 'vue'

const displayText = ref<string>('')
const result = ref<number>(0)
const symbolText = ref<string>('')

function btnClick(angka: number) {
  displayText.value += `${angka}`
  result.value += angka
}

function resetResult() {
  displayText.value = ''
  result.value = 0
}

function manipulation(symbol: string) {
  if (symbol === '+') {
    displayText.value += '+'
    symbolText.value = '+'
  } else if (symbol === '-') {
    displayText.value += '-'
    symbolText.value = '-'
  } else if (symbol === '/') {
    displayText.value += '/'
    symbolText.value = '/'
  } else if (symbol === '*') {
    displayText.value += '*'
    symbolText.value = '*'
  }
}

function getResult() {
  const theValue = displayText.value.split(symbolText.value)
  if (symbolText.value === '+') {
    let result = parseFloat(theValue[0]) + parseFloat(theValue[1])
    displayText.value = result.toString()
  } else if (symbolText.value === '-') {
    let result = parseFloat(theValue[0]) - parseFloat(theValue[1])
    displayText.value = result.toString()
  } else if (symbolText.value === '/') {
    let result = parseFloat(theValue[0]) / parseFloat(theValue[1])
    displayText.value = result.toString()
  } else if (symbolText.value === '*') {
    let result = parseFloat(theValue[0]) * parseFloat(theValue[1])
    displayText.value = result.toString()
  } else {
    displayText.value = displayText.value
  }
}
</script>

<template>
  <div class="max-w-lg mx-auto mt-14">
    <h3>Calculator</h3>
    <div class="flex mb-3">
      <div class="w-10/12">{{ displayText }}</div>
      <button class="btn btn-success w-2/12" @click="resetResult">C</button>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <button class="btn btn-accent" @click="btnClick(1)">1</button>
      <button class="btn btn-accent" @click="btnClick(2)">2</button>
      <button class="btn btn-accent" @click="btnClick(3)">3</button>
      <button class="btn btn-accent" @click="btnClick(4)">4</button>
      <button class="btn btn-accent" @click="btnClick(5)">5</button>
      <button class="btn btn-accent" @click="btnClick(6)">6</button>
      <button class="btn btn-accent" @click="btnClick(7)">7</button>
      <button class="btn btn-accent" @click="btnClick(8)">8</button>
      <button class="btn btn-accent" @click="btnClick(9)">9</button>
      <button class="btn btn-accent" @click="btnClick(0)">0</button>
      <button class="btn btn-accent" @click="getResult()">=</button>
      <button class="btn btn-accent" @click="manipulation('+')">+</button>
      <button class="btn btn-accent" @click="manipulation('-')">-</button>
      <button class="btn btn-accent" @click="manipulation('/')">/</button>
      <button class="btn btn-accent" @click="manipulation('*')">*</button>
    </div>
  </div>
</template>
