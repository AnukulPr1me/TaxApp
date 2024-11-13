const serviceTaxData = [
    {
        Schedules: "Chapter 99",
        SNo: 1,
        SectionHeading: "All Services",
        Description: "All Services",
        CGSTRate: "18%",
        SGSTRate: "18%",
        IGSTRate: "36%",
        Condition: "-"
    },
    {
        Schedules: "Section 5",
        SNo: 2,
        SectionHeading: "Construction Services",
        Description: "Construction Services",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        Condition: "-"
    },
    {
        Schedules: "Heading 9954 (Construction services)",
        SNo: 3,
        SectionHeading: "Affordable Housing",
        Description: "Construction of affordable residential apartments...",
        CGSTRate: "0.75%",
        SGSTRate: "0.75%",
        IGSTRate: "1.5%",
        Condition: "Provided that the integrated tax..."
    },
    {
        Schedules: "Heading 9954 (Construction services)",
        SNo: 4,
        SectionHeading: "Non-Affordable Housing",
        Description: "Construction of residential apartments other than affordable housing...",
        CGSTRate: "3.75%",
        SGSTRate: "3.75%",
        IGSTRate: "7.5%",
        Condition: "Provided that the promoter has not opted for ITC credit."
    },
    {
        Schedules: "Section 6",
        SNo: 5,
        SectionHeading: "IT and Software Services",
        Description: "Services related to IT and software development...",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        Condition: "-"
    },
    {
        Schedules: "Section 7",
        SNo: 6,
        SectionHeading: "Legal Services",
        Description: "Legal services including representation services provided by lawyers...",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        Condition: "Applicable only for specified cases."
    },
    {
        Schedules: "Section 8",
        SNo: 7,
        SectionHeading: "Healthcare Services",
        Description: "Healthcare services provided by hospitals, clinics, and nursing homes...",
        CGSTRate: "0%",
        SGSTRate: "0%",
        IGSTRate: "0%",
        Condition: "Exempt from GST."
    },
    {
        Schedules: "Section 9",
        SNo: 8,
        SectionHeading: "Educational Services",
        Description: "Educational services provided by institutions recognized by the government...",
        CGSTRate: "0%",
        SGSTRate: "0%",
        IGSTRate: "0%",
        Condition: "Exempt from GST."
    },
    {
        Schedules: "Section 10",
        SNo: 9,
        SectionHeading: "Financial Services",
        Description: "Services related to banking, insurance, and financial institutions...",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        Condition: "Excludes life insurance services provided to specific categories."
    },
    {
        Schedules: "Section 11",
        SNo: 10,
        SectionHeading: "Transportation Services",
        Description: "Transportation services including passenger and cargo transport...",
        CGSTRate: "5%",
        SGSTRate: "5%",
        IGSTRate: "10%",
        Condition: "Applicable for certain modes of transportation only."
    },
    {
        Schedules: "Section 12",
        SNo: 11,
        SectionHeading: "Hotel Accommodation",
        Description: "Accommodation services provided by hotels, inns, and guest houses...",
        CGSTRate: "6%",
        SGSTRate: "6%",
        IGSTRate: "12%",
        Condition: "Applicable only if room rent exceeds a specified amount."
    },
    {
        Schedules: "Section 13",
        SNo: 12,
        SectionHeading: "Tour Operator Services",
        Description: "Services provided by tour operators and travel agencies...",
        CGSTRate: "2.5%",
        SGSTRate: "2.5%",
        IGSTRate: "5%",
        Condition: "-"
    },
    {
        Schedules: "Section 14",
        SNo: 13,
        SectionHeading: "Real Estate Services",
        Description: "Real estate services including property leasing and rental...",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        Condition: "Exempt for residential property rentals."
    },
    // New entries added below
    {
        Schedules: "Section 15",
        SNo: 14,
        SectionHeading: "Event Management Services",
        Description: "Services related to organizing events and conferences...",
        CGSTRate: "18%",
        SGSTRate: "18%",
        IGSTRate: "36%",
        Condition: "Applicable for specific event types."
    },
    {
        Schedules: "Section 16",
        SNo: 15,
        SectionHeading: "Advertising Services",
        Description: "Services related to advertisement and media campaigns...",
        CGSTRate: "9%",
        SGSTRate: "9%",
        IGSTRate: "18%",
        Condition: "-"
    },
    {
        Schedules: "Section 17",
        SNo: 16,
        SectionHeading: "Transportation of Goods",
        Description: "Services related to transportation of goods across various modes...",
        CGSTRate: "12%",
        SGSTRate: "12%",
        IGSTRate: "24%",
        Condition: "Exempt for transportation of certain goods."
    },
    {
        Schedules: "Section 18",
        SNo: 17,
        SectionHeading: "Event Ticketing Services",
        Description: "Ticketing services for various events including concerts, theaters, etc.",
        CGSTRate: "18%",
        SGSTRate: "18%",
        IGSTRate: "36%",
        Condition: "Applicable for specific event categories."
    },
    {
        Schedules: "Section 19",
        SNo: 18,
        SectionHeading: "Catering Services",
        Description: "Services related to food and beverages provided at events and functions...",
        CGSTRate: "5%",
        SGSTRate: "5%",
        IGSTRate: "10%",
        Condition: "Applicable if service is provided for a gathering of certain size."
    },
    {
        Schedules: "Section 20",
        SNo: 19,
        SectionHeading: "Repair and Maintenance Services",
        Description: "Services related to the repair and maintenance of goods and machinery...",
        CGSTRate: "18%",
        SGSTRate: "18%",
        IGSTRate: "36%",
        Condition: "Excludes specific categories of goods."
    }
];

export default serviceTaxData;