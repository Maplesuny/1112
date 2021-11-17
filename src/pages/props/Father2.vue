<template>
    <div>
        <!--這邊接收子component的資訊，有props裡面的numbers，還包含自定義事件名稱-->
        <ChildComponent :numbers="num" :sss="parent_sss" @number-added="num.push($event)" />
    </div>
</template>

<script>
import ChildComponent from "pages/props/child2.vue";
import { ref } from 'vue'
export default {
    name: "ParentComponent",
    components: {
        ChildComponent
    },
    setup (props) {
        let num = ref([1, 2, 3])
        let parent_sss = ref(77777)
        return { num, parent_sss }
    },
};
</script>