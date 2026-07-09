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
│   │   │       ├── reset.css
│   │   │       └── typography.css                        
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
│   │   │       └── index.js
│   │   │  
│   │   ├── features/                                       
│   │   │   ├── auth/ 
│   │   │  	│	├── api/                                
│   │   │  	│	│   ├── auth.api.js
│   │   │   │   │   └── token.api.js
│   │   │  	│	├── components/                          # Reusable authentication UI
│   │   │  	│	│   ├── LoginForm.jsx        
│   │   │  	│	│   ├── RegisterForm.jsx             
│   │   │  	│	│   ├── ForgotPasswordForm.jsx
│   │   │  	│	│   ├── ResetPasswordForm.jsx
│   │   │  	│	│   ├── ChangePasswordForm.jsx
│   │   │  	│	│   ├── PasswordInput.jsx 
│   │   │  	│	│   ├── AuthCard.jsx
│   │   │   │   │   └── index.js
│   │   │  	│	├── pages/                               # Route-level pages 
│   │   │  	│	│   ├── Login.jsx
│   │   │  	│	│   ├── Register.jsx
│   │   │  	│	│   ├── ForgotPassword.jsx
│   │   │  	│	│   ├── ResetPassword.jsx
│   │   │  	│	│   ├── VerifyEmail.jsx 
│   │   │  	│	│   ├── Unauthorized.jsx
│   │   │   │   │   └── index.js
│   │   │  	│	├── hooks/                               # Authenticatio logic and custom hooks
│   │   │  	│	│   ├── useAuth.js
│   │   │  	│	│   ├── useRegister.js
│   │   │  	│	│   ├── useLogin.js
│   │   │  	│	│   ├── useLogout.js
│   │   │  	│	│   ├── useCurrentUser.js
│   │   │  	│	│   ├── useRefreshToken.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── services/                            # API calls (login, logout, refresh token, profile)
│   │   │   │   │   └── auth.service.js
│   │   │  	│	├── context/                             # Global authentication state
│   │   │  	│	│   ├── AuthContext.jsx
│   │   │  	│	│   ├── AuthProvider.jsx
│   │   │   │   │   └── index.js
│   │   │  	│	├── utils/                               # Helper functions messages, storage keys
│   │   │  	│	│   ├── authHelpers.js
│   │   │  	│	│   ├── authValidators.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── constants/                           # Roles permissions message storage keys
│   │   │  	│	│   ├── permissions.js
│   │   │  	│	│   ├── authMessages.js
│   │   │  	│	│   ├── storageKeys.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── styles/                              # Authentication-specific styling 
│   │   │   │   │   └── auth.css
│   │   │   │   └── index.js
│   │   │   ├── dashboard/  
│   │   │   │   ├── Dashboard.jsx
│   │   │  	│	├── dashboard.css
│   │   │   │   └── index.js
│   │   │   ├── products/ 
│   │   │   │   ├── pages/
│   │   │  	│	│   ├── ProductList.jsx
│   │   │  	│	│   ├── ProductCreate.jsx
│   │   │  	│	│   ├── ProductEdit.jsx
│   │   │   │   │   └── ProductDetails.jsx
│   │   │  	│	├── components/
│   │   │  	│	│   ├── ProductForm.js
│   │   │   │   │   └── ProductTable.js
│   │   │  	│	├── hooks/
│   │   │  	│	├── services/
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
│   │   │   │   ├── settings.css
│   │   │   │   └── index.js
│   │   │   └── not-found/
│   │   │  		├── Not-found.jsx
│   │   │  		├── not-found.css
│   │   │       └── index.js
│   │   │
│   │   ├── hooks/                                       
│   │   │   ├── useFetch.js                              # Generic API request handing (loading, error, data)
│   │   │   ├── useDashboard.js                          # Dashboard statistics and summaries
│   │   │   ├── usePagination.js                         # Pagination Logic reusable across tables
│   │   │   ├── useDebounce.js                           # Debounce values for search inputs
│   │   │   ├── useLocalStorage.js                       # Persist datain local state
│   │   │   ├── useModal.js                              # Open/Close State for dialogs and Modal
│   │   │   ├── useTheme.js                              # Theme switching (light/dark)
│   │   │   └── index.js
│   │   │
│   │   ├── services/                                    
│   │   │   ├── api.js                                   # Configure Axios (base URL, interceptors, auth token, error banding)
│   │   │   └── ...
│   │   │
│   │   ├── routes/                                  
│   │   │   ├── AppRoutes.jsx                            # Defines all application route 
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── PublicRoute.jsx                          # Prevents authenticated users from accessing pages like login 
│   │   │   ├── RoleRoute.jsx                            # Restricts routes based on user roles (Admin, Manager, Staff)
│   │   │   ├── routePaths.js                            # Stores all paths as constants
│   │   │   └── index.js                                 # Re-exports route modules clearner imports
│   │   │
│   │   ├── utils/                                       
│   │   │   ├── helpers.js                               # General reusable utility functions
│   │   │   ├── constants.js                             # Application wide constants
│   │   │   ├── validator.js                             # Custom validation function 
│   │   │   ├── formatter.js                             # Formatting text, numbers, IDs 
│   │   │   ├── date.js                                  # Date and time formatting utilities
│   │   │   ├── currency.js                              # Currency calculations and formatting 
│   │   │   ├── storage.js                               # LocalStorage and SessionStorage helpers                           # Role and permission helper functions
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
│   │   │  	│	├── Auth/
│   │   │  	│	│   ├── LoginController.php
│   │   │  	│	│   ├── RegisterController.php
│   │   │  	│	│   ├── LogoutController.php
│   │   │  	│	│   ├── ForgotPasswordController.php
│   │   │  	│	│   ├── ResetPasswordController.php
│   │   │  	│	│   ├── VerifyEmailController.php
│   │   │  	│	│   ├── EmailVerificationNotificationController.php 
│   │   │  	│	│   ├── ChangePasswordController.php
│   │   │   │   │   └── ProfileController.php
│   │   │  	│	├── Dashboard/
│   │   │   │   │   └── DashboardController.php
│   │   │  	│	├── Product/
│   │   │  	│	│   ├── ProductController.php
│   │   │  	│	│   ├── CategoryController.php
│   │   │   │   │   └── ProductImageController.php
│   │   │  	│	├── Supplier/
│   │   │   │   │   └── SupplierController.php
│   │   │  	│	├── Customer/
│   │   │   │   │   └── CustomerController.php
│   │   │  	│	├── Purchase/
│   │   │  	│	│   ├── PurchaseController.php
│   │   │   │   │   └── PurchaseReturnController.php
│   │   │  	│	├── Sale/
│   │   │  	│	│   ├── SaleController.php
│   │   │   │   │   └── SaleReturnController.php
│   │   │  	│	├── Inventory/
│   │   │  	│	│   ├── InventoryController.php
│   │   │  	│	│   ├── StockController.php
│   │   │   │   │   └── StockMovementController.php
│   │   │  	│	├── Report/
│   │   │  	│	│   ├── SaleReportController.php
│   │   │  	│	│   ├── PurchaseReportController.php
│   │   │  	│	│   ├── InventoryReportController.php
│   │   │   │   │   └── ProfitReportController.php
│   │   │   │   └── Controller.php
│   │   │   ├── Middleware/                               
│   │   │  	│	├── Authenticate.php                     
│   │   │  	│	├── RoleMiddleware.php 
│   │   │  	│	├── AdminMiddleware.php
│   │   │  	│	├── RedirectAuthenticated.php
│   │   │  	│	├── RoleMiddleware.php 
│   │   │  	│	├── PermissionMiddleware.php 
│   │   │  	│	├── LogRequests.php 
│   │   │  	│	├── ForcelsonResponse.php                    
│   │   │  	│	├── TrimStrings.php
│   │   │   │   └── EnsureVerifiedEmail.php                   
│   │   │   ├── Requests/                                      
│   │   │  	│	├── Auth/
│   │   │  	│	│   ├── LoginRequest.php
│   │   │  	│	│   ├── RegisterRequest.php
│   │   │  	│	│   ├── ForgotPassworeRequest.php
│   │   │  	│	│   ├── ResetPasswordRequest.php
│   │   │   │   │   └── ChanagePasswordRequest.php
│   │   │  	│	├── Product/
│   │   │  	│	│   ├── StoreProductRequest.php
│   │   │   │   │   └── UpdateProductRequest.php
│   │   │  	│	├── Category/
│   │   │  	│	│   ├── StoreCategoryRequest.php
│   │   │   │   │   └── UpdateCategoryRequest.php
│   │   │  	│	├── Supplier/
│   │   │  	│	│   ├── StoreSupplierRequest.php
│   │   │   │   │   └── UpdateSupplierRequest.php
│   │   │  	│	├── Customer/
│   │   │  	│	│   ├── StoreCustomerRequest.php
│   │   │   │   │   └── UpdateCustomerRequest.php
│   │   │  	│	├── Purchase/
│   │   │  	│	│   ├── StorePurchaseRequest.php
│   │   │   │   │   └── UpdatePurchaseRequest.php
│   │   │  	│	├── Sale/
│   │   │  	│	│   ├── StoreSaleRequest.php
│   │   │   │   │   └── UpdateSaleRequest.php
│   │   │   │   └── Inventory/
│   │   │   │       └── StockAdjustmentRequest.php
│   │   │  	├── resources/     
│   │   │  	│ 	├── Auth/
│   │   │  	│	│   ├── UserResource.php
│   │   │   │   │   └── AuthResource.php
│   │   │  	│ 	├── ProductResource.php
│   │   │  	│ 	├── CategoryResource.php
│   │   │  	│ 	├── SupplierResource.php
│   │   │  	│ 	├── CustomerResource.php
│   │   │  	│ 	├── PurchaseResource.php
│   │   │  	│ 	├── PerchaseItemResource.php
│   │   │  	│ 	├── SaleResource.php
│   │   │  	│ 	├── SaleItemResource.php
│   │   │  	│ 	├── InventoryResource.php
│   │   │  	│ 	├── StockMovementResource.php
│   │   │   │   └── DashboardResource.php
│   │   │  	├── response/
│   │   │  	│   ├── ApiResponse.php
│   │   │  	│   ├── ErrorResponse.php
│   │   │   │   └── SuccessResponse.php
│   │   │   └── Kernel.php  
│   │   │
│   │   ├── Models/                                
│   │   │   ├── User.php
│   │   │   ├── Role.php
│   │   │   ├── Permission.php
│   │   │   ├── Product.php
│   │   │   ├── ProductImage.php
│   │   │   ├── Category.php
│   │   │   ├── Supplier.php
│   │   │   ├── Customer.php
│   │   │   ├── Purchase.php
│   │   │   ├── PurchaseItem.php
│   │   │   ├── Sale.php
│   │   │   ├── SaleItem.php
│   │   │   ├── Inventory.php
│   │   │   ├── StockMovement.php
│   │   │   ├── StockTransaction.php
│   │   │   ├── Setting.php 
│   │   │   ├── ActivityLog.php
│   │   │   └── Notification.php
│   │   │
│   │   ├── Services/               
│   │   │   ├── AuthService.php     
│   │   │   ├── DashboardService.php               		             
│   │   │   ├── ProductService.php                           
│   │   │   ├── CategoryService.php
│   │   │   ├── SupplierService.php
│   │   │   ├── PurchaseService.php 
│   │   │   ├── CustomerService.php                 
│   │   │   ├── SaleService.php
│   │   │   ├── InventoryService.php
│   │   │   ├── UploadService.php
│   │   │   ├── ReportService.php
│   │   │   └── NotificationService.php
│   │   │  
│   │   ├── Policies/
│   │   ├── Events/
│   │   ├── Listeners/
│   │   ├── Jobs/
│   │   ├── Notifications/
│   │   ├── Observers/
│   │   ├── Traits/
│   │   └── Helpers/                                     
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
