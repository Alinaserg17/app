export default defineEventHandler((event) => {
    return {
        lastname: "Иванов",
        name: "Игорь",
        middlename: "Петрович",
        education: [
            {
                type: "Среднее-профессиональное образование",
                name: "РЖТ",
                qualify: "Техник"

            },
            {
                type: "Ввысшее образование",
                name: "МГУ",
                qualify: "Экономист"

            },
        ],
        job: [
            {
                experience: "4 года",
                organization: "ООО Строй",
                position: "Руководтель"
            },
            {
                experience: "7 года",
                organization: "ООО ЛКА",
                position: "Заместитель директора"
            },
        ],
        certificates:[
            {
                name: "Оказание первой помощи помтрадавшему",
                issue_organization:"Медицинский центр оказания первой помощи"
            },
            {
                name: "Обучение работы со сварочным аппаратом",
                issue_organization:"Национальный институт сварочного производства"
            }
        ]
    }
})