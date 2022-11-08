<template>
  <div class="mt-10">
    <div class="flex justify-center items-center">
      <button class="text-center card-container" @click="handleClick('Room')">
        <Icon size="50" color="#397FF6">
          <Tv />
        </Icon>
        <p class="icon-title">
          Room
        </p>
        <p class="icon-sub-title">
          Add a Room and room facilities
        </p>
      </button>
      <button class="text-center card-container" @click="handleClick('Apartment')">
        <Icon size="50" color="#397FF6">
          <Tv />
        </Icon>
        <p class="icon-title">
          Apartment
        </p>
        <p class="icon-sub-title">
          Add an apartment and apartment facilities
        </p>
      </button>
    </div>
    <RoomPopUpEnterRoom :show-modal="showRoomModal" @handleClick="handleNext" />
    <ApartmentPopUp :show-modal="showApartmentModal" />
  </div>
</template>

<script setup>
import {Icon} from "@vicons/utils";
import {Tv} from "@vicons/fa"
import {ref} from "vue";
import RoomPopUpEnterRoom from "../modal/RoomPopUpEnterRoom.vue";
import ApartmentPopUp from "../modal/ApartmentPopUp.vue";
const showModal = ref(false)
const showRoomModal = ref(false)
const showApartmentModal = ref(false)
const handleClick = (value) => {
  if (value === "Room"){
    showRoomModal.value = !showRoomModal.value
  }

  if (value === "Apartment"){
    showApartmentModal.value = !showApartmentModal.value
  }

}
const handleNext = (value) => {
  alert('hello')
}
</script>

<style scoped>
  .card-container{
    border: 0.5px solid #397FF6;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    width: 300px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  .icon-sub-title{
    color: #4A4A4A;
    font: normal normal normal 14px Poppins;
    opacity: 1;
  }
  .icon-title{
    font: normal normal  15px/23px Poppins;
    color: #4A4A4A;
    opacity: 1;
  }
</style>