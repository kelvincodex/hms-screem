<template>
  <div class="w-full h-screen border">
    <div class="w-full  pt-[20px]">
      <div class="text-center w-[500px] m-auto ">
        <h2 class="title ">Add the property Facilities</h2>
        <p class="text-[#505050] font-normal text-[15px]">
          There should be at least one picture in this category. Each picture must not exceed 5 Mb Supported formats are
          *.jpg, *.gif and *.png
        </p>
      </div>

     <div>
        <FacilitiesCard />
     </div>
      <div class="text-center">
        <button type="button" class="w-[300px] h-[60px] bg-[#397FF6] mt-[70px]" @click="handleClick">
          Next
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";
import {Icon} from "@vicons/utils";
import {Plus} from "@vicons/fa"
import FacilitiesCard from "../../card/FacilitiesCard.vue";

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps
const handleClick = () => {
  steps.facilities.active = false
  steps.propertyRules.active = true
  steps.current =  steps.propertyRules.current
}
</script>

<style scoped>
.title {
  font: normal normal  30px/52px Roboto;
  color: #4A4A4A;
  opacity: 1;
  letter-spacing: 0px;
}
</style>