import { useState } from "react"
import emailjs from "emailjs-com";


const ContactForm = () => {
  const [nombre, setNombre] = useState ("");
  const [email, setEmail] = useState ("");
  const [mensaje, setMensaje] = useState ("");

  const enviarMensaje = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje
    };

    emailjs.send(
      "service_30ken5s",
      "template_bt3b1ng",
      templateParams,
      "hHh5O7z9aq4CEh434"
    )

    .then ((respuesta) => {
      console.log(respuesta.text);
      alert("mensaje enviado correctamente");
    })
    .catch ((error) => {
      console.log(error);
      alert("El mensaje no pudo ser enviado")
    })
      
  
    
  }

  return (
    <form onSubmit={enviarMensaje} >

      <label htmlFor="">Nombre:</label>
      <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />

      <label htmlFor="">Email:</label>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />

      <label htmlFor="">Mensaje:</label>
      <textarea value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></textarea>

      <button type="submit">Enviar mensaje</button>

    </form>
  )
}

export default ContactForm