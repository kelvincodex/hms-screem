<template>
  <div class="w-full h-screen ">
    <div class="w-full  mt-[80px]">
      <h2 class="title text-center">Add Rooms/Apartment</h2>

      <PropertyRulesCard />
    </div>
  </div>
</template>

<script setup>
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";
import {Icon} from "@vicons/utils";
import {Plus} from "@vicons/fa"
import PropertyRulesCard from "../../card/PropertyRulesCard.vue";
import RoomPopUpEnterRoom from "../../modal/RoomPopUpEnterRoom.vue";
import {ref} from "vue";

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps

</script>

<style scoped>
.title {
  font: normal normal bold 30px/92px Roboto;
  color: #4A4A4A;
  opacity: 1;
  letter-spacing: 0px;
  margin-bottom: 20px;
}
</style>