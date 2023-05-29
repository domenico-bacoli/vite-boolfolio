<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            baseUrl:'http://127.0.0.1:8000/',
        }; 
    },

    props: {
        project: Object,
    },

    computed: {
        shortDescription() {
            if(this.project.description.length > 50){
                return this.project.description.substring(0, 50) + '...';
            } else {
                return this.project.description;
            } 
        },

        thumb() {
            if(this.project.thumb == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            } else {
                return this.baseUrl + 'storage/' + this.project.thumb;
            }    
        },

    },
}
</script>

<template>
    <div class="card-project">
        <div class="thumb">
            <img :src="thumb" alt="anteprima progetto">
        </div>
        <div class="card-details">
            <div class="title">{{ project.title}}</div>
            <small class="type">Tipologia: {{ project.type ? project.type.name : 'Nessuna' }}</small>
            <div class="technologies">
                <span v-for="technology in project.technologies" class="badge rounded-pill" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
            </div>
            <div class="description">{{ shortDescription }}</div>
            <div class="button-more">
                <!-- <a href="{{route('admin.projects.show', $project->slug)}}"><button class="btn btn-primary">More</button></a> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-project{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 4 - (16px / 4 * 3));
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: none;
    padding: 20px;
    height: 100%;

    .thumb{ 
        padding-bottom: 14px;
        img{
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .card-details{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;

        .title{
            font-weight: bold;
            text-transform: uppercase;
        }

        .technologies{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 0.4em; 
            width: 100%;
            overflow-x: scroll; 
            padding: 10px;    
        }

        .description{
            font-size: 0.9em;
        }
    }
}
</style>