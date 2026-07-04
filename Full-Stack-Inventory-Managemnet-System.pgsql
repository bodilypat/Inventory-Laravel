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
│   │   │   ├── fonts/
│   │   │   └── styles/  
│   │   │       ├── global.css
│   │   │       ├── variable.css
│   │   │       └── global.css                         
│   │   ├── components/                                     
│   │   │   ├── common/  
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx 
│   │   │   │   ├── Select.jsx 
│   │   │   │   ├── Textarea.jsx 
│   │   │   │   ├── Checkbox.jsx
│   │   │   │   ├── Radio.jsx
│   │   │   │   ├── ButtonGroup.jsx 
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Modal.jsx 
│   │   │   │   ├── Table.jsx 
│   │   │   │   ├── Badge.jsx 
│   │   │   │   ├── Alert.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Spinner.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── Pagination.jsx 
│   │   │   │   ├── Breadcrumb.jsx 
│   │   │   │   ├── Avatar.jsx
│   │   │   │   ├── EmptyState.jsx
│   │   │   │   ├── ConfirmDialog.jsx
│   │   │   │   ├── Common.css
│   │   │   │   └── index.js     
│   │   │   ├── layout/  
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Layout.css
│   │   │   └── inventory/    
│   │   │  		├── ProductCard.jsx
│   │   │  		├── ProductForm.jsx
│   │   │  		├── ProductTable.jsx 
│   │   │  		├── CategoryForm.jsx
│   │   │  		├── SupplierForm.jsx
│   │   │  		├── CustomerForm.jsx
│   │   │  		├── PurchaseForm.jsx 
│   │   │  		├── PurchaseTable.jsx 
│   │   │  		├── SaleForm.jsx
│   │   │  		├── SaleTable.jsx
│   │   │  		├── InventoryTable.jsx 
│   │   │  		├── StockBadge.jsx
│   │   │  		├── StockStatus.jsx
│   │   │  		├── StockMovementTable.jsx
│   │   │  		├── DashboardCards.jsx 
│   │   │  		├── LowStockAlert.jsx 
│   │   │  		├── SummaryCards.jsx
│   │   │  		├── Filters.jsx
│   │   │  		├── Inventory.css
│   │   │       └── Index.js
│   │   │  
│   │   ├── pages/                                       
│   │   │   ├── auth/ 
│   │   │  	│	├── Login.jsx
│   │   │  	│	├── ForgotPassword.jsx
│   │   │  	│	├── ResetPassword.jsx
│   │   │  	│	├── Auth.css
│   │   │   │   └── index.js
│   │   │   ├── dashboard/  
│   │   │   │   ├── Dashboard.jsx
│   │   │  	│	├── dashboard.css
│   │   │   │   └── index.js
│   │   │   ├── products/ 
│   │   │   │   ├── ProductList.jsx
│   │   │  	│	├── ProductCreate.jsx 
│   │   │  	│	├── ProductEdit.jsx
│   │   │  	│	├── ProductDetails.jsx
│   │   │  	│	├── products.css
│   │   │   │   └── index.js
│   │   │   ├── categories/   
│   │   │   │   ├── CategoryList.jsx
│   │   │  	│	├── CategoryCreate.jsx
│   │   │  	│	├── CategoryEdit.jsx
│   │   │  	│	├── categories.css
│   │   │   │   └── index.css                                             
│   │   │   ├── suppliers/
│   │   │   │   ├── SupplierList.jsx
│   │   │  	│	├── SupplierCreate.jsx 
│   │   │  	│	├── SupplierEdit.jsx 
│   │   │  	│	├── supplier.css
│   │   │   │   └── index.js
│   │   │   ├── customers/
│   │   │   │   ├── CustomerList.jsx 
│   │   │  	│	├── CustomerCreate.jsx 
│   │   │  	│	├── CustomerEdit.jsx
│   │   │  	│	├── customers.css
│   │   │   │   └── index.js
│   │   │   ├── purchases/
│   │   │   │   ├── PurchaseList.jsx
│   │   │  	│	├── PurchaseCreate.jsx 
│   │   │  	│	├── PurchaseEdit.jsx 
│   │   │  	│	├── purchase.css
│   │   │   │   └── index.js
│   │   │   ├── sales/
│   │   │   │   ├── SaleList.jsx 
│   │   │  	│	├── SaleCreate.jsx 
│   │   │  	│	├── SaleDetails.jsx
│   │   │  	│	├── sales.css
│   │   │   │   └── index.js
│   │   │   ├── inventory/
│   │   │   │   ├── Inventory.jsx
│   │   │   │   ├── StockMovement.jsx
│   │   │   │   ├── LowStock.jsx 
│   │   │   │   ├── inventory.css
│   │   │   │   └── index.js
│   │   │   ├── reports/
│   │   │   │   ├── Reports.jsx
│   │   │   │   ├── SalesReport.jsx 
│   │   │   │   ├── InventoryReport.jsx
│   │   │   │   ├── reports.css
│   │   │   │   └── index.js
│   │   │   ├── settings/
│   │   │   │   ├── Settings.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── ChangePassword.jsx 
│   │   │   │   ├── settings.css
│   │   │   │   └── index.js
│   │   │   └── not-found/
│   │   │  		├── Not-found.jsx
│   │   │  		├── not-found.css
│   │   │       └── index.js
│   │   │
│   │   ├── hooks/                                       
│   │   │   ├── useAuth.js                               # Login logout, current user, authentication state
│   │   │   ├── useFetch.js                              # Generic API request handing (loading, error, data)
│   │   │   ├── useProducts.js                           # CRUD operations for products
│   │   │   ├── useCategories.js                         # Category management
│   │   │   ├── useSuppliers.js                          # Supplier management
│   │   │   ├── useCustomers.js                          # Customer Management 
│   │   │   ├── usePurchases.js                          # Purchase record and createion
│   │   │   ├── useSales.js                              # Sale record and creation 
│   │   │   ├── useInventory.js                          # Inventory and Stock Movement
│   │   │   ├── useReports.js                            # Report generation and summaries
│   │   │   ├── useDashboard.js                          # Dashboard statistics and summaries
│   │   │   ├── usePagination.js                         # Pagination Logic reusable across tables
│   │   │   ├── useDebounce.js                           # Debounce values for search inputs
│   │   │   ├── useLocalStorage.js                       # Persist datain local state
│   │   │   ├── useModal.js                              # Open/Close State for dialogs and Modal
│   │   │   ├── useTheme,js                              # Theme switching (light/dark)
│   │   │   └── index.js
│   │   │
│   │   ├── services/                                    
│   │   │   ├── api.js                                   # Configure Axios (base URL, interceptors, auth token, error banding)
│   │   │   ├── auth.service.js                          # Login, logout, register, refresh, token current user 
│   │   │   ├── dashboard.service.js                     # Dashboard statistic, summary cards, charts 
│   │   │   ├── product.service.js                       # Product CRUD operations
│   │   │   ├── category.service.js                      # Category CRUD operations
│   │   │   ├── supplier.service.js                      # Supplier CRUD operations 
│   │   │   ├── customer.service.js                      # Customer CRUD operations
│   │   │   ├── purchase.service.js                      # Purchase CRUD and purchse items
│   │   │   ├── sale.service.js                          # Sales CRUD and sale items 
│   │   │   ├── inventory.service.js                     # Stock, updates, inventory, profit reports 
│   │   │   ├── report.service.js                        # Sales purchase, inventory. profit reports
│   │   │   └── upload.service.js                        # Image/file upload of product image are supported
│   │   │
│   │   ├── routes/                                  
│   │   │   ├── AppRoutes.jsx                            # Defines all application route 
│   │   │   ├── PrivateRoute.jsx                         # Products authent routes 
│   │   │   ├── PublicRoute.jsx                          # Prevents authenticated users from accessing pages like login 
│   │   │   ├── RoleRoute.js                             # Restricts routes based on user roles (Admin, Manager, Staff)
│   │   │   ├── routePaths.jsx                           # Stores all paths as constants
│   │   │   └── index.js                                 # Re-exports route modules clearner imports
│   │   │
│   │   ├── utils/                                       
│   │   │   ├── helpers.js                               # General reusable utility functions
│   │   │   ├── constants.js                             # Application wide constants
│   │   │   ├── validator.js                             # Custom validation function 
│   │   │   ├── formatter.js                             # Formatting text, numbers, IDs 
│   │   │   ├── date.js                                  # Date and time formatting utilities
│   │   │   ├── currency.js                              # Currency calculations and formatting 
│   │   │   ├── storage.js                               # LocalStorage and SessionStorage helpers 
│   │   │   ├── permission.js                            # Role and permission helper functions
│   │   │   └── index.js                                 # Re-export utitity function
│   │   │     
│   │   ├── constants/                                         
│   │   │   ├── api.js                                   # API endpoint timeout values
│   │   │   ├── app.js                                   # Application name, version, page size 
│   │   │   ├── auth.js                                  # Authentication-related constants 
│   │   │   ├── routes.js                                # Route paths 
│   │   │   ├── roles.js                                 # User roles and permissions 
│   │   │   ├── inventory.js                             # Stock limits, movement types 
│   │   │   ├── messages.js                              # Success and error messages 
│   │   │   ├── status.js                                # Order, inventory, and user status values 
│   │   │   ├── validation.js                            # Validation rules and limits 
│   │   │   └── index.js                   
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
