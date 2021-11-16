<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width:100%">
            <q-card>
                <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                >
                    <q-tab name="bar" label="bar" />
                    <q-tab name="line" label="line" />
                    <q-tab name="movies" label="Movies" />
                    <q-tab name="test" label="test" />
                    <q-tab name="Pagination" label="Pagination" />
                </q-tabs>
                <q-separator />
                <q-tab-panels v-model="tab" keep-alive>
                    <q-tab-panel name="bar">
                        <keep-alive>
                            <Bar></Bar>
                        </keep-alive>
                    </q-tab-panel>
                    <q-tab-panel name="line">
                        <keep-alive>
                            <Line></Line>
                        </keep-alive>
                    </q-tab-panel>
                    <q-tab-panel name="movies">
                        <keep-alive>
                            <EEG></EEG>
                        </keep-alive>
                    </q-tab-panel>
                    <q-tab-panel name="test">
                        <keep-alive>
                            <Test></Test>
                        </keep-alive>
                    </q-tab-panel>
                    <q-tab-panel name="Pagination">
                        <keep-alive>
                            <Pagination></Pagination>
                        </keep-alive>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
    </div>
</template>

<script>

import { defineComponent, ref } from 'vue'
import line from 'pages/line.vue'
import bar from 'pages/bar.vue'
import eeg from 'pages/eeg.vue'
import test from 'pages/test.vue'
import pagination from 'pages/pagination.vue'
export default defineComponent({
    name: 'MainLayout',
    components: {
        Bar: bar,
        Line: line,
        EEG: eeg,
        Test: test,
        Pagination: pagination
    },
    setup () {
        return {
            tab: ref('movies')
        }
    }
})
</script>
