<template>
  <div class="w-full h-full">
    <div class="ml-[185px] mr-[114px]">
        <PropertyBanner v-if="steps.propertyBanner.active"  />
        <AboutProperty v-if="steps.aboutProperty.active" />
        <AdditionalImages v-if="steps.additionalImages.active" />
        <Location v-if="steps.location.active" />
        <ContactInformation v-if="steps.contactInformation.active" />
        <Facilities v-if="steps.facilities.active" />
        <PropertyRules v-if="steps.propertyRules.active" />
    </div>
  </div>
</template>

<script setup>
import {useVendorContactDetail} from "../../../../config/store/vendorContactDetails.js";

const vendorContactDetails = useVendorContactDetail()
const steps = vendorContactDetails?.steps
console.log(steps)

import PropertyBanner from "../../../components/page/VendorContactDetailsPage/PropertyBanner.vue";
import AboutProperty from "../../../components/page/VendorContactDetailsPage/AboutProperty.vue";
import AdditionalImages from "../../../components/page/VendorContactDetailsPage/AdditionalImages.vue";
import Location from "../../../components/page/VendorContactDetailsPage/Location.vue";
import ContactInformation from "../../../components/page/VendorContactDetailsPage/ContactInformation.vue";
import Facilities from "../../../components/page/VendorContactDetailsPage/Facilities.vue";
import PropertyRules from "../../../components/page/VendorContactDetailsPage/PropertyRules.vue";
</script>

<style scoped>

</style>

