<template>
  <div class="mt-10">
    <div class="flex justify-start items-center">
      <div class="text-center card-container">
          <Icon size="50" color="#397FF6">
            <Tv />
          </Icon>
       <p class="icon-title">
         Television
       </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <Bed />
        </Icon>
        <p class="icon-title">
          Bed
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <AmpStoriesFilled />
        </Icon>
        <p class="icon-title">
          Air Condition
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <Fan />
        </Icon>
        <p class="icon-title">
          Fan
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <TheatersOutlined />
        </Icon>
        <p class="icon-title">
          Heater
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <WashOutlined />
        </Icon>
        <p class="icon-title">
          Washing machine
        </p>
      </div>
    </div>
    <div class="flex justify-start items-center mt-[10px]">
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <KitchenSharp />
        </Icon>
        <p class="icon-title">
          Kitchenette
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <ViewSidebarSharp />
        </Icon>
        <p class="icon-title">
          Bar
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <AcquisitionsIncorporated />
        </Icon>
        <p class="icon-title">
          Gas Stove
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <ChargingStation />
        </Icon>
        <p class="icon-title">
          Electric Stove
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <DumpsterFire />
        </Icon>
        <p class="icon-title">
          Microwave
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <AllInboxTwotone />
        </Icon>
        <p class="icon-title">
          Toaster
        </p>
      </div>
    </div>

    <div class="flex justify-start items-center mt-[10px]">
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <AcUnitOutlined />
        </Icon>
        <p class="icon-title">
          Garden
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <TerrainSharp />
        </Icon>
        <p class="icon-title">
          Terraces
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <BalconySharp />
        </Icon>
        <p class="icon-title">
          Balcony
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <RestaurantOutlined />
        </Icon>
        <p class="icon-title">
          restaurant
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <GarageOutlined />
        </Icon>
        <p class="icon-title">
          Garage
        </p>
      </div>
      <div class="text-center card-container">
        <Icon size="50" color="#397FF6">
          <MenuBookOutlined />
        </Icon>
        <p class="icon-title">
          Study
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>

import {Icon} from "@vicons/utils";
import {Tv} from "@vicons/fa"
import {Bed} from "@vicons/fa"
import {AcquisitionsIncorporated} from "@vicons/fa"
import {DumpsterFire} from "@vicons/fa"
import {ChargingStation} from "@vicons/fa"
import {Fan} from "@vicons/fa"
import {TheatersOutlined} from "@vicons/material"
import {WashOutlined} from "@vicons/material"
import {KitchenSharp} from "@vicons/material"
import {RestaurantOutlined} from "@vicons/material"
import {AcUnitOutlined} from "@vicons/material"
import {AllInboxTwotone} from "@vicons/material"
import {ViewSidebarSharp} from "@vicons/material"
import {TerrainSharp} from "@vicons/material"
import {GarageOutlined} from "@vicons/material"
import {MenuBookOutlined} from "@vicons/material"
import {BalconySharp} from "@vicons/material"
import {AmpStoriesFilled} from "@vicons/material"
</script>

<style scoped>
  .icon-title{
    font: normal normal  15px/23px Poppins;
    color: #4A4A4A;
    opacity: 1;
  }
  .card-container{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    width: 160px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
</style>