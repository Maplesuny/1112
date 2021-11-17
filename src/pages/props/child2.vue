<template>
    <div>
        <h2>{{ numbers }}</h2>
        <input v-model="num" type="number" />
        <!--emit 需要以v-on的方式來將值傳給父。 $emit(自定義事件名稱, 屬性)-->
        <button @click="$emit('number-added', Number(num))">Add new number</button>
        <div>sss is : {{ sss }}</div>
        <div id="button_next">
            <q-btn>上一頁</q-btn>
            <p>1</p>
            <q-btn>下一頁</q-btn>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "ChildComponent",
    props: {
        numbers: Array,
        sss: Number
    },
    setup (props) {
        let num = ref(0)
        console.log(props.numbers)
        console.log('接收父親傳來的資訊', props.sss)
        return { num }
    }
};
</script>
<style scoped>
#button_next {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
}
</style>