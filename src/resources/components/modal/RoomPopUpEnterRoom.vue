<template>
  <n-modal v-model:show="showModal">
    <n-card
        style="width: 600px"
        title="Enter Room Category Name and No of rooms available"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        class="p-[20px]"
    >
      <div class="w-full">
        <div class="w-full">
          <input placeholder="Enter Room Category Name" class="form-input w-full rounded-md">
        </div>
        <div class="w-full mt-[10px]">
          <label>No. of rooms in this category</label>
          <input placeholder="Enter No. of rooms in this category" class="form-input w-full rounded-md">
        </div>

        <div class="flex gap-2">
          <div class="w-full  mt-[10px]">
            <label>Minimum No. of Guest Per Room</label>
            <input placeholder="Enter No. of Guest Per Room" class="form-input w-full rounded-md">
          </div>
          <div class="w-full  mt-[10px]">
            <label>Maximum No. of Guest Per Room</label>
            <input placeholder="Enter No. of Guest Per Room" class="form-input w-full rounded-md">
          </div>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-center">
          <button class="h-[50px] w-[200px] button" @click="$emit('handleClick')">
            Next
          </button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import {ref} from "vue";
defineEmits(['handleClick'])
defineProps({
  showModal:{
    type:Boolean,
    default:false
  }
})
</script>
<style scoped>
  .button{
    background: #397FF6 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
  }
</style>