import PropertyBannerVendorContactDetails from '../../resources/views/pages/VendorContactDetails/PropertyBannerVendorContactDetails.vue'
import {ActionType} from "../../app/util/baseUtil/ActionType.js";

export default [
    {
        path:"/",
        name:ActionType.routes.page.vendorContactDetails.propertyBanner,
        component:PropertyBannerVendorContactDetails,
        meta:{
            layout:"vendorContactDetailsPageLayout"
        }
    }
]