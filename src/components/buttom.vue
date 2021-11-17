<template>
    <eeg :s_startime="start_time" :s_endtime="end_time"></eeg>
</template>


<script>
import { ref, watch, onUpdated } from 'vue'
import eeg from 'pages/eeg.vue'
export default {
    name: 'parent',
    components: {
        eeg
    },

    setup () {
        let start_time = ref(0)
        let end_time = ref(5)
        onUpdated(() => {
            console.log('ooupdate')
        })
        return { start_time, end_time }
    }
}
</script>

