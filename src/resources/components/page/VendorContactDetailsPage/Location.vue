<template>
  <div class="w-full h-screen ">
    <div class="w-full  mt-[100px]">
      <h2 class="title">Please Describe your Property</h2>
      <div class="w-full">
        <div class="w-full">
          <select class="form-select select mr-1">
            <option>Select Country</option>
          </select>

          <select class="form-select select">
            <option>State</option>
          </select>
        </div>
        <div class="w-full">
          <input placeholder="Email Address" class="form-input input">
        </div>

      </div>

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
  steps.location.active = false
  steps.contactInformation.active = true
  steps.current = steps.contactInformation.current
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
.select{
  border: 1px solid #BBBBBB;
  border-radius: 10px;
  opacity: 1;
  width: 400px;
  height: 50px;
}
.input{
  border: 1px solid #397FF6;
  border-radius: 8px;
  opacity: 1;
  width: 805px;
  height: 50px;
  margin-top: 20px;
}
</style>