<template>
    <div>
        <!--這邊接收子component的資訊，有props裡面的numbers，還包含自定義事件名稱-->
        <ChildComponent
            :numbers="num"
            :sss="parent_sss"
            @number-added="num.push($event)"
            @open="receive"
        />
    </div>
    <p>接收進來的資料: {{ message }}</p>
    <br />
</template>

<script>
import ChildComponent from "pages/props/child2.vue";
import { ref } from 'vue'
export default {
    name: "ParentComponent",
    components: {
        ChildComponent
    },
    emits: ['open'],
    setup (props, context) {
        let num = ref([1, 2, 3])
        let parent_sss = ref(77777)
        console.log(props.num)
        // 用來接收child2 資料
        let message = ref('')

        // function ss () {
        //     console.log('onopen')
        // }

        function receive (e) {
            console.log('右邊的值', e)
            message.value = e
        }

        const itemclickFun = (e) => {
            console.log('右邊的值', e)
            message.value = e
        }

        return { num, parent_sss, itemclickFun, message, receive }
    },
};
</script>