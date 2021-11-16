<template>
    <div id="Pagination">
        <div class="q-pa-md">
            <q-table
                title="Treats"
                :data="data"
                :columns="columns"
                row-key="name"
                v-model:pagination="pagination"
                :rows-per-page-options="[0]"
                :filter="filter"
            >
                <template #top-right>
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                        <template #append>
                            <q-icon name="search"></q-icon>
                        </template>
                    </q-input>
                </template>
                <template #bottom="props">
                    <div class="col-12 q-pa-sm flex flex-center">
                        <q-pagination
                            :value="props.pagination.page"
                            :max="props.pagesNumber"
                            input
                            input-class="text-orange-10"
                            @input="paginate"
                        ></q-pagination>
                    </div>
                </template>
            </q-table>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    setup () {
        function paginate (v) {
            this.pagination.page = v
        }
        return {
            paginate,
            filter: ref(''),
            pagination: ref({
                sortBy: 'name',
                descending: false,
                page: 1
            }),
            columns: ref([
                {
                    name: 'desc',
                    required: true,
                    label: 'Dessert (100g serving)',
                    align: 'left',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
                { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
                { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
                { name: 'protein', label: 'Protein (g)', field: 'protein' },
                { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
                { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
                { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
            ]),
            data: ref([
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: '14%',
                    iron: '1%'
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    sodium: 129,
                    calcium: '8%',
                    iron: '1%'
                }
            ])
        }
    },
}
</script>