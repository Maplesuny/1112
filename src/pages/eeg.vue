<template>
    <q-page-container>
        <div class="echarts-box">
            <div id="myEcharts" :style="styleobject"></div>
            <div id="tes1t">{{ channel_name[0] }}</div>
        </div>

        <div id="pagination_class">
            <q-btn>上一頁</q-btn>
            <p>1</p>
            <q-btn>下一頁</q-btn>
        </div>
    </q-page-container>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import * as echarts from 'echarts';

export default {
    setup () {
        let start_time = ref(0)
        let end_time = ref(10)
        let montage_type = ref(0)
        let channel_name = ref([])
        // // 取得目前寬度，每次刷新比例會適中
        let get_width = document.documentElement.clientWidth
        let fixed_ = ref("")
        fixed_.value = (get_width - 170) + 'px'
        // count_array
        const count_array = []
        // merge_array
        const merge_array = []
        // 目前頁數
        let current_page = ref('')
        // total page
        let total_page = ref('')
        // Json url
        let json_url = 'http://10.65.51.240:28081/api/v1/eegData?start_time=' + start_time.value + '&end_time=' + end_time.value + '&montage_type=' + montage_type.value
        // get Channel name, and push array
        function get_channel_name (data, number) {
            for (let i = 0; i < number; i++) {
                channel_name.value.push(data[i]['id'])
            }
        }
        // 將資料筆數轉為時間
        function convert_sec (number) {
            let base = end_time.value / number
            let sum = 0
            for (let i = 0; i < number; i++) {
                sum = sum + base
                count_array.push(sum)
            }
            return count_array;
        }
        // 下一頁
        // function next_page (start, end, mmontage) {
        //     json_url = 'http://10.65.51.240:28081/api/v1/eegData?start_time=' + start + 10 + '&end_time=' + end + 10 + '&montage_type=' + mmontage
        // }

        onMounted(() => {
            console.log('onMounted')
            const chartDom = document.getElementById('myEcharts')
            const myChart = echarts.init(chartDom)
            axios.get(json_url).then((res) => {
                //請求成功
                let data = res.data
                let channel_length = data.length
                get_channel_name(data, channel_length)
                console.log('剛打進來json', data)
                // 第一筆資料長度
                let data_length = data[0]['value'].length
                console.log('第一筆資料長度', data_length)

                // 要更動顯示的範圍只需更動data_length就好
                for (let j = 0; j < data_length; j++) {
                    merge_array.push([convert_sec(512 * end_time.value)[j], data[0]['value'][j]])
                }
                console.log('合併成value可以讀的object', merge_array)


                let option = {
                    title: {
                        text: data[0]['id'],
                        textBaseline: "middle",
                        left: '1%',
                        top: '25x'
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: true,
                        minorSplitLine: {
                            show: true
                        },
                        minorTick: {
                            // 顯示刻度線
                            show: true,
                            splitNumber: 2,
                            length: 8
                        },
                        axisLabel: {
                            show: true,
                            interval: 1,
                        },
                        min: start_time.value,
                        max: end_time.value


                    },
                    yAxis: {
                        show: false,
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            show: true,
                            showMinLabel: true,
                            showMaxLabel: true,
                            fromatter: function (value) {
                                return value;
                            }
                        }
                    },
                    series: {
                        type: 'line',
                        data: merge_array,
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
            start_time: ref(0),
            end_time: ref(10),
            montage_type: ref(0),
            current: ref(1),
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
#pagination_class {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
}
</style>