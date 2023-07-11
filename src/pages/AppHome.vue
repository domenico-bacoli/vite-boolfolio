<script>
import {store} from '../store.js';
import axios from 'axios';
import CarouselProjects from '../components/CarouselProjects.vue';

export default {
    name: 'appHome',
    data() {
        return {
            store,
        }; 
    },

    components: {
        CarouselProjects,
    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects').then(response => {
            this.store.projects = response.data.results;
            });
        },    
    },

}
</script>

<template>
<div class="container">
    <div class="card-container">
        <div class="about-me-card">
            <div class="left-side">
                <div class="my-name card">
                    <div class="name">
                        <h1>I'm Domenico Bacoli</h1>
                    </div>
                    <div class="grade">
                        <h5>Jr Full Stack Web Developer</h5>
                    </div>
                    <div class="contact-me-button">
                        <button class="contact-me">Contact Me</button>
                    </div>  
                </div>
            </div>
            <div class="social-icon card">
                
                    <div class="about-me icon-card">
                        <router-link :to="{ name: 'about' }" class="about-me icon-card">
                            <div class="image">
                                <img src="/img/domenico.JPG" alt="about me image">
                            </div>
                        </router-link>
                        <span class="icon-detail">About me</span>
                    </div>

                <div class="instagram-card icon-card">
                    <div class="image">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <span class="icon-detail">Instagram</span>
                </div>
                <div class="linkedin-card icon-card">
                    <div class="image">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <span class="icon-detail">Linkedin</span>
                </div>
                <div class="github-card icon-card">
                    <div class="image">
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <span class="icon-detail">Github</span>
                </div>
            </div>
        </div>
        <div class="projects-section">
            <div class="recent-projects">
                <div class="projects-information">
                    <h2>Projects Previews</h2>
                    <router-link :to="{ name: 'projects.index' }"><button>View All</button></router-link>
                </div>
                <CarouselProjects></CarouselProjects>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.card{
    border-radius: 20px;
    border: none;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .card-container{
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 80px;
        margin-bottom: 30px;

        .about-me-card{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 30px;
            

            .left-side{
                display: flex;
                width: 100%;
                height: 260px;
                
                .my-name{ 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-grow: 1;
                    background-color: #f7f9fb;
                    background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);

                    .name{

                        h1{
                            padding-top: 30px;
                            font-size: 3em;
                        } 
                    }

                    .grade{
                        padding: 14px 0;
                    }

                    .contact-me-button{

                        button{
                            border: none;
                            border-radius: 20px;
                            font-weight: 600;
                            padding: 8px 24px;
                        }
                    }
                }
            }


            .social-icon{
                display: flex;
                flex-flow: row wrap;
                align-content: center;
                row-gap: 12px;
                column-gap: 12px;
                font-size: 2em;
                width: 35%;
                height: 260px;
                padding: 24px 40px;
                background-color: #f7f9fb;
                background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);


                .icon-card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: calc(100% / 2 - (12px / 2));
                    height: calc(100% / 2 - (12px / 2));
                    border-radius: 16px;
                    cursor: pointer;

                    .fa-instagram{
                        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .fa-linkedin-in{
                        color: #0e76a8;
                    }

                    .fa-github{
                        color: #171515;
                    }

                    .icon-detail{
                        font-size: 0.4em;
                        font-weight: 600;
                        color: $text-color;
                        padding-top: 2px;
                    }

                    .fa-instagram, .fa-linkedin-in, .fa-github{
                        transition: all 0.3s ease;

                        &:hover{
                            transform: scale(1.2);
                        }
                    }
                }

                .about-me{
                    background-color: #50fe0040;
                    box-shadow: 2px 2px 10px #25e40320;
                    img{
                        width: 38px;
                        border-radius: 50%;
                        object-fit: cover;
                        transition: 0.3s ease;

                        &:hover{
                            transform: scale(1.2);
                        }
                    }
                }

                .instagram-card{
                    background: radial-gradient(circle at 30% 107%, #fdf49730 0%, #fdf49730 5%, #fd594930 45%, #d6249f30 60%, #285AEB30 90%);
                    box-shadow: 2px 2px 10px radial-gradient(circle at 30% 107%, #fdf49730 0%, #fdf49730 5%, #fd594930 45%, #d6249f30 60%, #285AEB30 90%);;
                }

                .linkedin-card{
                    background-color: #0e76a820;
                    box-shadow: 4px 4px 10px #0e76a810;
                }

                .github-card{
                    background-color: #17151510;
                    box-shadow: 2px 2px 10px #17151510;
                }

            }

        }   
    }

    .projects-section{

        .recent-projects{
            padding: 30px 100px;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            background-color: #f7f9fb;
            background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);



            .projects-information{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.4em;

                button{
                    border: none;
                    border-radius: 20px;
                    padding: 4px 20px;
                    font-weight: 600;
                }
            }
        }
    }
}

a{
    text-decoration: none;
}

@media screen and ((min-width: 300px) and (max-width: 768px)) {
    .container{
        overflow: auto;

    }
}

@media screen and (max-width: 1200px) {
    .container{
        .card-container{
            .about-me-card{
                display: flex;
                flex-direction: row;

                .social-icon{
                    padding: 26px 20px;
                }
            }   
        }
    }
}
</style>