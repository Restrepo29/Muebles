

export const Contacto = () => {
  return (
   
    <main className="content-principal container">
        <h2 className="text-center">Contacto</h2>


        <form   className="form">
            <fieldset>
                <legend>Tus Datos</legend>

                <div className="input">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" id="name" placeholder="Coloca tu nombre" required/>
                </div>

                <div className="input">
                    <label htmlFor="asunto">Asunto: </label>
                    <input type="text" id="asunto" placeholder="Tu Asunto" required/>
                </div>

                <div className="input">
                    <label htmlFor="emial">Correo: </label>
                    <input type="email" id="email" placeholder="Tu Correo" required/>
                </div>

                <div className="input">
                    <label htmlFor="telefono">Telefono: </label>
                    <input type="tel" id="telefono" placeholder="Tu Telefono" required/>
                </div>

                <div className="input">
                    <label htmlFor="mensaje">Telefono: </label>
                    <textarea id="mensaje" cols="30" rows="10" required></textarea>
                </div>

            </fieldset>

<fieldset>
                <legend>Pais</legend>
                <div className="input">
                    <label htmlFor="pais">Pais: </label>
                    <select id="pais" required   >
                        <option value=""  >-- Selecciona el Pais --</option>
                        <option value="CO">Colombia</option>
                        <option value="MX">Mexico</option>
                        <option value="VZ">Venezuela</option>
                        <option value="PE">Peru</option>
                        <option value="AR">Argentina</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <legend>Informacion Extra</legend>
                <div className="input">
                    <label htmlFor="cliente">Cliente</label>
                    <input type="radio" name="tipo" id="cliente" value="cliente"/>
                </div>

                <div className="input">
                    <label htmlFor="proveedor">Proveedor</label>
                    <input type="radio" name="tipo" id="proveedor" value="proveedor"/>
                </div>

                <div className="input">
                    <label className="datalist" htmlFor="categoria">Categoria de Interes</label>
                    <input className="input-datalist" list="categorias" name="categorias" id="categoria"/>
                    <datalist id="categorias">
                        <option value="Cocina"/>
                        <option value="Exterior"/>
                        <option value="Recamaras"/>
                        <option value="Oficina"/>
                        <option value="Television"/>
                    </datalist>
                </div>
            </fieldset>

            <input className="btn btn-contac" type="submit" value="Enviar Formulario"/>
            
           

        </form>

    </main>
   
  )
}
