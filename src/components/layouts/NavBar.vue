<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#" class="text-xl font-bold text-primary"
            >Nicon<span class="text-secondary">Ghimire</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            :class="
              link.label == 'Contact'
                ? 'px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition'
                : 'text-dark hover:text-primary'
            "
            class="transition"
            >{{ link.label }}</a
          >
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-dark hover:text-primary focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div :class="{ hidden: isMenuHidden }" class="md:hidden bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMenuHidden = ref(true)
const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

const toggleMenu = () => {
  isMenuHidden.value = !isMenuHidden.value
}

const closeMenu = () => {
  isMenuHidden.value = true
}

onMounted(() => {
  const anchors = document.querySelectorAll('a[href^="#"]')

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        })
      }
    })
  })
})
</script>
