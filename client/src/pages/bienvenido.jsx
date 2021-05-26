import React from 'react';
import {
  Typography,
  Row,
  Col,
  Image,
} from 'antd';

import foto_perfil from '../img/perfil.jpg'


const { Title, Paragraph } = Typography;

function Bienvenido(props) {
  return (
    <Row gutter={16}>
      <Col>
        <div className="avatar">
          <Image
            className="avatar"
            width={200}
            src={foto_perfil}
            />
        </div>
      </Col>
      <Col>
        <Title>Bienvenido a mi aplicación web.</Title>
        <Paragraph>
          Soy Karl Heitmann, un artesando del siglo XXI. Esta aplicación web la comencé por necesidad personal. En mayo del 2020 descubrí el webscraping, y fue una técnica
          que me asombró por completo. Encontré increíble que se pudiera ocupar algunas librerías en conjunto con unos lenguajes de programación para poder solicitar
          una página web, y a partir del código HTML extraer la información que necesito.

        </Paragraph>
        <Paragraph>
          Encontré fantástico además que existiera una gran diversidad de herramientas que permitiera facilitar esta tarea. Por lo que me dediqué por completo a estudiar
          el asunto y tomar todos los cursos que estuvieran a mi alcance. Así fue como partí con lo básico en Python, luego utilicé Selenium Web Browser, y finalmente aprendí
          a efectuar técnicas de scraping con un stack en NodeJS
        </Paragraph>
        <Paragraph>
          Fue así como decidí crear este proyecto con este título tan pomposo: MegaScraper. Como estaba buscando una moto en ese entonces, decidí hacer un scraper para extraer
          información de anuncios clasificados de motos en la célebre página "yapo.cl". En Chile es super conocida. Este scraper consulta los últimos anuncios clasificados sobre
          motos en el portal, extrae la información y la presenta en pantalla.
        </Paragraph>
        <Paragraph>
          El scraper que pueden ver acá es el de Workana. El origen de este scraper es "divertido" (por ponerle un adjetivo), y es que cuando comencé a estudiar el web scraping, me dije:
          sería extraordinario que tuviera un scraper revisando el sitio de Workana, y cada vez que saliera un proyecto sobre scraping me enviara un mensaje a mi telegram.
          El asunto es que al final me puse manos a la obra con este proyecto, y lo hice en conjunto con el scraper de motos. El scraper de Workana me busca los nuevos anuncios,
          los guarda en una base de datos, y cada vez que hace el scraping y guarda nuevas noticias, le pasa un filtro a todas las noticias de la base de datos, y los trabajos
          que pasan este filtro se envían a mi cuenta de Telegram.
        </Paragraph>
        <Paragraph>
          El bot que se comunica con mi cuenta de Telegram se llama "megascrapeador", y lo puedes encontrar en telegram buscando el siguiente usuario: "@megascrapeadorbot".
          Búscalo en Telegram e inicia una conversación con él mandándole el mensaje "/start". Las instrucciones puede ser que no estén muy claras, pero es que las escribí para mi, al igual
          que todo este sitio. Por eso que el diseño no es deslumbrante, pero a mi me funciona. Además, sirve para mostrarle a mis clientes un atisbo de las cosas que puedo hacer.
        </Paragraph>
        <Paragraph>
          Más adelante voy a poner una descripción más profunda de cómo ocupar esta aplicación y como configurar el bot, de ser necesario...
        </Paragraph>
      </Col>
    </Row>
  );
};

export default Bienvenido