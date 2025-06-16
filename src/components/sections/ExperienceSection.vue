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
            class="absolute hidden md:block left-4 md:left-1/2 h-full w-0.5 bg-primary-20 -translate-x-1/2"
          ></div>

          <!-- Experience Card -->
          <div
            v-for="experience in filteredExperiences"
            :key="experience"
            class="mb-8 experience-item p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer"
            @click="openExperienceModal(experience)"
          >
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div class="flex md:justify-end items-center">
                  <div
                    class="w-4 h-4 hidden md:block rounded-full bg-primary absolute left-4 md:left-1/2 -translate-x-1/2"
                  ></div>
                  <h3 class="text-lg font-semibold">{{ experience.title }}</h3>
                </div>
                <p class="text-gray-600">{{ experience.company }}</p>
                <p class="text-sm text-gray-500">{{ experience.timeframe }}</p>
              </div>
              <div class="md:w-1/2 md:pl-8">
                <p class="text-gray-700">
                  {{ experience.truncatedDescription }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="skill in experience.skills"
                    :key="skill"
                    class="bg-primary-20 text-primary px-2 py-1 rounded-full text-xs"
                    >{{ skill }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Modal -->
    <ExperienceModal
      v-if="experienceModalOpen"
      :experience="activeExperience"
      @close-modal="closeExperienceModal"
    />
  </section>
</template>

<script setup>
import ExperienceModal from '../modals/ExperienceModal.vue'

import { ref, computed } from 'vue'

const experiences = [
  {
    title: 'Digital Marketing Specialist',
    company: 'Care Global Surrey',
    timeframe: 'Sep 2023 - Present',
    description:
      'Result-driven digital marketer with hands-on experience in managing social media, content creation, and paid advertising. Focused on building brand presence, driving engagement, and delivering measurable results across digital platforms.',
    skills: ['Social Media Management', 'Meta Suite', 'Content Creation'],
    projects: [],
    responsibilities: [
      'Collaborated with cross-functional teams to develop compelling contents for the company website resulting in increased brand visibility and audience engagementProduced detailed storyboards and visual concepts that streamlined client approvals and accelerated video production timelines.',
      'Created engaging explainer and awareness videos that boosted viewership by up to 35% and increased social media engagement by 40%.',
      'Designed and animated motion graphics to simplify complex ideas, improving user understanding and brand communication across multiple platforms.',
      'Collaborated closely with marketing, product, and content teams to ensure videos were accurate, on-brand, and optimized for YouTube, Instagram, Facebook, and LinkedIn.',
      'Enhanced video storytelling through sound design, pacing, and transitions, resulting in higher audience trust, click-through rates, and campaign reach.',
    ],
    visible: true,
  },
  {
    title: 'Creative Designer (Freelance)',
    company: 'BAAN(Best Airlines Award Nepal)',
    timeframe: 'Feb 2020 - Sep 2023',
    description:
      'Led creative advertising efforts by conceptualizing and designing impactful visual content using tools like Figma, After Effects, and Photoshop. Successfully managed social media accounts, particularly Facebook, ensuring effective and timely ad campaigns that aligned with brand goals.',
    skills: ['Content Creation', 'After Effects', 'Video Editing', 'Graphics Design'],
    visible: true,
    responsibilities: [
      'Analyzed and interpreted design briefs to develop creative visuals, including logos, banners, posters, and marketing materials that established a strong brand identity.',
      'Planned and managed project timelines and budgets to ensure on-time delivery without compromising design quality.',
      'Collaborated with copywriters and creative directors to refine concepts and produce polished, cohesive final designs.',
      'Used industry-standard software to create and revise illustrations and layouts, maintaining consistent brand aesthetics.',
      'Incorporated client feedback effectively into revisions, resulting in enhanced visual impact and high client satisfaction.',
    ],
  },
  {
    title: 'Advertisement Advisor/ Graphic Designer (Freelance)',
    company: 'Rohani Housing',
    timeframe: 'Jan 2016 - Sep 2020',
    description:
      "Initiated the company's marketing efforts by creating original advertisement concepts and designing its first brand logo. Developed a range of promotional materials including banners, posters, and social media content, laying the foundation for a consistent and engaging marketing presence.",
    skills: ['Logo Design', 'Banners Creation', 'Posters Design', 'Advertisements'],
    visible: true,
    responsibilities: [
      'Initiated original advertisement concepts and designed the company’s first logo to establish brand identity.',
      'Created banners, posters, and marketing materials aligned with campaign goals to boost brand visibility.',
      'Developed and executed social media marketing strategies that increased audience engagement and lead generation.',
      'Collaborated closely with marketing and sales teams to ensure design consistency and messaging impact.',
      'Delivered visually appealing, on-brand final designs that contributed to increased leads and overall business growth.',
    ],
  },
  {
    title: 'Motion Graphics Designer',
    company: 'Codavatar Tech Pvt Ltd',
    timeframe: 'Sep 2020 - Jun 2023',
    description:
      'Produced high-quality videos, including motion graphics and content tailored for social media. Collaborated closely with the social media and UI/graphics teams to align visual storytelling with brand identity. Contributed to multiple SaaS products like KrispCall, Fenced.ai, MobileSpy, and timeTracko, enhancing their marketing impact through compelling motion design.',
    skills: ['Animation', 'Video Editing', 'Graphics Design', 'Social Media Posts'],
    visible: true,
    responsibilities: [
      'Created at least 5-10 videos per month which include motion graphics and social media posts.',
      'Collaborated daily with the social media marketing team in making visually stunning motion graphics.',
      'Worked in SaaS Products like KrispCall, Fenced.ai, MobileSpy, timeTracko.',
      'Collaboration with the graphics and UI team for a better understanding of brands for creating a more impactful feel for the motion graphics.',
    ],
  },
  {
    title: 'Creative Graphics Designer',
    company: 'Elscript Technologies',
    timeframe: 'Oct 2021 - Sept 2022',
    description:
      'Transformed design briefs into impactful visuals by conceptualizing and executing creative ideas within set timelines and budgets. Produced illustrations, logos, and graphic assets using industry-standard software, collaborating with copywriters and creative directors to deliver on-brand, engaging final designs. Ensured quality through iterative feedback, consistently aligning visuals with project goals and brand identity.',
    skills: ['Brochoure Design', 'Posters', 'Banners', 'Logos', 'Social Media Posts'],
    visible: true,
    responsibilities: [
      'Study design briefs and determine requirements',
      'Schedule projects and define budget constraints',
      'Conceptualize visuals based on requirements, prepare rough drafts and present ideas',
      'Develop illustrations, logos and other designs using software.',
      'Work with copywriters and creative director to produce final design',
      'Amend designs after feedback and ensure final graphics and layouts are visually appealing and on-brand.',
    ],
  },
]

const wordLimit = 15
const activeExperience = ref(null)
const experienceModalOpen = ref(false)

const filteredExperiences = computed(() => {
  return experiences
    .filter((experience) => experience.visible)
    ?.map((experience) => {
      const words = experience.description.split(' ')
      const truncatedDescription =
        words.length > wordLimit
          ? words.slice(0, wordLimit).join(' ') + '...'
          : experience.description

      return {
        ...experience,
        truncatedDescription,
      }
    })
})

const openExperienceModal = (experience) => {
  experienceModalOpen.value = true
  activeExperience.value = experience
}

const closeExperienceModal = () => {
  experienceModalOpen.value = false
  activeExperience.value = null
}
</script>
