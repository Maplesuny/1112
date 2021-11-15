<template>
    <q-page-container>
        <div class="echarts-box">
            <div id="myEcharts" :style="styleobject"></div>
            {{ channel_name[0] }}
            <div id="test"></div>
        </div>
    </q-page-container>
</template>

<script>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import axios from 'axios';
import * as echarts from 'echarts';

export default {
    setup () {
        let start_time = ref(0)
        let end_time = ref(10)
        let montage_type = ref(0)
        let channel_name = ref([])

        let ww = document.documentElement.clientWidth
        let fixed_ = ref("")

        fixed_.value = ww - 170 + 'px'

        // get Channel name, and input array
        function get_channel_name (data, number) {
            for (let i = 0; i < number; i++) {
                channel_name.value.push(data[i]['id'])
            }
        }
        onMounted(() => {
            console.log('onMounted')
            const chartDom = document.getElementById('myEcharts')
            const myChart = echarts.init(chartDom)
            let json_url = 'http://10.65.51.240:28081/api/v1/eegData?start_time=' + start_time.value + '&end_time=' + end_time.value + '&montage_type=' + montage_type.value
            console.log('end', end_time)

            function count (number) {
                const arr = []
                let base = end_time.value / number
                let sum = 0
                for (let i = 0; i < number; i++) {
                    sum = sum + base
                    arr.push(sum)
                }
                return arr;
            }
            axios.get(json_url).then((res) => {
                //請求成功
                let data = res.data
                let channel_length = data.length
                get_channel_name(data, channel_length)
                console.log('dfd', channel_name.value)
                console.log('data[0', data[0])
                console.log('second', data[0]['value'])
                let option = {
                    title: {
                        text: data[0]['id'],
                        textBaseline: "middle",
                        left: '1%',
                        top: '25x'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: count(512 * end_time.value)
                    },
                    yAxis: {
                        type: 'value',
                        scale: true,
                        // axisLabel: {
                        //     show: true,
                        //     showMinLabel: true,
                        //     showMaxLabel: true,
                        //     fromatter: function (value) {
                        //         return value;
                        //     }
                        // }
                    },
                    series: {
                        type: 'line',
                        data: data[0]['value'],
                        symbol: 'none',
                        smoth: true
                    }
                }

                window.onresize
                option && myChart.setOption(option);


            }).catch((err) => {
                //請求失敗
                alert('請求失敗')
                console.log('請求失敗', err)
            })
        })

        return {
            channel_name,
            styleobject: {
                width: fixed_.value,
                height: '300px'
            }
        }

    }
}
</script>
<style scoped>
.echarts-box {
    display: flex;
}
</style>