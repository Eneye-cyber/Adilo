<script setup>
  defineProps({
    active: Boolean
  })

  const emit = defineEmits(['close'])

  function closeDialog() {
    emit('close')
  }
</script>

<template>
  <div class="dialog__overlay flex centered">
    <div class="dialog">
      <div class="dialog__header flex item-center">
        <h3 class="text-lg text--black">New Recording</h3>
        <span @click="closeDialog" class="material-symbols-outlined ml-auto btn-icon"> close </span>
      </div>
      <form class="dialog__form">
        <section class="dialog__form__select w-full">
          <label for="project" class="text-md text--black">Save the recording in</label>
          <select class="dialog__form-select" name="project" id="">
            <option value="">Select a project</option>
          </select>
        </section>

        <section class="dialog__form__switches">
          <div class="flex item-center mt-2">
            <p>Record screen</p>
            <label class="switch ml-auto">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label>
          </div>

          <div class="flex item-center mt-2">
            <p>Record camera</p>
            <label class="switch ml-auto">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label>
          </div>

          <div class="flex item-center mt-2">
            <p>Record mic</p>
            <label class="switch ml-auto">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
          </div>
        </section>
        <div class="w-full flex centered">
          <button class="btn centered btn-primary">Start Recording </button>
          
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
