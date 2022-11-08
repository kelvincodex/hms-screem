<script setup>

import {useRouter} from "vue-router";
import VendorContactDetailsPageLayout from "../resources/views/layout/VendorContactDetailsPageLayout.vue";

const router = useRouter()
const layout = router.options.routes[0].meta.layout
</script>

<template>
  <VendorContactDetailsPageLayout v-if="layout === 'vendorContactDetailsPageLayout'" />
</template>

<style scoped>

</style>
