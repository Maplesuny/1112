<template>
    <div>
        <ChildComponent :numbers="num" :sss="ddd" />
    </div>
</template>

<script>
import ChildComponent from "./child.vue";
import { ref } from 'vue'
export default {
    name: "ParentComponent",
    components: {
        ChildComponent
    },
    setup () {
        let num = ref([1, 23, 4])
        let ddd = 777
        return { num, ddd }
    }
};
</script>