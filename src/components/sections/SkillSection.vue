<template>
  <section id="skills" class="py-16 bg-white px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="text-primary">Skills</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A versatile skill set that allows me to bring creative visions to life through motion and
          design.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="skill in skills"
          :key="skill"
          class="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <div
            class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto"
          >
            <i class="fas text-primary text-2xl" :class="skill.icon"></i>
          </div>
          <h3 class="text-lg font-semibold text-center mb-2">{{ skill.title }}</h3>
          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="innerSkill in skill.innerSkills"
              :key="innerSkill"
              class="skill-pill bg-primary/10 text-primary px-3 py-1 rounded-full text-sm transition"
              >{{ innerSkill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const skills = [
  {
    title: '2D Animation',
    icon: 'fa-film',
    innerSkills: ['After Effects', 'Toon Boom'],
  },
  {
    title: '3D Animation',
    icon: 'fa-cube',
    innerSkills: ['Maya'],
  },
  {
    title: 'Design',
    icon: 'fa-paint-brush',
    innerSkills: ['Illustrator', 'Canva', 'Figma'],
  },
  {
    title: 'Social Media',
    icon: 'fa-hashtag',
    innerSkills: ['Meta Suite'],
  },
]
</script>
