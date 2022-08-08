<template>
  <button class="button"
    @click="$emit('onCalcClick', label)"
    :class="{ double, triple, operation }">
      {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
:root{
    --bg-buton: #f0f0f0;
    --border-button: solid 1 px #888;
}

.buton{
  font-size: 1.4em;
  background-color: var(--bg-buton);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}

.button:active{
  background-color: #ccc;
}

.button.double{
  grid-column: span 2;
}

.button.triple{
  grid-column: span 3;
}

.button.operation{
  background-color: #fa8231;
  color: #fff; 
}

.button.operation:active{
  background-color: #fa8231cc;
}

</style>