<script lang="js">
import { defineComponent } from 'vue';

import Project from '@/components/Project.vue'

import Image from 'primevue/image';
import Divider from 'primevue/divider';

export default defineComponent({
    components: {
        Divider,
        Image,
        Project
    },
    props: {
        projectsProfile: { type: Array, required: true },
    },
})
</script>

<template>
    <Project 
        :name="this.projectsProfile[0].name"
        :summary="this.projectsProfile[0].summary"
        :highlights="this.projectsProfile[0].highlights">

            <Image 
                src="/src/assets/network.svg" 
                alt="Network Diagram"
                preview
                :pt="{
                    image: {
                        class: 'project-side-card', 
                        style: 'mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%);'
                    }
                }">
            </Image>
        </Project>
        
    <Divider/>
        
    <Project 
        :name="this.projectsProfile[1].name"
        :summary="this.projectsProfile[1].summary"
        :highlights="this.projectsProfile[1].highlights">

            <iframe
                :src="this.projectsProfile[1].url"
                :title="this.projectsProfile[1].name"
                class="project-side-card"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
    </Project>
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