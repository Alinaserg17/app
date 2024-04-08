<script setup>
const { data } = await useFetch("/api/courses");

const route = useRoute()
const courseId = parseInt(route.params.id);


const course = getObjectById(data.value.body, courseId)


function getObjectById(arr, id) {
    return arr.find(item => item.id === id)
}
</script>
<template>
    <div class="page">
        <h1>{{ course.name }}</h1>
        <p>{{ course.description }}</p>
    </div>
</template>

<style scoped>
.page {
padding: 15px;

}

</style>