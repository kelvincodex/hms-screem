<template>
  <div class="fixed w-full  h-[96px] nav-container">
    <div class="flex justify-between items-center w-full h-full">
      <div class="ml-[114px] w-[149px] h-[38.34px]">
        <img src="src/assets/image/PayculiarLogo.png" class="w-full h-full">
      </div>
      <div class="mr-[40px] flex items-center gap-5">
        <BaseIcon size="21">
          <BellRegular />
        </BaseIcon>
        <div class="flex gap-0.5 items-center">
          <div class="w-[39px] h-[39px] border rounded-full">
            <img src="src/assets/image/profile.avif" class="w-full h-full rounded-full">
          </div>

          <BaseIcon>
            <ChevronDown />
          </BaseIcon>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { BellRegular } from '@vicons/fa'
import { ChevronDown } from '@vicons/fa'
import BaseIcon from "../icon/BaseIcon.vue";
</script>

<style scoped>
.nav-container {
  background: #F5F7FB 0% 0% no-repeat padding-box;
  border: 1px solid #E9E9E9;
  opacity: 1;
  z-index: 9999999999999;
}

.button-container {
  background: #3ABB1B 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
}
</style>