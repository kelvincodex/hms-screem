<template>
  <Icon
  :color="color"
  :size="size"
  >
    <slot />
  </Icon>
</template>
<script setup>

import {Icon} from "@vicons/utils";

defineProps({
  size:[Number, String],
  color:[String]
})
</script>