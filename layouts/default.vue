<template>
    <div class="screen">
        <div class="page">
            <NuxtPage />
        </div>
        <div class="menu">
            <ul>
                <li>
                    <NuxtLink to="/"><span>🏠</span><span>Главная</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/courses"><span>📕</span><span>Курсы</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tasks"><span>📖</span><span>Задания</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/profile"><span>🙍‍♂️</span><span>Профиль</span></NuxtLink>
                </li>
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
    overflow: auto;
}

.menu {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 835px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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