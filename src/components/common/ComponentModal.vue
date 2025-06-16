<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeModal"></div>
    <!-- Modal content wrapper -->
    <div class="relative z-10 w-full max-w-4xl">
      <button
        @click="closeModal"
        class="cursor-pointer absolute top-4 right-4 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:text-red-600 transition-colors z-20"
      >
        <i class="fas fa-times text-xl"></i>
      </button>

      <!-- Modal Content -->
      <div
        class="p-0 bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-modal-in"
      >
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close-modal'])

const closeModal = () => {
  emit('close-modal')
}
</script>
