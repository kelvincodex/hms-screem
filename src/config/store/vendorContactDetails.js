import {defineStore} from "pinia";


export const useVendorContactDetail = defineStore('vendorContactDetailId',{
    state:()=> ({
        steps:{
            propertyBanner:{
                current:1,
                active:true,
            },
            aboutProperty:{
                current:2,
                active:false,
            },
            additionalImages:{
                current:3,
                active:false,
            },
            location:{
                current:4,
                active:false,
            },
            contactInformation:{
                current:5,
                active:false,
            },
            facilities:{
                current:6,
                active:false,
            },
            propertyRules:{
                current:7,
                active:false,
            },
            currentStatus: "process",
            current:1
        },


    }),

    actions:{

    },

    getters:{

    }
})