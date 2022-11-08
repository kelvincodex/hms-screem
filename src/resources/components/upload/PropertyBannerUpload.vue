<template>
  <div class="upload-container">

    <!--    <div class="">-->
    <!--      <h2 class="title">Property Banner</h2>-->
    <!--    </div>-->
    <n-upload class="h-full w-full h-[450px] relative" multiple directory-dnd :custom-request="customRequest"
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
      <n-upload-dragger class="h-[350px] w-[85%] m-auto  absolute left-0 right-0 top-0 bottom-0 ">
        <div class="w-full h-full flex flex-col place-content-center justify-center">
          <div>
            <n-icon size="48" :depth="3">
              <archive-icon />
            </n-icon>
          </div>
          <n-text style="font-size: 16px">
            Upload Property Banner Image
          </n-text>
        </div>
      </n-upload-dragger>
    </n-upload>
  </div>

</template>

<script setup>
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";

const customRequest = ({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress
}) => {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key]
      )
    })
  }
  formData.append(file.name, file.file)
  lyla
    .post(action, {
      withCredentials,
      headers: headers,
      body: formData,
      onUploadProgress: ({ percent }) => {
        onProgress({ percent: Math.ceil(percent) })
      }
    })
    .then(({ json }) => {
      message.success(JSON.stringify(json))
      onFinish()
    })
    .catch((error) => {
      message.success(error.message)
      onError()
    })
}
</script>

<style scoped>
.upload-container {
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
}

.title {
  font: normal normal medium Roboto;
}
</style>