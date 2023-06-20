<script setup>
import Card from 'primevue/card';

import ProfileBar from '@/components/ProfileBar.vue'
import WorkTimeline from '@/components/WorkTimeline.vue'
</script>

<template>
    <div class="grid">
      <aside class="
        sm:col-5
        md:col-5
        lg:col-4
        xl:col-3">
        <ProfileBar class="bg-primary"/>
      </aside>

      <div class="col">
        <div>
          <Card>
            <template #title>
              Work Experience
            </template>
            <template #content>
            </template>
          </Card>
        </div>
      </div>
    </div>


</template>