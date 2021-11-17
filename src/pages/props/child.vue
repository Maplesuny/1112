<template>
    <div>
        <h2>{{ numbers }}</h2>
        <h2>{{ sss }}</h2>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    props: {
        numbers: Array,
        sss: Number
    },
    setup (props) {
        console.log(props.sss)
        console.log(props.numbers)
    }
};
</script>