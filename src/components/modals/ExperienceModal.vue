<template>
  <!-- Experience Modal -->
  <div class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h3 id="modalExpTitle" class="text-2xl font-bold">Senior Motion Designer</h3>
            <p id="modalExpCompany" class="text-primary">Creative Studio Inc.</p>
            <p id="modalExpDuration" class="text-gray-500 text-sm">2020 - Present</p>
          </div>
          <button @click="emit('close-modal')" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <h4 class="text-lg font-semibold mb-4">Role Description</h4>
            <p id="modalExpDescription" class="text-gray-700 mb-6">
              Led a team of 5 motion designers to create captivating animations for global brands
              and campaigns. Developed visual concepts, storyboards, and style frames. Collaborated
              with creative directors, art directors, and clients to deliver high-quality motion
              graphics that met brand guidelines and project objectives.
            </p>

            <h4 class="text-lg font-semibold mb-4">Key Responsibilities</h4>
            <ul id="modalExpResponsibilities" class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Directed motion graphics projects from concept to completion</li>
              <li>
                Created complex animations and visual effects using After Effects and Cinema 4D
              </li>
              <li>Mentored junior designers and provided creative direction</li>
              <li>Collaborated with cross-functional teams to ensure project alignment</li>
              <li>Presented concepts and deliverables to clients</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Projects</h4>
            <div class="space-y-4">
              <div class="border-l-4 border-primary pl-4 py-2">
                <h5 class="font-medium">Brand Animation</h5>
                <p class="text-sm text-gray-600">Tech Company X</p>
              </div>
              <div class="border-l-4 border-primary pl-4 py-2">
                <h5 class="font-medium">Product Launch Video</h5>
                <p class="text-sm text-gray-600">Startup Y</p>
              </div>
              <div class="border-l-4 border-primary pl-4 py-2">
                <h5 class="font-medium">Social Media Campaign</h5>
                <p class="text-sm text-gray-600">Brand Z</p>
              </div>
            </div>

            <h4 class="text-lg font-semibold mt-8 mb-4">Technologies Used</h4>
            <div class="flex flex-wrap gap-2" id="modalExpSkills">
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >After Effects</span
              >
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >Cinema 4D</span
              >
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >Illustrator</span
              >
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >Photoshop</span
              >
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >Team Lead</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close-modal'])
</script>
