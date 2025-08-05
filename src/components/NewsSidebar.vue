<template>
  <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 border-b-4 border-blue-700">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold text-white flex items-center">
          <Newspaper :size="20" class="mr-2" />
          Latest News
        </h3>
        <router-link 
          to="/news"
          class="text-blue-100 hover:text-white transition-colors text-sm font-medium no-underline flex items-center"
        >
          <span>View All</span>
          <ChevronRight :size="16" class="ml-1" />
        </router-link>
      </div>
    </div>

    <!-- News Items -->
    <div class="divide-y divide-gray-100 max-h-96 overflow-y-auto">
      <article 
        v-for="(article, index) in latestNews" 
        :key="index"
        class="p-4 hover:bg-blue-50 transition-colors duration-200 cursor-pointer group border-l-4 border-transparent hover:border-blue-500"
      >
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
              <Calendar :size="16" class="text-white" />
            </div>
          </div>
          
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-1">
              {{ article.title }}
            </h4>
            <p class="text-xs text-gray-600 mb-2 line-clamp-2">
              {{ article.excerpt }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{{ article.date }}</span>
              <span class="text-xs text-blue-600 font-medium group-hover:text-blue-700 flex items-center">
                Read more
                <ArrowRight :size="12" class="ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- View All Link -->
    <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <router-link 
        to="/news"
        class="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 no-underline"
      >
        <span>View All News</span>
        <ArrowRight :size="16" class="ml-2" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Newspaper, Calendar, ArrowRight, ChevronRight } from 'lucide-vue-next'

// Sample news data - replace with actual API call
const latestNews = ref([
  {
    title: "CBSE Board Results 2024-25 Declared",
    excerpt: "Our students achieve exceptional results with 98% pass rate and multiple distinctions.",
    date: "March 15, 2024"
  },
  {
    title: "New AV Room for Interactive Learning",
    excerpt: "State-of-the-art audio-visual facility enables remote interactive teaching sessions.",
    date: "March 10, 2024"
  },
  {
    title: "Annual Sports Day Celebration",
    excerpt: "Students showcase athletic excellence in various sporting events and competitions.",
    date: "March 5, 2024"
  },
  {
    title: "Science Exhibition Success",
    excerpt: "Young scientists present innovative projects demonstrating STEAM education principles.",
    date: "February 28, 2024"
  },
  {
    title: "Teacher Training Workshop",
    excerpt: "Faculty participates in advanced pedagogical training for conceptual learning methods.",
    date: "February 20, 2024"
  }
])
</script>

<style scoped>
/* Line clamp utility for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}

/* Remove underline from router-links */
.no-underline {
  text-decoration: none !important;
}

.no-underline:hover {
  text-decoration: none !important;
}
</style>
