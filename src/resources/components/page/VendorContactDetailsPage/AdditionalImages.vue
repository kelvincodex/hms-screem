<template>
  <div class="w-full h-screen ">
    <div class="w-full  mt-[100px]">
      <h2 class="title">Please Describe your Property</h2>
      <textarea type="text" placeholder="Name" class="form-textarea w-full h-[190px] rounded-md"></textarea>
      <p class="mt-[10px] span">This field is used for search, so please be descriptive! If you're linking to external
        images, please mind the page load speed: use few, compress them and host them on a fast server or CDN.</p>

      <button type="button" class="w-[300px] h-[60px] bg-[#397FF6] mt-[70px]" @click="handleClick">Save & Continue
      </button>
    </div>
  </div>
</template>

<script setup>
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps
const handleClick = () => {
  steps.additionalImages.active = false
  steps.location.active = true
  steps.current = steps.location.current
}
</script>

<style scoped>
.title {
  font: normal normal bold 30px/92px Roboto;
  color: #4A4A4A;
  opacity: 1;
  letter-spacing: 0px;
  margin-bottom: 20px;
}

.span {
  color: #505050;
  font: normal normal 300 14px/30px Roboto;
  letter-spacing: 0px;
}
</style>