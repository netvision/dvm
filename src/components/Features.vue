<template>
  <section class="py-12 bg-white rounded-2xl shadow-lg border border-gray-200 relative">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="h-full w-full" style="background-image: radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-12">
        <div class="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
          Why Choose DVM
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Proven Excellence in 
          <span class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Beyond our philosophy lies concrete advantages that make DVM the right choice for your child's future
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Key Benefits Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <!-- 100 Years Legacy -->
        <div class="group text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
          <div class="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Award :size="28" class="text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">100+ Years Legacy</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            A century of educational excellence and proven track record in shaping successful lives
          </p>
          <div class="mt-4 text-amber-600 font-semibold text-sm">
            Established Heritage
          </div>
        </div>

        <!-- Expert Faculty Network -->
        <div class="group text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Monitor :size="28" class="text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">AV Room Excellence</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Interactive remote learning with expert guest faculty from across the globe via our advanced AV facility
          </p>
          <div class="mt-4 text-blue-600 font-semibold text-sm">
            Global Expertise Access
          </div>
        </div>

        <!-- Individual Focus -->
        <div class="group text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
          <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users :size="28" class="text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Small Class Advantage</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Maximum 25 students per class ensuring personalized attention and customized learning paths
          </p>
          <div class="mt-4 text-purple-600 font-semibold text-sm">
            Personal Mentorship
          </div>
        </div>

        <!-- Holistic Development -->
        <div class="group text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
          <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Target :size="28" class="text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Complete Development</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Academic excellence + Sports champions + Arts mastery = Well-rounded individuals ready for life
          </p>
          <div class="mt-4 text-green-600 font-semibold text-sm">
            Future-Ready Citizens
          </div>
        </div>
      </div>

      <!-- Bottom Stats -->
      <div class="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-300 mb-2">100+</div>
            <div class="text-sm text-gray-300 uppercase tracking-wide">Years of Excellence</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-green-300 mb-2">1:25</div>
            <div class="text-sm text-gray-300 uppercase tracking-wide">Teacher-Student Ratio</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-purple-300 mb-2">360°</div>
            <div class="text-sm text-gray-300 uppercase tracking-wide">Holistic Development</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Award, Monitor, Users, Target } from 'lucide-vue-next'
</script>
