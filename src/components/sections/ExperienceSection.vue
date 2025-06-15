<template>
  <section id="experience" class="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Professional
          <span class="text-primary">Experience</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          My professional journey through the world of motion graphics, animation and social media.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <!-- Experience Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute sm:hidden md:block left-4 md:left-1/2 h-full w-0.5 bg-primary-20 -translate-x-1/2"
          ></div>

          <!-- Experience Card -->
          <div
            v-for="experience in experiences"
            :key="experience"
            class="mb-8 experience-item p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer"
            onclick="openExperienceModal(1)"
          >
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div class="flex md:justify-end items-center">
                  <div
                    class="w-4 h-4 sm:hidden md:block rounded-full bg-primary absolute left-4 md:left-1/2 -translate-x-1/2"
                  ></div>
                  <h3 class="text-lg font-semibold">{{ experience.title }}</h3>
                </div>
                <p class="text-gray-600">{{ experience.company }}</p>
                <p class="text-sm text-gray-500">{{ experience.timeframe }}</p>
              </div>
              <div class="md:w-1/2 md:pl-8">
                <p class="text-gray-700">
                  {{ experience.description }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="skill in experience.skills"
                    :key="skill"
                    class="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                    >{{ skill }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: 'Digital Marketing Specialist',
    company: 'Care Global Surrey',
    timeframe: 'Sep 2023 - Present',
    description:
      'Result-driven digital marketer with hands-on experience in managing social media, content creation, and paid advertising. Focused on building brand presence, driving engagement, and delivering measurable results across digital platforms.',
    skills: ['Social Media Management', 'Meta Suite', 'Content Creation'],
  },
  {
    title: 'Creative Designer (Freelance)',
    company: 'BAAN(Best Airlines Award Nepal)',
    timeframe: 'Feb 2020 - Sep 2023',
    description:
      'Led creative advertising efforts by conceptualizing and designing impactful visual content using tools like Figma, After Effects, and Photoshop. Successfully managed social media accounts, particularly Facebook, ensuring effective and timely ad campaigns that aligned with brand goals.',
    skills: ['Content Creation', 'After Effects', 'Video Editing', 'Graphics Design'],
  },
  {
    title: 'Advertisement Advisor/ Graphic Designer (Freelance)',
    company: 'Rohani Housing',
    timeframe: 'Jan 2016 - Sep 2020',
    description:
      "Initiated the company's marketing efforts by creating original advertisement concepts and designing its first brand logo. Developed a range of promotional materials including banners, posters, and social media content, laying the foundation for a consistent and engaging marketing presence.",
    skills: ['Logo Design', 'Banners Creation', 'Posters Design', 'Advertisements'],
  },
  {
    title: 'Motion Graphics Designer',
    company: 'Codavatar Tech Pvt Ltd',
    timeframe: 'Sep 2020 - Jun 2023',
    description:
      'Produced high-quality videos, including motion graphics and content tailored for social media. Collaborated closely with the social media and UI/graphics teams to align visual storytelling with brand identity. Contributed to multiple SaaS products like KrispCall, Fenced.ai, MobileSpy, and timeTracko, enhancing their marketing impact through compelling motion design.',
    skills: ['Animation', 'Video Editing', 'Graphics Design', 'Social Media Posts'],
  },
  {
    title: 'Creative Graphics Designer',
    company: 'Elscript Technologies',
    timeframe: 'Oct 2021 - Sept 2022',
    description:
      'Transformed design briefs into impactful visuals by conceptualizing and executing creative ideas within set timelines and budgets. Produced illustrations, logos, and graphic assets using industry-standard software, collaborating with copywriters and creative directors to deliver on-brand, engaging final designs. Ensured quality through iterative feedback, consistently aligning visuals with project goals and brand identity.',
    skills: ['Brochoure Design', 'Posters', 'Banners', 'Logos', 'Social Media Posts'],
  },
]
</script>
