<template>
    <div class="echarts-box">
        <div id="myEcharts" :style="{ width: '800px', height: '500px' }"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
export default {
    setup () {
        onMounted(() => {
            const chartDom = document.getElementById('myEcharts')
            const myChart = echarts.init(chartDom)
            let option
            option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }
                ]
            };
            option && myChart.setOption(option);

        })
    },
}
</script>