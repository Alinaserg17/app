<script setup>
const { data } = await useFetch("/api/user");
console.log(data.value);
const tab = ref('common')
</script>
<template>
    <ul class="menu">
        <li v-on:click="tab = 'common'">Общее</li>
        <li v-on:click="tab = 'education'">Образование</li>
        <li v-on:click="tab = 'job'">Опыт работы</li>
        <li v-on:click="tab = 'certificates'">Сертификаты</li>
    </ul>
    <div class="info" v-if="tab === 'common'">
        <h2>Общее</h2>
        <h3>ФИО</h3>
        <p>{{data.lastname}}{{ data.name }}{{ data.middlename }}</p>
    </div>

    <div class="info" v-if="tab === 'education'">
        <h2>Образование </h2>
        <h3>СПО</h3>
        <p>Волгодонской техникум</p>
<div class="edu-info">
<p>Тип:{{ item.type }}</p>
<p>Заведение:{{ item.name }}</p>
<p></p>


</div>
    </div>

    <div class="info" v-if="tab === 'job'">
        <h2>Опыт работы</h2>
        <h3>3 года</h3>
        <p>Волгодонской техникум</p>
    </div>


    <div class="info" v-if="tab === 'certificates'">
        <h2>Сертификаты  </h2>
        <h3>Об окончании </h3>
        <p>Волгодонского техникума</p>
    </div>

</template>


<style scoped>
menu  {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
}

menu li {
    padding: 5px;
    background: white;
}

.info {
    background: white;
    padding: 5px;
}
</style>