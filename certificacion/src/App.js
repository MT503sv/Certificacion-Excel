import React, { useState } from "react";

const normalizar = (texto) => {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

const dataOriginal = {

  "Brayan Ernesto Rivas Peña": "Brayan, estás a punto de enfrentar un gran reto que refleja todo tu esfuerzo. Recuerda cada práctica y cada avance que lograste. Mantén la calma, piensa con claridad y demuestra todo lo que has aprendido.",
  "Keiry Alexandra Quijada Pérez": "Keiry, este momento es una oportunidad para demostrar tu crecimiento. Has trabajado mucho para llegar aquí, así que avanza con seguridad y muestra todo tu potencial.",
  "Natalia Melissa Monterroza Castillo": "Natalia, este desafío es una muestra de todo lo que has construido. Respira profundo, mantén la concentración y deja que tu preparación hable por sí sola.",
  "Josué David Hernández Alvarado": "Josué, este es tu momento para poner en práctica todo lo aprendido. Mantén la mente clara y demuestra tu capacidad con tranquilidad.",
  "Javier Edgardo González Díaz": "Javier, cada esfuerzo que hiciste te ha llevado hasta aquí. Avanza con determinación y demuestra que estás listo para este reto.",
  "Marilyn Janella Mendez Avalos": "Marilyn, has recorrido un camino lleno de aprendizaje. Hoy es el momento de destacar y demostrar todo lo que has logrado.  Y la verdad una cosa que nunca te he dicho te quiero mucho ❤️",
  "Ashly Lissette Guerra Arévalo": "Ashly, todo tu esfuerzo se refleja en este momento. Mantén la calma y deja que tu conocimiento fluya naturalmente.",
  "Débora Alexandra Sánchez Rivera": "Débora, cada práctica fue un paso hacia este día. Ahora es momento de demostrar todo lo que eres capaz de hacer.",
  "Aldo Enrique Barriere García": "Aldo, este reto es una oportunidad para mostrar tu preparación. Avanza con seguridad y claridad.",
  "Leonardo Fabricio López Franco": "Leonardo, estás preparado para este desafío. Da lo mejor de ti y demuestra tu nivel.",
  "Carlos Ezequiel Tovar Jovel": "Carlos, todo lo que has aprendido tiene valor. Este es el momento de ponerlo en práctica con determinación.",
  "Irvin Pineda": "Este bueno es el ultimo mensaje que le doy la verdad es que gracias por todo su apoyo que nos dio a todos y lo aprecio mucho que me haiga motivado a seguir este camino de la programación gracias a usted es que le di dirección a mi vida sobre lo que yo queria ser, cuando no tenia ninguna idea o estaba perdido si encontrar una salida sus palabras fueron un faro en este camino y le agradezco todo y como dice no es un adiós si no un hasta pronto y espero en un futuro logremos volver a recibir clases o tener un día para que todos charlemos",
  "Madelinne Beatriz Pineda Pimentel": "Madelinne, has trabajado para llegar hasta aquí. Mantén la concentración y demuestra todo lo que sabes.",
  "Briseyda Marisela Zarpate Aguilar": "Briseyda, cada esfuerzo te ha acercado a este momento. Ahora es tiempo de demostrarlo.",
  "Stephanie Michelle Figueroa Henriquez": "Stephanie, este es tu momento para destacar. Todo lo que aprendiste te respalda.",
  "Adriana Valeria Guerrero Rivas": "Adriana, este reto es una oportunidad para mostrar todo tu potencial. Avanza con seguridad.",
  "Ingrid Tatiana Marin Mejia": "Ingrid, estás lista para este desafío. Mantén la calma y demuestra tu preparación.",
  "Jennifer Stefany Martínez Belloso": "Jennifer, tu esfuerzo te ha traído hasta aquí. Es momento de demostrar todo lo que sabes.",
  "Danilo Antonio Granados Marenco": "Danilo, mantén la tranquilidad y enfócate. Todo lo que necesitas ya lo tienes.",
  "Rocío de los Ángeles Reyes Marroquín": "Rocío, este momento refleja tu preparación. Da lo mejor de ti y avanza con seguridad.",
  "Daniela Patricia López Guardado": "Daniela, este es tu momento de demostrar tu aprendizaje. Mantén la calma y sigue adelante.",
  "Elias Josue De Jesus Ortega": "Elías, todo tu esfuerzo se verá reflejado ahora. Demuestra tu capacidad con claridad.",
  "Keyli Tatiana Ramírez Hernández": "Keyli, este reto es una oportunidad para destacar. Da lo mejor de ti.",
  "Johanna Alejandra Rosales Cornejo": "Johanna, cada paso que diste te preparó para esto. Es momento de demostrarlo.",
  "Elmer Mauricio Guevara Moreno": "Elmer, este es el momento de mostrar tu preparación. Avanza con determinación.",
  "Alan Ismael Méndez Hernández": "Alan, todo tu esfuerzo te ha llevado hasta aquí. Demuestra lo que sabes.",
  "Fátima Gabriela Hernández González": "Fátima, estás lista para este reto. Mantén la calma y demuestra tu nivel.",
  "Christopher Wilfredo Flamenco Rivera": "Christopher, este es tu momento para destacar. Demuestra todo lo aprendido.",
  "José Mateo Orellana Arriaza": "José, todo lo que has aprendido te respalda. Es momento de aplicarlo.",
  "Cristofher Gerar Hernandez Guzman": "Cristofher, mantén la calma y enfócate. Este es tu momento.",
  "Yoselin Guadalupe Rodríguez Salinas": "Yoselin, todo tu esfuerzo te ha preparado para este momento. Demuestra tu capacidad con seguridad."
};

const data = Object.fromEntries(
  Object.entries(dataOriginal).map(([nombre, frase]) => [
    normalizar(nombre),
    frase
  ])
);

export default function App() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [vista, setVista] = useState("inicio");

  const buscar = () => {
    const nombreNormalizado = normalizar(nombre);
    const entrada = Object.entries(data).find(([key]) =>
      key.includes(nombreNormalizado)
    );

    if (entrada) {
      setMensaje(entrada[1]);
      setVista("resultado");
    } else {
      alert("Nombre no encontrado");
    }
  };


  if (vista === "motivo") {
    return (
      <div style={styles.resultadoFondo}>
        <div style={styles.resultadoCard}>
          <h1 style={styles.nombreGrande}>Motivo de creación</h1>
          <p style={styles.mensajeGrande}>
            {mensajeExtra ? mensajeExtra : "Ya hace mucho que no hago esto ya no estoy para estos proyectos jaja, pero bueno aquí estoy. La verdad llevo algo de tiempo creando esto solo para dar un mensaje de apoyo para cada uno solo por eso volvi a programar para dar una sorpresa, este iba a ser el ultimo proyecto para Teacher Irvin pero no lo logre pero tuve otro enfoque ahora no es solo para el es para todos y espero lo disfruten. -Si en algun momento ya no estoy en la beca quiero hacer saber que han sido los mejores compañeros que he tenido y los aprecio mucho."}
          </p>

          <button onClick={() => setVista("inicio")} style={styles.botonVolver}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  if (vista === "inicio") {
    return (
      <div style={styles.fondo}>
        <div style={styles.card}>
          <h1 style={styles.titulo}>🎓 Certificación Excel</h1>
          <p style={styles.subtitulo}>
            Escribe tu nombre para recibir tu mensaje especial
          </p>


          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={styles.input}
          />

          <button onClick={buscar} style={styles.boton}>
            Ver mi mensaje
          </button>

          <button onClick={() => setVista("motivo")} style={styles.botonSecundario}>
            Motivo de creación
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.resultadoFondo}>
      <div style={styles.resultadoCard}>
        <h1 style={styles.nombreGrande}>{nombre}</h1>

        {mensajeExtra && (
          <p style={styles.extra}>{mensajeExtra}</p>
        )}

        <p style={styles.mensajeGrande}>{mensaje}</p>

        <button onClick={() => setVista("inicio")} style={styles.botonVolver}>
          Volver
        </button>
      </div>
    </div>
  );
}

const styles = {
  fondo: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #14532d, #22c55e, #4ade80)",
    fontFamily: "Arial"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  },
  titulo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#166534",
    marginBottom: "10px"
  },
  subtitulo: {
    color: "#555",
    marginBottom: "15px"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    minHeight: "60px"
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "15px"
  },
  boton: {
    width: "100%",
    padding: "12px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "10px"
  },
  botonSecundario: {
    width: "100%",
    padding: "10px",
    background: "#e5e7eb",
    color: "#166534",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  },

  resultadoFondo: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #052e16, #166534)"
  },
  resultadoCard: {
    textAlign: "center",
    color: "white",
    padding: "40px",
    maxWidth: "700px"
  },
  nombreGrande: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  extra: {
    fontSize: "20px",
    marginBottom: "20px"
  },
  mensajeGrande: {
    fontSize: "26px",
    lineHeight: "1.6",
    marginBottom: "30px"
  },
  botonVolver: {
    padding: "10px 20px",
    background: "white",
    color: "#166534",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
