<template>
  <button class="button"
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
    
}
</style>