<script>
import {store} from '../store.js';

import axios from 'axios';

import { defineComponent } from 'vue'

import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
  name: 'Breakpoints',

  data: () => ({
    settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        baseUrl:'http://127.0.0.1:8000/storage/',
        store,
    }),

  components:{
    Carousel,
    Slide,
    Navigation,
  },  

})
</script>

<template>
  
 <div class="my-container">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="project in store.projects" :key="project">
        <div class="carousel__item">
            <div class="project-card">
                <div class="project-thumb">
                    <img :src="this.baseUrl + project.thumb" alt="project image">
                </div>
            </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation>
          <template #next>
              <i class="fa-solid fa-chevron-right"></i>
          </template>
          <template #prev>
              <i class="fa-solid fa-chevron-left"></i>
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div> 

</template>

<style lang="scss">
  
@import "../scss/variables";

.my-container{
    display: flex;
    justify-content: center;
    max-width: 1000px;
    

        .project-card{
            padding: 0 12px;

            .project-thumb{
                width: 100%;
                height: 200px;
                border-radius: 24px;
                overflow: hidden;
                cursor: pointer;        
            
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 24px;
                }
            }
        }

.fa-solid.fa-chevron-right {
        font-size: 50px;
        color: $text-color;
        padding-left: 100px;
        transition: all 0.4s ease-in-out;
    }

    .fa-solid.fa-chevron-left {
        font-size: 50px;
        color: $text-color;
        padding-right: 100px;
        transition: all 0.4s ease-in-out;
    }

    .fa-solid.fa-chevron-right:hover,
    .fa-solid.fa-chevron-left:hover {
        transform: scale(1.15);
    }

    .carousel__track{
        margin: 0;
    }

}


</style>