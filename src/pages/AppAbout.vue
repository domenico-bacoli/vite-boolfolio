<script>
export default {
    name: 'appAbout',
    data() {
        return {

        }; 
    },


}
</script>

<template>
<div class="container">
    <h1>About Me</h1>
    <div class="domenico">
        <div class="domenico-image">
            <img src="/img/about-image.png" alt="Domenico Image">
            <!-- <a href="/img/Domenico-Bacoli-cv.pdf" download>Scarica il mio CV</a> -->
        </div>
        <div class="domenico-details">
            <div class="text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et alias animi explicabo placeat necessitatibus deleniti sint, ab aut obcaecati distinctio, tempore vel minima repellat. Obcaecati possimus vitae iure fuga. Id!</p>
            </div>
            <div class="skills">
                <h4>Skills</h4>
                <div class="icon">
                    <div class="icon-card">
                        <i class="fa-brands fa-html5"></i>
                        <span>HTML</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-css3-alt"></i>
                        <span>CSS</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-square-js"></i>
                        <span>JS</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-bootstrap"></i>
                        <span>Bootstrap</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-sass"></i>
                        <span>Sass</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-vuejs"></i>
                        <span>Vue</span>
                    </div>
                    <div class="icon-card">  
                        <i class="devicon-php-plain"></i>
                        <span>Php</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-laravel"></i>
                        <span>Laravel</span>
                    </div>
                    <div class="icon-card">
                        <i class="devicon-mysql-plain"></i>
                        <span>MySql</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    h1{
        padding-bottom: 20px;
        margin-left: 50px;
    }

    .domenico{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        // padding-top: 40px;

            .domenico-image{
            width: 30%;
            height: 450px;
            border-radius: 20px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                    border-radius: 20px;
                }

                a{
                    text-decoration: none;
                }
            }

            .domenico-details{
                width: 55%;
                background-color: #f7f9fb;
                background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
                box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
                border-radius: 20px;
                padding: 40px 60px;

                .text{
                    padding: 20px;
                }

                .icon{
                    display: flex;
                    flex-flow: row wrap;
                    gap: 10px;
                    width: 100%;
                    padding: 10px;

                    .icon-card{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: calc(100% / 6 - (10px / 6 * 5));
                        height: 80px;
                        border-radius: 16px;
                        font-weight: 500;
                        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);

                        i{
                            font-size: 2em;
                        }

                        span{
                            font-size: .7em;
                            font-weight: 600;
                            padding-top: 4px;
                        }
                    }

                    .icon-card:nth-child(1){
                        background-color: #E34F2620;
                        box-shadow: 4px 4px 16px #E34F2610;
                        i{
                            color: #E34F26;
                        }
                    }
                    .icon-card:nth-child(2){
                        background-color: #1572B620;
                        box-shadow: 4px 4px 16px #1572B610;
                        i{
                            color: #1572B6;
                        }
                    }
                    .icon-card:nth-child(3){
                        background-color: #F7DF1E20;
                        box-shadow: 4px 4px 16px #F7DF1E10;
                        i{
                            color: #F7DF1E;
                        }
                    }
                    .icon-card:nth-child(4){
                        background-color: #7532F920;
                        box-shadow: 4px 4px 16px #7532F910;
                        i{
                            color: #7532F9;
                        }
                    }
                    .icon-card:nth-child(5){
                        background-color: #CC669920;
                        box-shadow: 4px 4px 16px #CC669910;
                        i{
                            color: #CC6699;
                        }
                    }
                    .icon-card:nth-child(6){
                        background-color: #4FC08D20;
                        box-shadow: 4px 4px 16px #4FC08D10;
                        i{
                            color: #4FC08D;
                        }
                    }
                    .icon-card:nth-child(7){
                        background-color: #4F5B9320;
                        box-shadow: 4px 4px 16px #4F5B9310;
                        i{
                            color: #4F5B93;
                        }
                    }
                    .icon-card:nth-child(8){
                        background-color: #FF2D2020;
                        box-shadow: 4px 4px 16px #FF2D2010;
                        i{
                            color: #FF2D20;
                        }
                    }
                    .icon-card:nth-child(9){
                        background-color: #4479A120;
                        box-shadow: 4px 4px 16px #4479A110;
                        i{
                            color: #4479A1;
                        }
                    }
                }
            }
    }
}
</style>