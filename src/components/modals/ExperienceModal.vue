<template>
  <!-- Experience Modal -->
  <div
    v-if="experienceDetails"
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
  >
    <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h3 class="text-2xl font-bold">{{ experienceDetails.title }}</h3>
            <p class="text-primary">{{ experienceDetails.company }}</p>
            <p class="text-gray-500 text-sm">{{ experienceDetails.timeframe }}</p>
          </div>
          <button
            @click="emit('close-modal')"
            class="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <h4 class="text-lg font-semibold mb-4">Role Description</h4>
            <p id="modalExpDescription" class="text-gray-700 mb-6">
              {{ experienceDetails.description }}
            </p>

            <h4 class="text-lg font-semibold mb-4">Key Responsibilities</h4>
            <ul id="modalExpResponsibilities" class="list-disc pl-5 space-y-2 text-gray-700">
              <li
                v-for="responsibility in experienceDetails.responsibilities"
                :key="responsibility"
              >
                {{ responsibility }}
              </li>
            </ul>
          </div>
          <!-- Projects -->
          <div>
            <div v-if="experienceDetails.projects && experienceDetails.projects.length">
              <h4 class="text-lg font-semibold mb-4">Projects</h4>
              <div class="space-y-4">
                <div class="border-l-4 border-primary pl-4 py-2">
                  <h5 class="font-medium">Brand Animation</h5>
                  <p class="text-sm text-gray-600">Tech Company X</p>
                </div>
              </div>
            </div>
            <!-- Technologies Used -->
            <div>
              <h4 class="text-lg font-semibold mt-8 mb-4">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in experienceDetails.skills"
                  :key="skill"
                  class="bg-primary-10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['close-modal'])
const props = defineProps({
  experience: {
    type: Object,
  },
})

const experienceDetails = computed(() => {
  return props.experience
})
</script>
