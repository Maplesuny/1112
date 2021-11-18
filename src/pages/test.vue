<template>
    <q-input v-model="firstName" label="Standard" />
    <q-input type="text" v-model="search2" />
    <div id="demo">{{ aa }}</div>
    <q-btn @click="button" v-model="search2">dsfsdf</q-btn>
</template> 

<script>
import { ref, watch, computed, onUpdated } from 'vue'
// import { computed } from '@vue/composition-api';
export default {
    setup () {
        //-------------------Vue 3 寫法-------------------------
        const firstName = ref('')
        const search2 = ref('')
        watch(firstName, (newValue, oldValue) => {
            console.log('watch search', newValue, oldValue)
        })
        // watch(search2, () => {
        //     console.log('watch search2', search2.value)
        // })


        const aa = computed(() => {
            return console.log(search2.value + ' ' + 'compunted'), search2.value + ' ' + 'compunted'
            // return search2.value + ' ' + 'compunted'

        })

        function button () {
            let aa = 'adf'
            search2.value = aa
        }



        // const bb = search2.value + ' ' + 'computed'

        onUpdated(() => {
            console.log('onupdate')
        })

        return { firstName, search2, aa, button }
        //----------------------↑ Vue3 寫法 ↑-----------------------

        //---------------------底下是vue2寫法-------------------
        // return {
        //     firstName: ref('foo'),
        //     lastName: ref('bar'),
        // }
        //------------------------------------------------------
    },

    // 下面三種是分別對於vue2的寫法，computed有兩種寫法
    //
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + ' ' + this.lastName
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val
    //     }

    // }
    // computed: {
    //     fullName: function () {
    //         return this.firstName + ' ' + this.lastName
    //     }
    // }
    // computed: {
    //     fullName: {
    //         get: function () {
    //             return this.firstName + " " + this.lastName
    //         },
    //         set: function (value) {
    //             const name = value.split('')
    //             this.lastName = name[0]
    //             this.firstName = name[1]
    //         }
    //     }
    // }
}
</script>