<template>
  <div class="about-page">
    <!-- Hero Section -->
    <div class="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="container mx-auto px-4 h-full flex items-center relative z-10">
        <div class="text-white">
          <h1 class="text-5xl font-bold mb-4">About Dalmia Vidya Mandir</h1>
          <p class="text-xl">Celebrating 100 Years of Educational Excellence</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <!-- Introduction -->
      <div class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-blue-900 mb-6">Our Legacy</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Established in 1925, Dalmia Vidya Mandir has been a beacon of educational excellence for over a century. 
              As a premier CBSE-affiliated institution, we have nurtured thousands of students who have gone on to 
              excel in various fields across the globe.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Our institution stands as a testament to quality education, combining traditional values with modern 
              pedagogical approaches. We believe in holistic development, ensuring our students are academically 
              sound, morally upright, and socially responsible citizens.
            </p>
            <div class="flex items-center space-x-8 text-center">
              <div>
                <div class="text-3xl font-bold text-blue-900">100+</div>
                <div class="text-sm text-gray-600">Years of Legacy</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-900">5000+</div>
                <div class="text-sm text-gray-600">Alumni</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-900">95%</div>
                <div class="text-sm text-gray-600">Board Results</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop" 
              alt="Dalmia Vidya Mandir School Building" 
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <!-- Vision & Mission -->
      <div class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-blue-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p class="text-gray-700 leading-relaxed">
              To be a globally recognized educational institution that empowers students to become confident, 
              creative, and compassionate leaders who contribute meaningfully to society while preserving 
              our rich cultural heritage.
            </p>
          </div>
          <div class="bg-yellow-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p class="text-gray-700 leading-relaxed">
              To provide comprehensive education that fosters intellectual curiosity, character development, 
              and practical skills, preparing students for success in the 21st century while maintaining 
              the highest standards of academic excellence.
            </p>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 border-2 border-blue-100 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🎯</div>
            <h4 class="text-xl font-semibold text-blue-900 mb-3">Excellence</h4>
            <p class="text-gray-600">Striving for the highest standards in academics, sports, and character development.</p>
          </div>
          <div class="text-center p-6 border-2 border-blue-100 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🤝</div>
            <h4 class="text-xl font-semibold text-blue-900 mb-3">Integrity</h4>
            <p class="text-gray-600">Building honest, ethical, and responsible individuals who uphold moral principles.</p>
          </div>
          <div class="text-center p-6 border-2 border-blue-100 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">💡</div>
            <h4 class="text-xl font-semibold text-blue-900 mb-3">Innovation</h4>
            <p class="text-gray-600">Embracing creativity and critical thinking to solve tomorrow's challenges.</p>
          </div>
        </div>
      </div>

      <!-- Leadership Team -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">Leadership Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="Principal" 
              class="w-48 h-48 mx-auto rounded-full object-cover mb-4 shadow-lg"
            />
            <h4 class="text-xl font-semibold text-blue-900">Dr. Rajesh Sharma</h4>
            <p class="text-gray-600 mb-2">Principal</p>
            <p class="text-sm text-gray-500">M.Ed., Ph.D. in Education<br/>25+ years in Educational Leadership</p>
          </div>
          <div class="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616c898834a?w=300&h=300&fit=crop&crop=face" 
              alt="Vice Principal" 
              class="w-48 h-48 mx-auto rounded-full object-cover mb-4 shadow-lg"
            />
            <h4 class="text-xl font-semibold text-blue-900">Mrs. Priya Agarwal</h4>
            <p class="text-gray-600 mb-2">Vice Principal</p>
            <p class="text-sm text-gray-500">M.A., B.Ed.<br/>20+ years in Academic Administration</p>
          </div>
          <div class="text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
              alt="Academic Director" 
              class="w-48 h-48 mx-auto rounded-full object-cover mb-4 shadow-lg"
            />
            <h4 class="text-xl font-semibold text-blue-900">Mr. Amit Kumar</h4>
            <p class="text-gray-600 mb-2">Academic Director</p>
            <p class="text-sm text-gray-500">M.Sc., B.Ed.<br/>18+ years in Curriculum Development</p>
          </div>
        </div>
      </div>

      <!-- Awards & Recognition -->
      <div class="bg-gray-50 p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">Awards & Recognition</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-4xl mb-3">🏆</div>
            <h5 class="font-semibold text-blue-900 mb-2">Best CBSE School</h5>
            <p class="text-sm text-gray-600">Education Excellence Awards 2024</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-3">🌟</div>
            <h5 class="font-semibold text-blue-900 mb-2">Green School Certification</h5>
            <p class="text-sm text-gray-600">Eco-friendly Campus Initiative</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-3">📚</div>
            <h5 class="font-semibold text-blue-900 mb-2">Innovation in Education</h5>
            <p class="text-sm text-gray-600">Remote Interactive Teaching with Expert Faculty</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-3">🎯</div>
            <h5 class="font-semibold text-blue-900 mb-2">Sports Excellence</h5>
            <p class="text-sm text-gray-600">Inter-School Championship</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About page component
</script>
