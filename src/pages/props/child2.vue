<template>
    <div>
        <h2>{{ numbers }}</h2>
        <input v-model="num" type="number" />
        <!--emit 需要以v-on的方式來將值傳給父。 $emit(自定義事件名稱, 屬性)-->
        <button @click="$emit('number-added', Number(num))">Add new number</button>
        <div>sss is : {{ sss }}</div>
        <q-btn @click="send_event">dfdf</q-btn>
    </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: "ChildComponent",
    props: {
        numbers: Array,
        //我開一個東西給你把資料傳進來
        sss: Number
    },
    setup (props, context) {

        let sned_data = ref('childddddffssssf')

        watch(props.numbers, () => {
            console.log('props_number:', props.numbers)
        })
        console.log('接收父親傳來的資訊', props.sss)

        // emit傳送資料。使用context ，emit('事件名稱',要傳送的值)，事件名稱是在另一端要用到的
        function send_event () {
            context.emit('open', sned_data.value)
        }
        return { sned_data, send_event }
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