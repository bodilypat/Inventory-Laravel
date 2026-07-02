Full-Stack-Inventory-Management-System
├── frontend/ (React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                                         
│   │   │   ├── icons/                                 
│   │   │   ├── images/                             
│   │   │   └── styles/  
│   │   │       ├── global.css
│   │   │       ├── variable.css
│   │   │       └── global.css                         
│   │   ├── components/                                     
│   │   │   ├── common/  
│   │   │   │   ├── Narbar.jsx
│   │   │   │   └── Navbar.css     
│   │   │   ├── layout/  
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Sidebar.css   
│   │   │   └── inventory/    
│   │   │  		├── ProductCard/
│   │   │  		├── ProductForm/
│   │   │  		├── CategoryForm/
│   │   │  		├── SupplierForm/
│   │   │       └── CustomerForm/
│   │   │  
│   │   ├── pages/                                       
│   │   │   ├── auth/ 
│   │   │   ├── dashboard/  
│   │   │   ├── products/ 
│   │   │   ├── categories/                                                  
│   │   │   ├── suppliers/
│   │   │   ├── customers/
│   │   │   ├── purchases/
│   │   │   ├── sales/
│   │   │   ├── reports/
│   │   │   ├── inventory/
│   │   │   ├── settings/
│   │   │   └── not-found/
│   │   │
│   │   ├── layouts/                                      
│   │   │   ├── MainLayout.jsx
│   │   │   └── AuthLayout.jsx
│   │   ├── services/                                    
│   │   │   ├── api.js
│   │   │   ├── auth.service.js
│   │   │   ├── product.service.js
│   │   │   ├── category.service.js
│   │   │   ├── supplier.service.js
│   │   │   ├── customer.service.js 
│   │   │   ├── purchase.service.js 
│   │   │   ├── sale.service.js 
│   │   │   ├── inventory.service.js
│   │   │   └── report.service.js
│   │   ├── context/                                         
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── hooks/                                       
│   │   │   ├── useAuth.js
│   │   │   ├── useProducts.js
│   │   │   └── useFetch.js
│   │   │
│   │   ├── routes/                                  
│   │   │   ├── AppRoutes.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── utils/                                       
│   │   │   ├── helpers.js
│   │   │   ├── constants.js
│   │   │   ├── validator.js
│   │   │   └── formatter.js      
│   │   │      
│   │   ├── App.jsx 
│   │   ├── main.jsx                                    
│   │   └── index.css    
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   ├── .gitignore                        
│   └── README.MD               
│                            
├── backend(Laravel)
│   ├── app/                                                             
│   │   ├── Http/                            
│   │   │   ├── Controllers/                              
│   │   │  	│	├── AuthController.php
│   │   │  	│	├── DashboardController.php
│   │   │  	│	├── ProductController.php
│   │   │  	│	├── CategoryController.php
│   │   │  	│	├── SupplierController.php
│   │   │  	│	├── CustomerController.php
│   │   │  	│	├── PurchaseController.php
│   │   │  	│	├── SalesController.php
│   │   │  	│	├── InventoryController.php
│   │   │   │   └── ReportController.php
│   │   │   ├── Middleware/                               
│   │   │  	│	├── Authenticate.php                     
│   │   │  	│	├── RoleMiddleware.php                   
│   │   │   │   └── LogRequests.php                      
│   │   │   ├── Requests/                                      
│   │   │  	│	├── ProductRequest.php
│   │   │  	│	├── CategoryRequest.php
│   │   │  	│	├── SupplierRequest.php
│   │   │  	│	├── CustomerRequest.php
│   │   │  	│	├── PurchaseRequest.php
│   │   │   │   └── SaleRequest.php
│   │   │   └── Resources/     
│   │   │
│   │   ├── Models/                                
│   │   │   ├── User.php
│   │   │   ├── Product.php
│   │   │   ├── Category.php
│   │   │   ├── Supplier.php
│   │   │   ├── Customer.php
│   │   │   ├── Purchase.php
│   │   │   ├── PurchaseItem.php
│   │   │   ├── Sale.php
│   │   │   ├── SaleItem.php
│   │   │   ├── Inventory.php
│   │   │   └── StockTransaction.php
│   │   │
│   │   ├── Services/               
│   │   │   ├── AuthService.php                    		             
│   │   │   ├── ProductService.php                           
│   │   │   ├── PurchaseService.php                  
│   │   │   ├── SaleService.php
│   │   │   ├── InventoryService.php
│   │   │   └── ReportService.php
│   │   │  
│   │   └── providers/                                     
│   │       ├── 
│   │       └── ...    
│   ├── database/                                       
│   │   ├── migrations/                                 
│   │   ├── seeders/                                                                  
│   │   └── factories/               
│   ├── routes/     
│   │   ├── api.php                                     
│   │   └── web.php  
│   │
│   ├── config/ 
│   ├── storage/ 
│   ├── bootstrap/ 
│   ├── resource/ 
│   ├── tests/ 
│   ├── vendors/ 
│   ├── artisan/ 
│   ├── .env
│   └── README.md   
│
├── docs/
│   ├── API.md
│   ├── Database.md
│   ├── End.png
│   ├── useCaseDiagram.png                                                          
│   └── Setup.md   
├── .gitignore 
├── docker-compose.yml
├── LICENSE 
└── README.md
