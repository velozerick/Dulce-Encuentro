import qrcode


url_pagina_web = "https://velozerick.github.io/Dulce-Encuentro/"


qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url_pagina_web)
qr.make(fit=True)

imagen_qr = qr.make_image(fill_color="black", back_color="white")

imagen_qr.save("codigo_qr_pagina_web.png")

print("Se ha generado el código QR correctamente.")
