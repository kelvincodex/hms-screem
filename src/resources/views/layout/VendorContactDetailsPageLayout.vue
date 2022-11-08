<template>
  <div class="h-full">
    <VendorContactDetailsNavBar />
    <div class="flex gap-2 h-full w-full">
      <div class="w-[350px]">
        <VendorContactDetailsSideBar />
      </div>

      <div class="w-full h-screen pt-[100px] border">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script setup>

import VendorContactDetailsNavBar from "../../components/bar/VendorContactDetailsNavBar.vue";
import VendorContactDetailsSideBar from "../../components/bar/VendorContactDetailsSideBar.vue";
</script>

<style>
body{
  background: #F5F7FB 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>