<template>
  <div class="w-full h-screen ">
    <div class="w-full  mt-[100px]">
      <h2 class="title">What is the name of your Property</h2>
      <input type="text" placeholder="Name" class="form-input w-full h-[64px] rounded-md" >
      <p class="mt-[10px] span">Maximum 100 characters. No HTML or emoji allowed.</p>

      <button type="button" class="w-[300px] h-[60px] bg-[#397FF6] mt-[100px]" @click="handleClick">Save & Continue</button>
    </div>
  </div>
</template>

<script setup>
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";
import {ref} from "vue";

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps
const handleClick = ()=>{
  steps.aboutProperty.active  = false
  steps.additionalImages.active  = true
  steps.current = ref(steps.additionalImages.current)
}
</script>

<style scoped>
  .title{
    font: normal normal bold 30px/92px Roboto;
    color: #4A4A4A;
    opacity: 1;
    letter-spacing: 0px;
    margin-bottom: 30px;
  }
  .span{
    color: #505050;
    font: normal normal 300 14px/30px Roboto;
    letter-spacing: 0px;
  }
</style>