<template>
  <div class="w-full h-[300px] form-container p-[30px]">
    <div class="w-full flex justify-end">
      <slot name="header" />
    </div>
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
</template>

<script setup>

</script>

<style scoped>
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
</style>