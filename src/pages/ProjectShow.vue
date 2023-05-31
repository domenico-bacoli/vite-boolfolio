<script>
import axios from 'axios';
export default {
    name: 'ProjectShow',

    data() {
        return {
            project: {},

            isLoading: true,
            projectFound: false,
            projectSlug: '',
            baseUrl: 'http://127.0.0.1:8000/', 
        }
    },

    mounted() {
        this.projectSlug = this.$route.params.slug;

        this.getProject();
    },

    computed: {
        projectImage() {
            return this.baseUrl + 'storage/' + this.project.thumb;
        }
    },

    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(response => {
                // console.log('project', response);
                this.isLoading = false;

                if(response.data.success) {
                    this.project = response.data.project;
                    this.projectFound = true;

                } else {
                    this.projectFound = false
                }
            });
        }
    }

}
</script>

<template>
    <div v-if="isLoading" class="loading">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container py-5">
        <div v-if="projectFound">
            <div class="project-image">
                <img :src="projectImage" alt="immagine progetto">
            </div>
            <h1>{{project.title}}</h1>
            <h4>{{ project.type ? project.type.name : 'Nessuna' }}</h4>
            <div class="technologies">
                <span v-for="technology in project.technologies" class="badge rounded-pill" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
            </div>
            <p>{{ project.description }}</p>
        </div> 
        <div v-else>
            <div class="alert alert-warning" role="alert">
                Nessun progetto trovato!
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 450px;
    }

    .container{
        display: flex;
        justify-content: center;

        .project-image{
            margin: 40px 0;
            text-align: center;
            
            img{
            width: 400px;
            object-fit: cover;
            border-radius: 20px;
            // overflow: hidden;
            }
        }

        .technologies{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4em; 
            padding: 10px;
        }
    }




</style>