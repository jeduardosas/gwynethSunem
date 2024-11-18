const datosComunes = {
  frase:'Hay momentos en la vida que son especiales por si solos, compartirlos con las personas que quieres los convierte en inolvidables.',
  imagenes:{
    imgHeader:'header',
    imgBanner1:'flor1',
    imgBanner2:'flor4',
    imgBanner3:'flor5',
    imgFondo1:'flor2',
    imgFondo2:'flor3'
  },
  fechaDia:'14',
  fechaMes:'Diciembre',
  fechaYear:'2024',
  religiosa:{
    hora:'19',
    minutos:'00',
    lugar:'Iglesía del Señor de Chalma',
    direccion:'Venustiano Carranza',
    direccionCol:'Adolfo López Mateos',
    direccionCd:'Iguala de la Independencia',
    ubicacion:'https://maps.app.goo.gl/pxN2k5d81LpGGiLj9',

  },
  recepcion:{
    hora:'20',
    minutos:'30',
    lugar:'Salon La Noria',
    direccion:'Reforma, 112 A',
    direccionCol:'Centro',
    direccionCd:'Iguala de la Independencia.',
    ubicacion:'https://maps.app.goo.gl/Q9YvkMvyYGoqRtZj6'
  },
  regalos:{
    frase:'El mejor regalo es tu presencia, pero si gustas dar un obsequio y no conoces mis gustos la opción es: La Lluvia de Sobres, que es la tradición de regalar dinero en efectivo a la quinceañera en un sobre, el cual se les proporcionará en la entrada del evento.',
    url:''
  },
  timeLine:{
    settings:{
      bgColor:'var(--color_card)',
      color:'var(--color_text)',
      lineColor:'var(--color_card)'
    },
    protocol:[
      {
        id:1,
        time:'19:00 Hrs', 
        name:'Ceremonia Religiosa',
        icon:'CHURCH',
        color:'var(--color_tex)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:2,
        time:'20:30 Hrs',
        name:'Recepción',
        icon:'recepcion',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:3,
        time:'21:30 Hrs',
        name:'Cena',
        icon:'comida',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:4,
        time:'22:30 Hrs',
        name:'Vals',
        icon:'bailarina',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:5,
        time:'23:00 Hrs',
        name:'Apertura de la pista',
        icon:'musica',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
    ]
  },
  hoteles:[
    {
      nombre:'Hotel Gran Plaza',
      direccion:'Miguel Hidalgo, 7',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7333326990',
      ubicacion:'https://maps.app.goo.gl/GK7ARLS9ESHJT2pa8'
    },
    {
      nombre:'Hotel Reforma #14',
      direccion:'Refroma, 14',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7331517327',
      ubicacion:'https://maps.app.goo.gl/m4UMcsUnELYm3NaH8'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo,6',
      direccion_colonia:'Centro, Iguala de la Independencia, Gro.',
      telefono:'7331101106',
      ubicacion:'https://maps.app.goo.gl/bcRQiHRzWotJcCNe9'
    },

  ]

}

const tipoevento={
  boda:{
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:'',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    }
  },
  
  XV:{
    nombre:'Gwyneth Sunem',
    padres:{
      papa:'Gerardo Marquina Hernández',
      mama:'Gwendolyne Román Díaz'
    },
    padrinos:{
      padrino:'',
      madrina:'Odilia Nathaly Román Díaz'
    },
    confirmacion:'7331252076'
  }
}

 


const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type] }
}

export default getData;