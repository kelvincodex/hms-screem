<template>
  <div class="w-full h-screen ">
    <div class="w-full  mt-[20px]">
      <h2 class="title">How does customers contact you?</h2>
      <div class="mb-10">
        <div v-if="showAddUp && !showAddUpForm" class="add-up  flex justify-around items-center">

          <div  class="flex justify-around items-center gap-3">
            <div class="flex justify-around">
              <p class="key">Full Name:</p>
              <p class="value">Onome Mobolaji</p>
            </div>
            <div class="flex justify-around">
              <p class="key">Designation:</p>
              <p class="value">Marketing Lead</p>
            </div>
          </div>
          <div  class="space-x-2.5 ">
            <BaseIcon size="18" color="#D80202">
              <TrashAltRegular />
            </BaseIcon>
            <button @click="handleAddUpForm">
              <BaseIcon size="18">
                <EditRegular />
              </BaseIcon>
            </button>
          </div>
        </div>
        <ContactInformationForm v-if="showAddUpForm" >
          <template #header>
            <BaseIcon size="18" color="#D80202">
              <TrashAltRegular />
            </BaseIcon>
            <button class="ml-2">
              <BaseIcon size="21">
                <CancelOutlined />
              </BaseIcon>
            </button>

          </template>
        </ContactInformationForm>
      </div>


      <ContactInformationForm v-if="showForm" />

      <div class="flex gap-3 items-center mt-[40px]">
        <button @click="handleAddUp" class="w-[40px] h-[40px] rounded-full flex justify-center items-center icon-container">
            <BaseIcon>
              <Plus />
            </BaseIcon>
        </button>
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
import {Plus} from "@vicons/fa"
import {EditRegular} from "@vicons/fa"
import {TrashAltRegular} from "@vicons/fa"
import BaseIcon from "../../icon/BaseIcon.vue";
import {ref} from "vue";
import ContactInformationForm from "../../form/ContactInformationForm.vue";
import {CancelOutlined} from "@vicons/material"

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps
const handleClick = () => {
  steps.contactInformation.active = false
  steps.facilities.active = true
  steps.current = steps.facilities.current
}
const showAddUp = ref(false)
const showAddUpForm = ref(false)
const showForm = ref(true)
const handleAddUp =()=>{
  showAddUp.value = true
}
const handleAddUpForm =()=>{
  showAddUpForm.value = true
}
</script>

<style scoped>
.title {
  font: normal normal bold 30px/50px Roboto;
  color: #4A4A4A;
  opacity: 1;
  letter-spacing: 0px;
  margin-bottom: 20px;
}


.icon-container{
  background: #FAD560 0% 0% no-repeat padding-box;
}
.icon-title{
  font: normal normal 300 18px/30px Roboto;
  color: #505050;
  opacity: 1;
}
.add-up{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 40px #BFCADC21;
  border-radius: 5px;
  opacity: 1;
  width: 100%;
  height: 55px;
}
.key{
  font: normal normal normal 15px/30px Roboto;
  color: #4A4A4A;
  opacity: 0.5;
  margin-right: 5px;
}
.value{
  font: normal normal bold 15px/30px Roboto;
  color: #4A4A4A;
  opacity: 1;
}
</style>