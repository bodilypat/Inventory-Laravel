/* ======== SQL  ========
| -- Full Stack Inventory Management System
| -- Database Schema
*/

-- Users Table
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'manager','staff')),
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    deleted_at TIMESTAMP NULL
);
-- Categories Table
CREATE TABLE categories (
    category_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
);

-- Suppliers Table
CREATE TABLE suppliers (
    supplier_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    contact_person VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100) NOT NULL,
    contact_phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    deleted_at TIMESTAMP NULL
);

-- Products Table
CREATE TABLE products (
    product_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    sku VARCHAR(50) UNIQUE NOT NULL,
    caegory_id BIGINT,
    supplier_id BIGINT,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    quantity INT NOT NULL DEFAULT 0,
    description TEXT,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    deleted_at TIMESTAMP NULL,

    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE SET NULL,
    CONSTRAINT fk_supplier FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE SET NULL
);

-- Orders Table
CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    total DECIMAL(10, 2) NOT NULL ,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,

    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);

-- Order Items Table
CREATE TABLE order_items (
    order_item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id BIGINT REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id BIGINT REFERENCES products(product_id) ON DELETE SET NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Purchase Orders Table
CREATE TABLE purchase_orders (
    purchase_order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    supplier_id BIGINT REFERENCES suppliers(supplier_id) ON DELETE SET NULL,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,

    CONSTRAINT fk_supplier_po FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE SET NULL
);

-- Purchase Order Items Table
CREATE TABLE purchase_order_items (
    purchase_order_item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    purchase_order_id BIGINT REFERENCES purchase_orders(purchase_order_id) ON DELETE CASCADE,
    product_id BIGINT REFERENCES products(product_id) ON DELETE SET NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,

        CONSTRAINT fk_purchase_order FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders(purchase_order_id) ON DELETE CASCADE,
        CONSTRAINT fk_product_po FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE SET NULL
);

-- Stock Movements (Inventory Tracking) 
CREATE TABLE stock_movements (
    stock_movement_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT REFERENCES products(product_id) ON DELETE SET NULL,
    quantity_change INT NOT NULL,
    movement_type VARCHAR(20) NOT NULL CHECK (movement_type IN ('in', 'out')),
    created_at TIMESTAMP NULL,

    CONSTRAINT fk_product_sm FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE SET NULL
);

-- Inventory Logs Table
CREATE TABLE stock_logs (
    stock_log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    product_id BIGINT REFERENCES products(product_id) ON DELETE SET NULL,
    user_id BIGINT REFERENCES users(user_id) ON DELETE SET NULL,
    action VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NULL,

    CONSTRAINT fk_product_sl FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE SET NULL,
    CONSTRAINT fk_user_sl FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);

-- Settings Table
CREATE TABLE settings (
    setting_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    key VARCHAR(100) UNIQUE NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

/* INDEXES (Performance Optional) */
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_sales_user_id ON sales(user_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_purchase_orders_supplier_id ON purchase_orders(supplier_id);
CREATE INDEX idx_purchase_order_items_purchase_order_id ON purchase_order_items(purchase_order_id);
CREATE INDEX idx_purchase_order_items_product_id ON purchase_order_items(product_id);
CREATE INDEX idx_stock_movements_product_id ON stock_movements(product_id);
CREATE INDEX idx_stock_logs_product_id ON stock_logs(product_id);
CREATE INDEX idx_stock_logs_user_id ON stock_logs(user_id);
