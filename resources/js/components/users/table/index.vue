<template>
    <table class="table table-bordered">
        <thead class="thead-primary shadow-primary">
            <tr v-if="columns.length > 0">
                <th v-for="column in columns" :key="column.name">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="loading">
                <td class="text-center" colspan="6">
                    Loading
                    <img src="/images/ajax-loader.gif" alt="Loading...." />
                </td>
            </tr>
            <tr v-if="items.length === 0 && !loading">
                <td :colspan="columns.length">
                    <p class="mb-0 text-center">
                        <i>No data has been found</i>
                    </p>
                </td>
            </tr>
            <tr v-else-if="!loading" v-for="(item, i) in items" :key="i">
                <td
                    v-for="(column, j) in columns"
                    :key="column.name + '-' + j"
                    style="vertical-align:middle"
                >
                    <slot :name="`table-td-${column.name}`" :item="item">
                        <!-- {{ item[column.name] }} -->
                        {{ getCellValue(column, item) }}
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        loading: {
            required: true,
            type: Boolean
        },
        columns: {
            required: true,
            type: Array
        },
        items: {
            required: true,
            type: Array
        }
    },
    methods: {
        getCellValue(col, row) {
            const val =
                typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field];
            return col.format !== void 0 ? col.format(val, row) : val;
        }
    }
};
</script>

<style></style>
