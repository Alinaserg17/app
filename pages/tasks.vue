<script setup>
const { data } = await useFetch("/api/tasks");
console.log(data.value);
</script>
<template>
    <h1>Задания</h1>
    <h5>Программирование</h5>
    <div class="tasks" v-for="tasks in data.body" v-bind:key="tasks">
        <div class="tasks">
          
            <div class="number">
                <div v-bind:to="'/tasks/' + tasks.id">
                    <h3>{{ tasks.tilte }}</h3>
                </div>
                <div class="info">
                    <div v-bind:to="'/tasks/' + tasks.id">
                        <h4>{{ tasks.name }}</h4>
                    </div> 
                     <div class="pic" v-if="tasks.url">
                <img v-bind:src="tasks.url" alt="">
            </div>
                    <!-- <p>{{ tasks.description }}</p> -->
                    <div class="opred">
                        <p>{{ tasks.text }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.course {
    display: flex;
    border: 2px solid #3d67db;
    border-radius: 13px;
    margin: 10px;
    padding: 13px;
    align-items: center;
    gap: 18px;
}

img {
    height: 258px;
    width: 400px;
    border-radius: 25px;
    display: flex;

}
.tasks{
    padding: 3px;
}


h3 {
    cursor: pointer;
    padding: 8px;
    
}

h5 {
    font-size: 32px;
    padding: 5px;
    margin: 10px;
    font-weight: bold;
}</style>