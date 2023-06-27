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
                    image: {class:'w-15rem'}
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
                class="w-15rem"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
    </Project>
</template>