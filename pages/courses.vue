<script setup>
const { data } = await useFetch("/api/courses");
console.log(data.value);
</script>
<template>
    <h1>Курсы</h1>
    <div class="courses" v-for="course in data.body" v-bind:key="course">
        <div class="course">
            <div class="pic">
                <img v-bind:src="course.url" alt="">
            </div>
            <div class="info">
                <NuxtLink v-bind:to="'/course/' + course.id">
                    <h3>{{ course.name }}</h3>
                </NuxtLink>
                <p>{{ course.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.course {
    display: flex;
    border: 2px solid #36111b;
    border-radius: 13px;
    margin: 10px;
    padding: 13px;
    align-items: center;
    gap: 18px;
}

.course img {
    width: 150px;
    border-radius: 10px;
}

h3 {
    cursor: pointer;
}

a {
    color: rgb(15, 0, 0);
    text-decoration: none;
}
</style>