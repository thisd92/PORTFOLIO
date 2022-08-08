<template>
  <div class="calculator">
    <Display value="0" />
    <Button label="AC" triple @onCalcClick="clearMemory" />
    <Button label="/" operation @onCalcClick="setOperation" />
    <Button label="7" @onCalcClick="addDigit" />
    <Button label="8" @onCalcClick="addDigit" />
    <Button label="9" @onCalcClick="addDigit" />
    <Button label="*" operation @onCalcClick="setOperation" />
    <Button label="4" @onCalcClick="addDigit" />
    <Button label="5" @onCalcClick="addDigit" />
    <Button label="6" @onCalcClick="addDigit" />
    <Button label="-" operation @onCalcClick="setOperation" />
    <Button label="1" @onCalcClick="addDigit" />
    <Button label="2" @onCalcClick="addDigit" />
    <Button label="3" @onCalcClick="addDigit" />
    <Button label="+" operation @onCalcClick="setOperation" />
    <Button label="0" double @onCalcClick="addDigit" />
    <Button label="." @onCalcClick="addDigit" />
    <Button label="=" operation @onCalcClick="setOperation" />
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";
export default {
  components: { Button, Display },
  methods: {
    clearMemory() {
      // eslint-disable-next-line no-console
      console.log("Limpar Memória");
    },
    setOperation(operation) {
      // eslint-disable-next-line no-console
      console.log("Operação " + operation);
    },
    addDigit(n) {
      // eslint-disable-next-line no-console
      console.log("Digito " + n);
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>