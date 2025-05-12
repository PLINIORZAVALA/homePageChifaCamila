## Execute proyect
python3 -m http.server 8000

## Structure project initial
/chifa-camila/
├── assets/
│   ├── css/
│   │   ├── core/
│   │   │   ├── reset.css
│   │   │   ├── variables.css    # Variables CSS y colores
│   │   │   └── typography.css
│   │   ├── components/
│   │   │   ├── buttons.css
│   │   │   ├── cards.css        # Tarjetas de productos
│   │   │   └── modal.css        # Para carrito/login
│   │   ├── layouts/
│   │   │   ├── header.css
│   │   │   ├── footer.css
│   │   │   └── grid.css
│   │   ├── pages/
│   │   │   ├── home.css
│   │   │   ├── menu.css
│   │   │   └── checkout.css
│   │   └── main.css             # Estilos globales
│   ├── js/
│   │   ├── lib/                 # Librerías externas
│   │   │   ├── axios.min.js     # Para llamadas API
│   │   │   └── swiper-bundle.min.js # Carruseles
│   │   ├── modules/
│   │   │   ├── cart.js          # Manejo del carrito
│   │   │   ├── delivery.js      # Lógica de delivery
│   │   │   ├── payments.js      # Integración pagos
│   │   │   └── auth.js          # Autenticación
│   │   └── main.js              # Inicialización
│   └── img/
│       ├── products/            # Imágenes de platos
│       ├── payments/            # Logos de métodos de pago
│       └── delivery/            # Imágenes relacionadas a delivery
├── includes/
│   ├── header.php
│   ├── footer.php
│   ├── db_connect.php           # Conexión a base de datos
│   ├── config.php               # Configuraciones globales
│   └── auth_functions.php       # Funciones de autenticación
├── src/
│   ├── classes/                 # Clases PHP
│   │   ├── Cart.php
│   │   ├── Product.php
│   │   └── Order.php
│   ├── api/                     # Endpoints API
│   │   ├── cart/
│   │   │   ├── add_item.php
│   │   │   └── update_item.php
│   │   └── delivery/
│   │       ├── check_zone.php
│   │       └── calculate.php
│   └── payment/                 # Integración de pagos
│       ├── mercadopago/
│       └── paypal/
├── public/                      # Archivos accesibles públicamente
│   ├── index.php                # Home
│   ├── menu.php                 # Catálogo de productos
│   ├── cart.php                 # Carrito de compras
│   ├── checkout.php             # Proceso de pago
│   ├── account/                 # Área de cliente
│   │   ├── login.php
│   │   ├── register.php
│   │   └── orders.php
│   └── delivery.php             # Seguimiento de pedidos
├── admin/                       # Panel de administración
│   ├── dashboard.php
│   ├── products/                # Gestión de productos
│   │   ├── list.php
│   │   └── edit.php
│   ├── orders/                  # Gestión de pedidos
│   │   ├── list.php
│   │   └── detail.php
│   └── reports/                 # Reportes
│       ├── sales.php
│       └── delivery.php
└── vendor/                      # Dependencias (composer)
