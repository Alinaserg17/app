<template>
    <div class="screen">
        <div class="page">
            <NuxtPage />
        </div>
        <div class="menu">
            <ul>
                <li><span>🏠</span><a href="#">Главная</a></li>
                <li><span>📕</span><a href="#">Курсы</a></li>
                <li><span>📖</span><a href="#">Задания</a></li>
                <li><span>🙍‍♂️</span><a href="#">Профиль</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.screen {
    background: #dbdbdb;
    widows: 414px;
    height: 896px;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
}

.page {
    position: absolute;
    bottom: 65px;
    left: 0;
    right: 0;
    top: 0;
}

.menu {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 835px;
}

.menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: #000;
    text-decoration: none;
}

a {
    color: #000;
    text-decoration: none;
}

.menu span {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>