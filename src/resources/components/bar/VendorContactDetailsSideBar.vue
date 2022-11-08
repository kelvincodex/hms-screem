<template>
  <div class="w-[350px] h-screen  fixed side-container p-[86px]">
    <n-steps size="medium" class="w-[200px]  h-full m-auto bg-inherit" vertical :current="(current)"
      :status="currentStatus">
      <n-step title="Property Banner" />
      <n-step class="bg-inherit" title="About Property" />
      <n-step class="bg-inherit" title="Additional Images" />
      <n-step class="bg-inherit" title="Locations" />
      <n-step class="bg-inherit" title="Contact Information" />
      <n-step class="bg-inherit" title="Facilities" />
      <n-step class="bg-inherit" title="Property Rules" />
    </n-steps>
  </div>
</template>
<script setup>

import { ref, computed } from "vue";
import { useVendorContactDetail } from "../../../config/store/vendorContactDetails.js";
const vendorContactDetails = useVendorContactDetail()
const current = computed(() => vendorContactDetails.steps.current)
const currentStatus = computed(() => vendorContactDetails.steps.currentStatus)

// window.addEventListener('scroll',()=>{
//   console.log(window.scrollY)
// })
</script>

<style scoped>
.side-container {
  background: #093682 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 40px #BFCADC21;
  opacity: 1;
  top: 95px;
}
</style>