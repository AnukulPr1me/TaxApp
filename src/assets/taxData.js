const taxData = [
    {
        Schedules: "I",
        SNo: 1,
        ChapterHeading: "0202, 0203, 0204",
        Description: "All goods [other than fresh or chilled] pre-packaged and labelled.",
        CGSTRate: "2.5%",
        SGSTRate: "2.5%",
        IGSTRate: "5%",
        CompensationCess: "-"
    },
    {
        Schedules: "I",
        SNo: 2,
        ChapterHeading: "0303, 0304, 0305",
        Description: "Seafood products, pre-packaged and labelled.",
        CGSTRate: "2.5%",
        SGSTRate: "2.5%",
        IGSTRate: "5%",
        CompensationCess: "-"
    },
    {
        Schedules: "II",
        SNo: 3,
        ChapterHeading: "0901",
        Description: "Coffee, whether or not roasted or decaffeinated.",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        CompensationCess: "-"
    },
    {
        Schedules: "II",
        SNo: 4,
        ChapterHeading: "1006",
        Description: "Rice, semi-milled or wholly milled, whether or not polished or glazed.",
        CGSTRate: "5%",
        SGSTRate: "5%",
        IGSTRate: "10%",
        CompensationCess: "-"
    },
    {
        Schedules: "III",
        SNo: 5,
        ChapterHeading: "1511",
        Description: "Palm oil and its fractions, refined but not chemically modified.",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        CompensationCess: "-"
    },
    {
        Schedules: "III",
        SNo: 6,
        ChapterHeading: "1701",
        Description: "Cane or beet sugar and chemically pure sucrose, in solid form.",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        CompensationCess: "-"
    },
    {
        Schedules: "IV",
        SNo: 7,
        ChapterHeading: "2203",
        Description: "Beer made from malt, in bottles or cans.",
        CGSTRate: "14%",
        SGSTRate: "14%",
        IGSTRate: "28%",
        CompensationCess: "12%"
    },
    {
        Schedules: "IV",
        SNo: 8,
        ChapterHeading: "2402",
        Description: "Cigars, cheroots, cigarillos, and cigarettes, of tobacco or of tobacco substitutes.",
        CGSTRate: "14%",
        SGSTRate: "14%",
        IGSTRate: "28%",
        CompensationCess: "5%"
    },
    {
        Schedules: "V",
        SNo: 9,
        ChapterHeading: "3004",
        Description: "Medicaments consisting of mixed or unmixed products for therapeutic or prophylactic uses.",
        CGSTRate: "2.5%",
        SGSTRate: "2.5%",
        IGSTRate: "5%",
        CompensationCess: "-"
    },
    {
        Schedules: "V",
        SNo: 10,
        ChapterHeading: "3102",
        Description: "Mineral or chemical fertilizers, nitrogenous.",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        CompensationCess: "-"
    },
    {
        Schedules: "VI",
        SNo: 11,
        ChapterHeading: "3303",
        Description: "Perfumes and toilet waters.",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        CompensationCess: "-"
    },
    {
        Schedules: "VI",
        SNo: 12,
        ChapterHeading: "3401",
        Description: "Soap; organic surface-active products and preparations for use as soap, in the form of bars, cakes, or molded pieces.",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        CompensationCess: "-"
    },
    {
        Schedules: "VII",
        SNo: 13,
        ChapterHeading: "3604",
        Description: "Fireworks, signaling flares, rain rockets, fog signals and other pyrotechnic articles.",
        CGSTRate: "14%",
        SGSTRate: "14%",
        IGSTRate: "28%",
        CompensationCess: "5%"
    },
    {
        Schedules: "VII",
        SNo: 14,
        ChapterHeading: "3808",
        Description: "Insecticides, rodenticides, fungicides, herbicides, etc., put up for retail sale.",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        CompensationCess: "-"
    },
    {
        Schedules: "VIII",
        SNo: 15,
        ChapterHeading: "4011",
        Description: "New pneumatic tires, of rubber.",
        CGSTRate: "14%",
        SGSTRate: "14%",
        IGSTRate: "28%",
        CompensationCess: "-"
    },
    {
        Schedules: "VIII",
        SNo: 16,
        ChapterHeading: "4202",
        Description: "Trunks, suitcases, vanity cases, executive cases, briefcases, school satchels, etc.",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        CompensationCess: "-"
    },
    {
        Schedules: "IX",
        SNo: 17,
        ChapterHeading: "4407",
        Description: "Wood sawn or chipped lengthwise, sliced or peeled, whether or not planed, sanded or end-jointed.",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        CompensationCess: "-"
    },
    {
        Schedules: "IX",
        SNo: 18,
        ChapterHeading: "4412",
        Description: "Plywood, veneered panels and similar laminated wood.",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        CompensationCess: "-"
    },
    {
        Schedules: "X",
        SNo: 19,
        ChapterHeading: "4602",
        Description: "Basketwork and other articles, made directly to shape from plaiting materials.",
        CGSTRate: "2.5%",
        SGSTRate: "2.5%",
        IGSTRate: "5%",
        CompensationCess: "-"
    },
    {
        Schedules: "X",
        SNo: 20,
        ChapterHeading: "4818",
        Description: "Toilet paper, handkerchiefs, tissues, towels, napkins for household use.",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        CompensationCess: "-"
    },
    {
        Schedules: "XI",
        SNo: 21,
        ChapterHeading: "5004",
        Description: "Silk yarn (other than yarn spun from silk waste) not put up for retail sale.",
        CGSTRate: "5%",
        SGSTRate: "5%",
        IGSTRate: "10%",
        CompensationCess: "-"
    },
    {
        Schedules: "XI",
        SNo: 22,
        ChapterHeading: "5201",
        Description: "Raw cotton, ginned or unginned.",
        CGSTRate: "2.5%",
        SGSTRate: "2.5%",
        IGSTRate: "5%",
        CompensationCess: "-"
    }
];

export default taxData;