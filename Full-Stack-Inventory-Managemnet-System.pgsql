Full-Stack-Inventory-Management-System
├── backend(Laravel)
│   ├── app/                                              # Application code                         
│   │   ├── Http/                            
│   │   │   ├── Controllers/                              # Controllers (equivalent to Node.js controllers )
│   │   │  	│	├── AuthController.php
│   │   │  	│	├── UserController.php
│   │   │  	│	├── ProductController.php
│   │   │  	│	├── CategoryController.php
│   │   │  	│	├── SupplierController.php
│   │   │  	│	├── SalesController.php
│   │   │  	│	├── PurchaseController.php
│   │   │  	│	├── InventoryController.php
│   │   │  	│	├── LogController.php
│   │   │   │   └── SettingsController.php
│   │   │   ├── Middleware/                               # Middlewares
│   │   │  	│	├── Authenticate.php                      # Auth middleware
│   │   │  	│	├── RoleMiddleware.php                    # Role-based access
│   │   │   │   └── LogRequests.php                       # Request logger
│   │   │   └── Requests/                                 # Request validation (equivalent to Node.js validation.js)               
│   │   │   	├── AuthRequest.php
│   │   │  		├── ProductRequest.php
│   │   │  		├── SaleRequest.php
│   │   │       └── PurchaseRequest.php
│   │   │
│   │   ├── Services/                                   
│   │   │   ├── BaseService.php
│   │   │   ├── AuthService.php                            
│   │   │   ├── UserService.php					             
│   │   │   ├── ProductService.php                           
│   │   │   ├── OrderService.php                  
│   │   │   ├── PurchaseOrderService.php
│   │   │   ├── InventoryService.php
│   │   │   ├── LogService.php
│   │   │   └── SettingService.php
│   │   ├── Models/                                       # Eloquent ORM model (equivalent to Node.js Model )
│   │   │   ├── User.php
│   │   │   ├── Product.php
│   │   │   ├── Category.php
│   │   │   ├── Supplier.php
│   │   │   ├── Order.php
│   │   │   ├── OrderItem.php
│   │   │   ├── Purchase.php
│   │   │   ├── PurchaseOrderItem.php
│   │   │   ├── StockMovement.php
│   │   │   ├── StockLog.php
│   │   │   └── Setting.php
│   │   │  
│   │   └── Helpers/                                     # Shared utilities
│   │       ├── ResponseHelper.php
│   │       ├── HashHelper.php
│   │       ├── TokenHelper.php
│   │       └── LoggerHelper.php                   
│   ├── routes/                                          # Routes (we.php / api.php)
│   │   └── api.php                                      # API routes
│   ├── database/                                       
│   │   ├── migrations/                                  # Schema definitions (Laravel migrations)
│   │   ├── seeders/                                     # Initial & test data
│   │   ├── facories/                                    # Model factories (testing)
│   │   └── schema.sql                                   # Optional raw SQL schema
│   └── public/   
│       ├── feature/
│       └── Unit/   
├── .env                                      
├── artisan
├── composer.json
├── docker-compose,yml
├── README.md
│   
├── frontend/ (React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── src/
│   │   ├── app/                                         # App setup & global configuration
│   │   │   ├── store.js                                 # State management (Redux/Zustand)
│   │   │   ├── Provider.jsx                             # Global providers (Redux, Context, Theme)
│   │   │   └── App.jsx.                                 # Root app component
│   │   ├── routes/                                      # Routing system
│   │   │   ├── AppRoutes.jsx                            # Central route definitions
│   │   │   └── PrivateRoute.jsx                         # Protected  routes (auth)
│   │   ├── api/                                         # API layer (Axios/ fetch setup)
│   │   │   ├── axiosClient.js                           # configuration Axios instance
│   │   │   └── endpoint.js                              # API endpoint definitions
│   │   │  
│   │   ├── features/                                    # Feature-based modules     
│   │   │   ├── dashboard/    
│   │   │   │   └── DashboardPage.jsx                                                   
│   │   │   ├── products/
│   │   │   │	├── components/
│   │   │  	│	│   ├── AddProduct.jsx
│   │   │   │   │   └── EditProduct.jsx
│   │   │   │   ├── hooks/
│   │   │   │   ├── services/
│   │   │   │   └── ProductPage.jsx
│   │   │   ├── suppliers/
│   │   │   │	├── components/
│   │   │   │   │   └── SupplierList.jsx
│   │   │   │   ├── hooks/
│   │   │   │   ├── services/
│   │   │   │   └── SupplierPage.jsx
│   │   │   └── transactions/ 
│   │   │   	├── components/
│   │   │       │   └── TransactionHistory.jsx
│   │   │       ├── hooks/
│   │   │       ├── services/
│   │   │       └── TransactionsPage.jsx
│   │   ├── components/                                  # Global reuable  UI components    
│   │   │   ├── Navbar.jsx                                                              
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Loader.jsx
│   │   │     
│   │   ├── hooks/                                       # Global reusable hooks
│   │   │   ├── useDebounce.js
│   │   │   └── usePagination.js 
│   │   ├── services/                                    # Global services(non-feature specific)
│   │   │   ├── authService.js
│   │   │   └── storageService.js
│   │   ├── utils/                                       # Utility function & constants
│   │   │   ├── formatCurrency.js
│   │   │   ├── formatDate.js
│   │   │   ├── validation.js
│   │   │   └── constants.js      
│   │   ├── styles/                                       # Global shared hooks
│   │   │   └── global.css
│   │   ├── index.js                                     # Entry point
│   │   └── main.js                                      # (if using Vite instead of CRA)
│   └── public/                  
├── .env                                      
├── package.json
├── docker-compose.yml
└── README.md                                  