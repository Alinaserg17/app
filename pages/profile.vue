<script setup>
const edit = ref(false)
</script>
<template>
    <div class="page">
        <h1>Профиль</h1>
        <button>Редактировать</button>
        <div class="view" v-if="!edit">
            <p>Пользователь</p>
        </div>
        <div class="edit" v-else>


            <h2>Загрузить фото</h2>
            <imageLoader />
        </div>
    </div>
</template>
<style scoped>
.page {
    padding: 15px;
}
</style>