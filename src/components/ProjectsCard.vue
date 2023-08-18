<script lang="js">
import { defineComponent } from 'vue';

import ProjectItem from '@/components/ProjectItem.vue'

import Image from 'primevue/image';
import Divider from 'primevue/divider';

export default defineComponent({
    components: {
        Divider,
        Image,
        ProjectItem
    },
    props: {
        projectsProfile: { type: Array, required: true },
    }
})
</script>

<template>
    <ProjectItem 
        :name="this.projectsProfile[0].name"
        :summary="this.projectsProfile[0].summary"
        :highlights="this.projectsProfile[0].highlights">

            <Image 
                :src="this.projectsProfile[0].picture"
                alt="Network Diagram"
                preview
                :pt="{
                    image: {
                        class: 'project-side-card no-print', 
                        style: 'mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%);'
                    }
                }">
            </Image>
            <a :href="this.projectsProfile[0].picture" target="_blank"><img
                alt="Network Diagram"
                :src="this.projectsProfile[0].picture"
                class="border-round 
                    h-20rem
                    print-only"
            /></a>
        </ProjectItem>
        
    <Divider/>
        
    <ProjectItem 
        :name="this.projectsProfile[1].name"
        :summary="this.projectsProfile[1].summary"
        :highlights="this.projectsProfile[1].highlights">

            <iframe
                :src="this.projectsProfile[1].url"
                :title="this.projectsProfile[1].name"
                class="project-side-card no-print"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <a :href="this.projectsProfile[1].url" class="project-side-card print-only"> Link to Video </a>
    </ProjectItem>
</template>

<style>
.project-side-card {
    width: 15rem;
    max-height: 15rem;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
}
</style>