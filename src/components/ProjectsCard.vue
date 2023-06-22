<script lang="js">
import { defineComponent } from 'vue';

import Divider from 'primevue/divider';

export default defineComponent({
    components: {
        Divider
    },
    props: {
        projects: {type: [Object], required: true}
    }
})
</script>

<template>
    <template  v-for="(project, index) in this.projects" :key="project.name">
        <div class="
            flex
            w-full
            xl:flex-row
            lg:flex-row
            md:flex-column
            sm:flex-column">

            <div class="flex flex-column flex-order-1 pr-4">
                <div class="text-xl lg:text-xl md:text-lg sm:text-sm">
                    {{ project.name }}
                </div>
            
                <div class=" text-sm
                    xl:text-sm
                    lg:text-sm
                    lg:font-normal
                    md:text-xs
                    md:font-light
                    sm:text-xs
                    sm:font-light
                    pt-1"> 
                        {{ project.summary }}
                </div>
            
                <div class="mt-4">
                    <div v-for="highlight in project.highlights" :key="highlight"
                        class="
                        text-sm
                        xl:text-sm
                        lg:text-sm
                        md:text-xs
                        sm:text-xs">
                        {{ highlight }}
                    </div>
                </div>
            </div>
    
            <div class="flex 
                flex-order-2
                align-items-center
                justify-content-end"
                v-if="project.keywords.indexOf('YouTube') > -1"
            >
                <iframe
                    class="w-full"
                    :src="project.url"
                    :title="project.name"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div>
        </div>

        <Divider v-if="index < this.projects.length -1"  />

    </template>
</template>