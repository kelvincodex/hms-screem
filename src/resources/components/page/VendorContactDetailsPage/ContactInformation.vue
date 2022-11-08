<template>
  <div class="w-full h-screen ">
    <div class="w-full  mt-[20px]">
      <h2 class="title">How does customers contact you?</h2>
      <div class="w-full h-[300px] form-container p-[30px]">
        <div class="flex justify-between items-center ">
          <div class="flex flex-col">
            <label class="label">Full Name</label>
            <input placeholder="Enter Full Name" class="form-input input">
          </div>

          <div class="flex flex-col">
            <label class="label">Designation</label>
            <input placeholder="Enter Contact Role" class="form-input input">
          </div>
        </div>
        <div class="flex justify-between items-center ">
          <div class="flex flex-col">
            <label class="label">Email Address</label>
            <input placeholder="Enter Email Address" class="form-input input">
          </div>

          <div class="flex flex-col">
            <label class="label">Mobile</label>
            <input placeholder="000000000" class="form-input input">
          </div>
        </div>
      </div>

      <div class="flex gap-3 items-center mt-[40px]">
        <div class="w-[40px] h-[40px] rounded-full flex justify-center items-center icon-container">
            <Icon>
              <Plus />
            </Icon>
        </div>
        <span class="icon-title">
          Here you can add multiple help lines for reservations, support, booking, etc
        </span>
      </div>

      <button type="button" class="w-[300px] h-[60px] bg-[#397FF6] mt-[70px]" @click="handleClick">Save & Continue
      </button>
    </div>
  </div>
</template>

<script setup>
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";
import {Icon} from "@vicons/utils";
import {Plus} from "@vicons/fa"

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps
const handleClick = () => {
  steps.contactInformation.active = false
  steps.facilities.active = true
  steps.current = steps.facilities.current
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

.form-container {
  background: #FFFFFF 0% 0% no-repeat padding-box;
}
.input{
  width: 400px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #BBBBBB;
  opacity: 1;
}
.label{
  color: #696969;
  font: normal normal normal 15px/50px Roboto;
  letter-spacing: 0px;
  opacity: 0.5;
}
.icon-container{
  background: #FAD560 0% 0% no-repeat padding-box;
}
.icon-title{
  font: normal normal 300 18px/30px Roboto;
  color: #505050;
  opacity: 1;
}
</style>