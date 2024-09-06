// Importamos React y lo hacemos global
import React from 'react'
import { render } from 'react-dom'
window.React = React

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importamos una imagen local y una fuente
import miimagen from './assets/images/como-usar-axios-y-angular.jpg'
import mifuente from './assets/fonts/SUSE-VariableFont_wght.ttf'

// Importamos 'React-pdf' con sus elementos necesarios
import {
  Document,
  Page,
  Text,
  Image,
  Font,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  View,
} from "@react-pdf/renderer";

// Personalizamos la fuente del PDF
Font.register({
  family: 'SUSE',
  src: mifuente
});

// Estilos CSS para nuestro PDF
const estilos = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: 800, 
    height: 400,
    marginBottom: 30,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'SUSE'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'SUSE'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Función para Descargar el PDF
function DescargarPDF() {
  
  return (
    <Document>
        {/* Renderizamos las páginas del PDF */}
        <Page style={estilos.body} size="A4">
          <View>
            {/* Página 1 */}
            <Text style={estilos.title}>Mi Bonito PDF</Text>
            <Text style={estilos.author}>Por Nube Colectiva</Text>
            <Image
              style={estilos.image}
              src={miimagen}
            />            
            <Text style={estilos.subtitle}>
              Introducción
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            {/* Página 2 */}
            {/* Con 'break' colocamos el contenido en la siguiente página del PDF */}
            <Text style={estilos.subtitle} break>
              Contenido
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Image
              style={estilos.image}
              src={miimagen}
            />
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            {/* Página 3 (Final) */}
            {/* Con 'break' colocamos el contenido en la siguiente página del PDF */}
            <Text style={estilos.subtitle} break>
              Final
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Image
              style={estilos.image}
              src={miimagen}
            />
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Text style={estilos.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </View>
        </Page>
      {/* End of the document*/}
      </Document>
  )
}

// Función para el contenido del PDF en el Visor
function DocumentoPDF() {
  
  return (
    <PDFViewer style={estilos.viewer}>
      {/* Iniciamos el documento */}
      <Document>
        {/* Renderizamos las páginas del PDF */}
        <Page style={estilos.body} size="A4">
          <View>
            {/* Página 1 */}
            <Text style={estilos.title}>Mi Bonito PDF</Text>
            <Text style={estilos.author}>Por Nube Colectiva</Text>
            <Image
              style={estilos.image}
              src={miimagen}
            />            
            <Text style={estilos.subtitle}>
              Introducción
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            {/* Página 2 */}
            {/* Con 'break' colocamos el contenido en la siguiente página del PDF */}
            <Text style={estilos.subtitle} break>
              Contenido
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Image
              style={estilos.image}
              src={miimagen}
            />
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            {/* Página 3 (Final) */}
            {/* Con 'break' colocamos el contenido en la siguiente página del PDF */}
            <Text style={estilos.subtitle} break>
              Final
            </Text>
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Image
              style={estilos.image}
              src={miimagen}
            />
            <Text style={estilos.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius varius convallis. Cras vel nibh rhoncus eros consequat varius. Phasellus imperdiet dapibus purus a condimentum. Curabitur vehicula, massa vitae pulvinar laoreet, enim enim facilisis augue, eget fringilla ipsum urna sit amet risus. Maecenas consequat nulla sit amet quam bibendum, sit amet elementum odio hendrerit. Nunc eget congue risus, ut posuere mi. Nullam vehicula tellus elit, at varius dui ultricies eu. Nullam scelerisque in sem a egestas. Aenean convallis mauris eu lacus rutrum lobortis. Vestibulum vulputate efficitur augue, in rhoncus risus bibendum eu. Suspendisse vel mollis urna, placerat tempus magna. Integer ex tellus, vulputate non dictum ac, posuere vel justo.
            </Text>
            <Text style={estilos.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </View>
        </Page>
      {/* End of the document*/}
      </Document>
    </PDFViewer>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <DocumentoPDF />  
      <div>
      <PDFDownloadLink document={<DescargarPDF />} fileName="archivo.pdf">
        {({ loading}) =>
          loading ? 'Cargando documento...' : 'Descargar PDF'
        }
      </PDFDownloadLink>
      </div>
    </>
  )
}

export default App
