<template>
  <div class="w-full flex justify-between items-center">
    <div class="w-full h-full">
      <h2 class="title">List a property in Hotel</h2>
    </div>
    <div class="w-full flex justify-evenly items-center">
      <span class="-mr-14">Switch Category</span>
      <div class="h-[48px] w-[107px] flex gap-1 items-center ">
        <n-dropdown
            placement="bottom-start"
            class="w-full h-full"
            trigger="click" size="large" :options="options" @select="handleSelectCategory">
          <n-button class="w-full h-full ">{{ selectedCategory }}</n-button>
        </n-dropdown>
        <n-button type="button" class="switch-button">
          Switch
        </n-button>
      </div>
    </div>
  </div>

  <div class="w-full h-full">
    <PropertyBannerUpload />
  </div>

  <div class="list-container p-[32px] mt-[70px]">
    <h2 class="font-medium text-[30px]">Things to Note</h2>
    <p class="sub-title">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna Quidam alii sunt, et non est in nostra
    </p>
    <ul class="list-decimal pl-3">
      <li class="mb-3 list">You have selected a clear title picture. You can choose from your photo gallery.</li>
      <li class="mb-3 list">All information are correctly inputted for verification</li>
      <li class="mb-3 list">Your email address has been verified</li>
      <li class="mb-3 list">You have at least 2 images for this property</li>
      <li class="mb-3 list">All fields with * must be inputted correctly</li>
    </ul>
  </div>
  <div class="w-[150px] h-[44px] mt-[86px] mb-[180px]">
    <button type="button" class="w-full h-full bg-[#397FF6]" @click="handleClick">Save & Continue</button>
  </div>
</template>
<script setup>
import {ref} from "vue";
import PropertyBannerUpload from "../../upload/PropertyBannerUpload.vue";
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";

const selectedCategory = ref("Hotel")
const options = ref([
  {
    label: "Hotel",
    key: "Hotel",
    disabled: false
  },
  {
    label: "Apartment",
    key: "Apartment",
    disabled: false
  },
])

const handleSelectCategory = (key) => {
  selectedCategory.value = key
}

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps

const handleClick = ()=>{
  steps.propertyBanner.active  = false
  steps.aboutProperty.active  = true
  steps.current = steps.aboutProperty.current
}
</script>


<style scoped>
.title {
  font: normal normal bold 20px/92px Roboto;
  letter-spacing: 0px;
  color: #4A4A4A;
  opacity: 1;
  text-align: left;
}

.switch-button {
  background: #397FF6 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  font: normal normal medium Roboto;

  height: 100%;
}
.list-container{
  background: #FFFFFF 0% 0% no-repeat padding-box;
}
.sub-title{
  font: normal normal 300 16px/30px Roboto;
  color: #505050;
  opacity: 1;
  margin-bottom: 32px;
  margin-top: 16px;
}
.list{
  color: #505050;
  font: normal normal normal 14px/25px Roboto;
  letter-spacing: 0px;
}
</style>