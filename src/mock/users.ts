import type { IUser } from "@/utils/types";
import { COUNTRY_FILTER } from "@/utils/types";

export const mockUsers: IUser[] = [
    {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        data: {
            country: COUNTRY_FILTER.RUSSIA,
            score: 1,
            address: "964422, Калужская область, город Талдом, въезд Ладыгина, 03",
        },
    },
    {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        data: {
            country: COUNTRY_FILTER.RUSSIA,
            score: 11,
            address: "167052, Тверская область, город Коломна, ул. Ленина, 44",
        },
    },
    {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        data: {
            country: COUNTRY_FILTER.USA,
            score: 3,
            address: "987045, Белгородская область, город Кашира, ул. Гагарина, 70",
        },
    },
    {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        data: {
            country: COUNTRY_FILTER.USA,
            score: 13,
            address: "778848, Челябинская область, город Наро-Фоминск, пр. Гоголя, 52",
        },
    },
    {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        data: {
            country: COUNTRY_FILTER.RUSSIA,
            score: 24,
            address: "272381, Тульская область, город Шатура, шоссе Космонавтов, 91",
        },
    },
];
