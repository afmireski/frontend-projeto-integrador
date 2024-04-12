import React,{ useState } from 'react';
import styles from '../styles/Home.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div>
            <Navbar />
            <div className="p-4 m-5 min-h-[100vh] px-4 m-5">
                <Slider {...settings}>
                    <div>
                        <Card title="Título do Card 1" description="Descrição do card 1. Aqui você pode colocar mais informações sobre o conteúdo." />
                    </div>
                    <div>
                        <Card title="Título do Card 2" description="Descrição do card 2. Mais informações sobre o conteúdo." />
                    </div>
                    <div>
                        <Card title="Título do Card 3" description="Descrição do card 3. Mais informações sobre o conteúdo." />
                    </div>
                    <div>
                        <Card title="Título do Card 1" description="Descrição do card 1. Aqui você pode colocar mais informações sobre o conteúdo." />
                    </div>
                    <div>
                        <Card title="Título do Card 2" description="Descrição do card 2. Mais informações sobre o conteúdo." />
                    </div>
                    <div>
                        <Card title="Título do Card 3" description="Descrição do card 3. Mais informações sobre o conteúdo." />
                    </div>
                    {/* Adicione mais cards aqui, se necessário */}
                </Slider>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
