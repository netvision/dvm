<template>
  <section class="py-12 bg-white rounded-2xl shadow-lg border border-gray-200 mb-8 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-yellow-200/20 to-orange-200/20 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
          Our Vision
        </div>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <!-- Main Vision Content -->
      <div class="max-w-full mx-auto">
        <!-- Integrated Core Section -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 mb-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            From Higher Standard of Living to 
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Higher Standard of Life
            </span>
          </h2>
          
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            We believe true education empowers students to <strong class="text-blue-600">rise above their circumstances</strong> 
            with clarity, resilience, and purpose—transforming them into <strong class="text-purple-600">active creators of meaning</strong>.
          </p>

          <!-- Three Core Values in One Row -->
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                <GraduationCap :size="24" class="text-white" />
              </div>
              <h4 class="font-bold text-gray-800 text-sm">Academic Excellence</h4>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                <Music :size="24" class="text-white" />
              </div>
              <h4 class="font-bold text-gray-800 text-sm">Artistic Expression</h4>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-3">
                <Zap :size="24" class="text-white" />
              </div>
              <h4 class="font-bold text-gray-800 text-sm">Athletic Achievement</h4>
            </div>
          </div>

          <router-link 
            to="/vision"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 no-underline"
          >
            <span>Explore Our Complete Vision</span>
            <ArrowRight :size="20" class="ml-3" />
          </router-link>
        </div>

        <!-- Mission Section -->
        <div class="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 md:p-8 text-white shadow-xl mb-8 text-center">
          <div class="flex items-center justify-center mb-6">
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <BookOpenIcon :size="28" class="text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold">Our Sacred Mission</h2>
          </div>
          
          <blockquote class="text-xl md:text-2xl font-medium italic text-orange-100 mb-6">
            "सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः"
          </blockquote>
          
          <p class="text-lg mb-8 leading-relaxed">
            Inspired by the divine qualities of Bhagavad Gita, we cultivate 
            <strong class="text-yellow-200">fearlessness, truthfulness, compassion, and wisdom</strong> 
            in every student—transforming education into character formation.
          </p>

          <router-link 
            to="/mission"
            class="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 no-underline"
          >
            <span>Discover Our Sacred Mission</span>
            <ArrowRight :size="20" class="ml-3" />
          </router-link>
        </div>

        <!-- Foundation Articles -->
        <div class="mb-8">
          <div class="text-center mb-6">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Foundation 
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Discover the core principles that guide our educational approach
            </p>
          </div>

          <!-- Articles Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Article 1: Standard of Life -->
            <router-link 
              to="/standard-of-life"
              class="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200 hover:border-blue-300 no-underline"
            >
              <div class="flex flex-col h-full">
                <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp :size="24" class="text-white" />
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Standard of Life
                </h4>
                
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  Beyond material wealth lies a deeper pursuit—cultivating values, resilience, and purpose.
                </p>
                
                <div class="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                  <span>Read More</span>
                  <ArrowRight :size="14" class="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </router-link>

            <!-- Article 2: Conceptual Learning -->
            <router-link 
              to="/conceptual-learning"
              class="group bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200 hover:border-purple-300 no-underline"
            >
              <div class="flex flex-col h-full">
                <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb :size="24" class="text-white" />
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Conceptual Learning
                </h4>
                
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  Transforming passive absorption into active understanding—where students become creators of meaning.
                </p>
                
                <div class="flex items-center text-purple-600 text-sm font-semibold group-hover:text-purple-700">
                  <span>Read More</span>
                  <ArrowRight :size="14" class="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </router-link>

            <!-- Article 3: Fine Arts -->
            <router-link 
              to="/fine-arts"
              class="group bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200 hover:border-orange-300 no-underline"
            >
              <div class="flex flex-col h-full">
                <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PaletteIcon :size="24" class="text-white" />
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Fine Arts Integration
                </h4>
                
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  From STEM to STEAM—nurturing creativity, emotional intelligence, and cultural awareness.
                </p>
                
                <div class="flex items-center text-orange-600 text-sm font-semibold group-hover:text-orange-700">
                  <span>Read More</span>
                  <ArrowRight :size="14" class="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </router-link>

            <!-- Article 4: Sports Excellence -->
            <router-link 
              to="/sports-excellence"
              class="group bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200 hover:border-green-300 no-underline"
            >
              <div class="flex flex-col h-full">
                <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrophyIcon :size="24" class="text-white" />
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Sports Excellence
                </h4>
                
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  Beyond academics—where champions are forged through discipline, teamwork, and athletic greatness.
                </p>
                
                <div class="flex items-center text-green-600 text-sm font-semibold group-hover:text-green-700">
                  <span>Read More</span>
                  <ArrowRight :size="14" class="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  GraduationCap, 
  Music, 
  Zap,
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Palette as PaletteIcon,
  Trophy as TrophyIcon,
  BookOpen as BookOpenIcon
} from 'lucide-vue-next'
</script>

<style scoped>
.prose p strong {
  font-weight: 600;
}

/* Remove underline from router-links */
.no-underline {
  text-decoration: none !important;
}

.no-underline:hover {
  text-decoration: none !important;
}

/* Custom font for Sanskrit */
.font-devanagari {
  font-family: 'Noto Sans Devanagari', 'Devanagari MT', 'Kohinoor Devanagari', sans-serif;
  font-weight: 500;
}
</style>
