<template>
    <q-layout view="hHh  Lpr lFf">
        <q-header elevated class="bg-cyan-9">
            <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                <q-toolbar-title>Quasar App</q-toolbar-title>
                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="drawer"
            showif-above
            :mini="miniState"
            @mouseover="miniState = false"
            @mouseout="miniState = true"
            :width="180"
            :breakpoint="500"
            bordered
            class="bg-grey-1"
        >
            <q-scroll-area class="fit">
                <q-list padding>
                    <q-item to="/" exact>
                        <q-item-section avatar>
                            <q-icon name="home" />
                        </q-item-section>
                        <q-item-section>Home</q-item-section>
                    </q-item>
                    <q-item to="/line" exact>
                        <q-item-section avatar>
                            <q-icon name="signal_cellular_alt" />
                        </q-item-section>
                        <q-item-section>Inbox</q-item-section>
                    </q-item>
                    <q-item to="/eeg" exact>
                        <q-item-section avatar>
                            <q-icon name="insert_chart_outlined"></q-icon>
                        </q-item-section>
                        <q-item-section>EEG</q-item-section>
                    </q-item>
                    <q-item to="/Total" exact>
                        <q-item-section avatar>
                            <q-icon name="poll"></q-icon>
                        </q-item-section>
                        <q-item-section>Charts</q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'MainLayout',
    setup () {
        return {
            drawer: ref(false),
            miniState: ref(true),
        }
    }
})
</script>
