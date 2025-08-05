<template>
  <div class="home">
    <Hero />
    
    <!-- Main Content with Sidebar Layout -->
    <div class="bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <div class="grid lg:grid-cols-4 gap-8">
          <!-- Main Content Area -->
          <div class="lg:col-span-3">
            <Vision />
            <Features />
          </div>
          
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-8 space-y-6">
              <!-- Sidebar Header -->
              <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  Latest Updates
                </h2>
                <p class="text-gray-600 text-sm">Stay informed with our latest news and upcoming events</p>
              </div>
              
              <NewsSidebar />
              <EventsSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Vision from '../components/Vision.vue'
import Features from '../components/Features.vue'
import NewsSidebar from '../components/NewsSidebar.vue'
import EventsSidebar from '../components/EventsSidebar.vue'
</script>
