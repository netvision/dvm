<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- News Section -->
        <div class="lg:w-2/3">
          <h2 class="text-3xl font-bold text-blue-900 mb-2">Latest News</h2>
          <div class="w-20 h-1 bg-yellow-500 mb-6"></div>
          
          <div v-if="loading" class="text-center py-8">
            <p class="text-gray-600">Loading news...</p>
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="item in newsItems" 
              :key="item.id" 
              class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-48 object-cover"
              />
              <div class="p-5">
                <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar :size="14" />
                  <span>{{ item.date }}</span>
                </div>
                <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
                <p class="text-gray-700 text-sm mb-3">{{ item.excerpt }}</p>
                <router-link 
                  :to="`/news/${item.id}`"
                  class="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm"
                >
                  Read More <ArrowRight :size="14" class="ml-1" />
                </router-link>
              </div>
            </div>
          </div>
          
          <div class="mt-6 text-center">
            <router-link 
              to="/news" 
              class="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              View All News
            </router-link>
          </div>
        </div>
        
        <!-- Events Section -->
        <div class="lg:w-1/3">
          <h2 class="text-3xl font-bold text-blue-900 mb-2">Upcoming Events</h2>
          <div class="w-20 h-1 bg-yellow-500 mb-6"></div>
          
          <div class="bg-gray-50 rounded-lg p-6">
            <div v-if="loading" class="text-center py-4">
              <p class="text-gray-600">Loading events...</p>
            </div>
            
            <div v-else>
              <div 
                v-for="event in events" 
                :key="event.id" 
                class="mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
              >
                <h3 class="font-bold text-lg mb-1">{{ event.title }}</h3>
                <div class="text-sm text-gray-700">
                  <div class="flex items-center gap-2">
                    <Calendar :size="14" />
                    <span>{{ event.date }}</span>
                  </div>
                  <div class="mt-1">{{ event.time }}</div>
                </div>
              </div>
            </div>
            
            <router-link 
              to="/events" 
              class="inline-flex items-center justify-center w-full bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded mt-4 transition-colors"
            >
              View All Events
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Calendar, ArrowRight } from 'lucide-vue-next'

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
}

interface EventItem {
  id: number
  title: string
  date: string
  time: string
}

const newsItems = ref<NewsItem[]>([])
const events = ref<EventItem[]>([])
const loading = ref(true)

// Mock data for development (replace with actual API calls)
const mockNewsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Admissions Open for 2025-26 Academic Year',
    date: 'June 10, 2025',
    excerpt: 'Applications are now being accepted for all classes from Nursery to Class XII for the upcoming academic year.',
    image: 'https://pub-cdn.sider.ai/u/U01AH8KELLX/web-coder/684e997d0484c40371d10541/resource/3287fc45-4809-4e3f-84b6-8aea6ee8e9ac.jpg'
  },
  {
    id: 2,
    title: 'Annual Day Celebration: A Grand Success',
    date: 'May 25, 2025',
    excerpt: 'Our Annual Day celebration showcased the incredible talent of our students through various cultural performances.',
    image: 'https://pub-cdn.sider.ai/u/U01AH8KELLX/web-coder/684e997d0484c40371d10541/resource/def72fae-755e-43d9-bef2-2c053e52f0df.jpg'
  },
  {
    id: 3,
    title: 'Sports Meet Concludes with Flying Colors',
    date: 'April 18, 2025',
    excerpt: 'The annual inter-house sports competition concluded with Blue House emerging as the overall champion.',
    image: 'https://pub-cdn.sider.ai/u/U01AH8KELLX/web-coder/684e997d0484c40371d10541/resource/d2a18ac6-3060-4df6-b6d7-1e827c9887cf.jpg'
  }
]

const mockEvents: EventItem[] = [
  {
    id: 1,
    title: 'Parent-Teacher Meeting',
    date: 'June 25, 2025',
    time: '10:00 AM - 1:00 PM'
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: 'July 15, 2025',
    time: '9:00 AM - 4:00 PM'
  },
  {
    id: 3,
    title: 'Founders Day Celebration',
    date: 'August 5, 2025',
    time: '10:00 AM - 2:00 PM'
  },
  {
    id: 4,
    title: 'Inter-School Debate Competition',
    date: 'August 20, 2025',
    time: '11:00 AM - 3:00 PM'
  }
]

onMounted(async () => {
  try {
    // Replace these with actual API calls
    // const [newsRes, eventsRes] = await Promise.all([
    //   axios.get('https://api.example.com/news'),
    //   axios.get('https://api.example.com/events'),
    // ])
    // newsItems.value = newsRes.data
    // events.value = eventsRes.data
    
    // For now, using mock data
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
    newsItems.value = mockNewsItems
    events.value = mockEvents
  } catch (error) {
    console.error('Error fetching news or events:', error)
    // Fallback to mock data on error
    newsItems.value = mockNewsItems
    events.value = mockEvents
  } finally {
    loading.value = false
  }
})
</script>
