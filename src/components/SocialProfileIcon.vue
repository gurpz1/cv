<script lang='js'>

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        network: {type: String, required: true},
        icon: String,
        url: {type: String, required: true},
        username: {type: String, required: true}
    },

    methods: {
        openUrl() {
            window.open(this.url, '_blank')
        }
    },

    computed: {
        flexIconToUse() {
            let iconName = this.icon ? this.icon : this.network.toLowerCase();
            return `pi-${iconName}`
        }
    }
})

</script>

<template>
    <i class="pi cursor-pointer"
        :class="this.flexIconToUse"
        :title="network"
        @click="openUrl()">
    </i>
</template>