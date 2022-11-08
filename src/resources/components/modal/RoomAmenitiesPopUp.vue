<template>
  <n-modal v-model:show="showModal">
    <n-card
        style="width: 600px"
        title="Select Room Amenities"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        class="p-[20px]"
    >
      <div class="w-full">

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