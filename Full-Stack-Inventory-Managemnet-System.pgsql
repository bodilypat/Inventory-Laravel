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
│   │   ├── models/                                       # Eloquent ORM model (equivalent to Node.js Model )
│   │   │   ├── User.php
│   │   │   ├── Product.php
│   │   │   ├── Category.php
│   │   │   ├── Supplier.php
│   │   │   ├── Sale.php
│   │   │   ├── SaleItem.php
│   │   │   ├── PurchaseItem.php
│   │   │   ├── StockMovement.php
│   │   │   ├── Log.php
│   │   │   └── Setting.php
│   │   │
│   │   ├── Services/                                    # Business logic (equivalent to Node.js service)
│   │   │   ├── AuthService.php                            
│   │   │   ├── UserService.php					             
│   │   │   ├── ProductService.php                           
│   │   │   ├── SaleService.php                  
│   │   │   ├── PurchaseService.php
│   │   │   ├── InventoryService.php
│   │   │   ├── LogService.php
│   │   │   └── SettingService.php  
│   │   └── Helpers/                                     # Shared utilities
│   │       ├── ResponseHelper.php
│   │       ├── HashHelper.php
│   │       ├── TokenHelper.php
│   │       └── LoggerHelper.php                   
│   ├── routes/                                          # Routes (we.php / api.php)
│   │   └── api.php                                      # API routes
│   ├── database/                                       
│   │   ├── migrations/                                  # Table migrations
│   │   ├── seeders/                                     # Seed data
│   │   └── factories/                                   # Model factories for testing
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
│   │   ├── app/                                         # App initialization
│   │   │   ├── store.js  
│   │   │   ├── Provider.jsx
│   │   │   └── App.jsx.
│   │   ├── routes/                                      # Routing system
│   │   │   ├── AppRoutes.jsx    
│   │   │   └── PrivateRoute.jsx
│   │   ├── api/                                         # API configuration
│   │   │   ├── axiosClient.js    
│   │   │   └── endpoint.js
│   │   │
│   │   ├── features/                                    # Feature-based modules
│   │   │   ├── auth/                                                              
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── authApi.js
│   │   │   │   ├── hooks/                                    
│   │   │   │   │   └── useAuth.js
│   │   │   │   ├── pages/        
│   │   │   │   │   ├── Login.jsx  
│   │   │   │   │   └── Register.jsx                        
│   │   │   │   ├── authSlice.js
│   │   │   │   └── authService.js
│   │   │   ├── products/                                                              
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── productApi.js
│   │   │   │   ├── components/                                    
│   │   │   │   │   ├── ProductTable.jsx 
│   │   │   │   │   └── ProductForm.jsx
│   │   │   │   ├── pages/        
│   │   │   │   │   ├── ProductList.jsx
│   │   │   │   │   └── ProductDetials.jsx
│   │   │   │   ├── hooks/                                    
│   │   │   │   │   └── useProduct.js
│   │   │   │   ├── productSlice.js
│   │   │   │   └── productService.js
│   │   │   ├── sales/                                                              
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── saleApi.js
│   │   │   │   ├── components/                                    
│   │   │   │   │   └── SalesTable.jsx
│   │   │   │   ├── pages/        
│   │   │   │   │   ├── SalesPage.jsx
│   │   │   │   │   └── SaleDetails.jsx
│   │   │   │   ├── hooks/                                    
│   │   │   │   │   └── useSales.js
│   │   │   │   ├── saleSlice.js
│   │   │   │   └── salesService.js
│   │   │   ├── purchases/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── purchaseApi.js
│   │   │   │   └── pages/
│   │   │   │       └── PurchasePage.jsx
│   │   │   ├── suppliers/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── supplierApi.js
│   │   │   │   └── pages/
│   │   │   │       └── SupplierPage.jsx
│   │   │   ├── categories/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── categoryApi.js
│   │   │   │   └── pages/
│   │   │   │       └── CategoryPage.jsx
│   │   │   ├── inventory/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── stockApi.js
│   │   │   │   ├── pages/                                    
│   │   │   │   │   └── InventoryPage.jsx
│   │   │   │   └── inventorySlice.js  
│   │   │   └── settings/
│   │   │       ├── api/
│   │   │       │   └── settingsApi.js
│   │   │       └── pages/
│   │   │           └── SettingsPage.jsx
│   │   ├── components/                                  # Global reuable components    
│   │   │   ├── ui/                                                              
│   │   │   │   ├── Button/ 
│   │   │   │   │   ├── Button.jsx      
│   │   │   │   │   ├── Button.css
│   │   │   │   │   └── index.js                     
│   │   │   │   ├── Input/
│   │   │   │   │   ├── Input.jsx      
│   │   │   │   │   ├── Input.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Select/
│   │   │   │   │   ├── Select.jsx      
│   │   │   │   │   ├── Select.css
│   │   │   │   │   └── index.js                                  
│   │   │   │   ├── Checkbox/
│   │   │   │   │   ├── Checkbox.jsx      
│   │   │   │   │   ├── Checkbox.css
│   │   │   │   │   └── index.js                              
│   │   │   │   ├── Table/
│   │   │   │   │   ├── Table.jsx      
│   │   │   │   │   ├── TableHeader.jsx
│   │   │   │   │   ├── TableRow.jsx
│   │   │   │   │   ├── TableCell.jsx
│   │   │   │   │   ├── Table.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Modal/
│   │   │   │   │   ├── Modal.jsx
│   │   │   │   │   ├── ModalHeader.jsx      
│   │   │   │   │   ├── ModalBody.jsx
│   │   │   │   │   ├── ModalFooter.jsx
│   │   │   │   │   ├── Modal.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Card/
│   │   │   │   │   ├── Card.jsx      
│   │   │   │   │   ├── CardHeader.jsx
│   │   │   │   │   ├── CardBody.jsx
│   │   │   │   │   ├── CardFoodter.jsx
│   │   │   │   │   ├── Card.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Badge/
│   │   │   │   │   ├── Badge.jsx      
│   │   │   │   │   ├── Badge.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Spinner/
│   │   │   │   │   ├── Spinner.jsx      
│   │   │   │   │   ├── Spinner.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Loader/
│   │   │   │   │   ├── Loader.jsx      
│   │   │   │   │   ├── Loader.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Pagination/
│   │   │   │   │   ├── Pagination.jsx 
│   │   │   │   │   ├── Pagination.css     
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js                           
│   │   │   ├── layout/ 
│   │   │   │   ├── Navbar/
│   │   │   │   │   ├── Navbar.jsx 
│   │   │   │   │   ├── Navbar.css     
│   │   │   │   │   └── index.js
│   │   │   │   ├── Sidebar/
│   │   │   │   │   ├── Sidebar.jsx 
│   │   │   │   │   ├── Sidebar.css     
│   │   │   │   │   └── index.js
│   │   │   │   ├── PageHeader/
│   │   │   │   │   ├── PageHeader.jsx 
│   │   │   │   │   ├── PageHeader.css     
│   │   │   │   │   └── index.js
│   │   │   │   ├── Breadcrumb/
│   │   │   │   │   ├── Breadcrumb.jsx 
│   │   │   │   │   ├── Breadcrumb.css     
│   │   │   │   │   └── index.js
│   │   │   │   ├── DashboardLayout/
│   │   │   │   │   ├── DashboardLayout.jsx 
│   │   │   │   │   ├── DashboardLayout.css     
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   └── charts/
│   │   │       ├── SaleChart.jsx
│   │   │       └── InventoryChart.jsx
│   │   │      
│   │   ├── hooks/                                       # Global shared hooks
│   │   │   ├── useDebounce.js
│   │   │   └── usePagination.js
│   │   ├── utils/                                       # Utility function
│   │   │   ├── formatCurrency.js
│   │   │   ├── formatDate.js
│   │   │   ├── validation.js
│   │   │   └── constants.js                       
│   │   └── main.jsx
│   └── public/                  
├── .env                                      
├── package.json
├── docker-compose.yml
└── README.md                                  