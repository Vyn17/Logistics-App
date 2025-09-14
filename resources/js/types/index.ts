export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  role: 'customer' | 'vendor' | 'admin';
  profile_photo_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Customer extends User {
  role: 'customer';
  phone?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  verified_at?: string;
}

export interface Vendor extends User {
  role: 'vendor';
  company_name: string;
  company_address: string;
  company_phone: string;
  license_number: string;
  verified_at?: string;
  rating: number;
  total_orders: number;
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}

export interface ShippingService {
  id: number;
  vendor_id: number;
  name: string;
  description: string;
  type: 'express' | 'regular' | 'economy' | 'same_day';
  base_price: number;
  price_per_kg: number;
  max_weight: number;
  estimated_days_min: number;
  estimated_days_max: number;
  coverage_areas: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
  vendor?: Vendor;
}

export interface Order {
  id: number;
  customer_id: number;
  vendor_id: number;
  service_id: number;
  tracking_number: string;
  status: 'pending' | 'confirmed' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';
  
  // Pickup Information
  pickup_name: string;
  pickup_phone: string;
  pickup_address: string;
  pickup_city: string;
  pickup_postal_code: string;
  pickup_date?: string;
  pickup_notes?: string;
  
  // Delivery Information
  delivery_name: string;
  delivery_phone: string;
  delivery_address: string;
  delivery_city: string;
  delivery_postal_code: string;
  delivery_date?: string;
  delivery_notes?: string;
  
  // Package Information
  package_type: 'document' | 'package' | 'fragile' | 'liquid' | 'other';
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  declared_value?: number;
  special_instructions?: string;
  
  // Pricing
  base_price: number;
  weight_price: number;
  additional_fees: number;
  total_price: number;
  
  // Timestamps
  created_at: string;
  updated_at: string;
  confirmed_at?: string;
  picked_up_at?: string;
  delivered_at?: string;
  cancelled_at?: string;
  
  // Relations
  customer?: Customer;
  vendor?: Vendor;
  service?: ShippingService;
  tracking_updates?: TrackingUpdate[];
  payment?: Payment;
}

export interface TrackingUpdate {
  id: number;
  order_id: number;
  status: string;
  location: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: number;
  order_id: number;
  amount: number;
  method: 'credit_card' | 'bank_transfer' | 'e_wallet' | 'cash';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  transaction_id?: string;
  gateway_response?: any;
  paid_at?: string;
  refunded_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: number;
  order_id: number;
  customer_id: number;
  vendor_id: number;
  rating: number;
  comment?: string;
  created_at: string;
  updated_at: string;
  customer?: Customer;
  order?: Order;
}

export interface Notification {
  id: number;
  user_id: number;
  type: 'order_update' | 'payment_update' | 'system' | 'promotion';
  title: string;
  message: string;
  data?: any;
  read_at?: string;
  created_at: string;
  updated_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: 'customer' | 'vendor';
  phone?: string;
  company_name?: string;
  company_address?: string;
  company_phone?: string;
  license_number?: string;
}

export interface OrderForm {
  service_id: number;
  
  // Pickup Information
  pickup_name: string;
  pickup_phone: string;
  pickup_address: string;
  pickup_city: string;
  pickup_postal_code: string;
  pickup_date?: string;
  pickup_notes?: string;
  
  // Delivery Information
  delivery_name: string;
  delivery_phone: string;
  delivery_address: string;
  delivery_city: string;
  delivery_postal_code: string;
  delivery_notes?: string;
  
  // Package Information
  package_type: string;
  weight: number;
  length?: number;
  width?: number;
  height?: number;
  declared_value?: number;
  special_instructions?: string;
}

export interface ServiceForm {
  name: string;
  description: string;
  type: string;
  base_price: number;
  price_per_kg: number;
  max_weight: number;
  estimated_days_min: number;
  estimated_days_max: number;
  coverage_areas: string[];
  is_active: boolean;
}

// Component Props Types
export interface PageProps {
  auth: {
    user: User | null;
  };
  flash?: {
    success?: string;
    error?: string;
    warning?: string;
    info?: string;
  };
}

export interface DashboardStats {
  total_orders: number;
  pending_orders: number;
  completed_orders: number;
  total_revenue: number;
  monthly_revenue: number;
  weekly_revenue: number;
}

export interface VendorStats extends DashboardStats {
  total_services: number;
  active_services: number;
  average_rating: number;
  total_reviews: number;
}

export interface AdminStats extends DashboardStats {
  total_vendors: number;
  verified_vendors: number;
  total_customers: number;
  verified_customers: number;
  pending_verifications: number;
}

// Search and Filter Types
export interface OrderFilters {
  status?: string[];
  vendor_id?: number;
  service_type?: string[];
  date_from?: string;
  date_to?: string;
  search?: string;
}

export interface VendorFilters {
  verified?: boolean;
  rating_min?: number;
  service_types?: string[];
  coverage_areas?: string[];
  search?: string;
}

// Settings Types
export interface NotificationSettings {
  email_order_updates: boolean;
  email_payment_updates: boolean;
  email_promotions: boolean;
  sms_order_updates: boolean;
  sms_payment_updates: boolean;
  push_notifications: boolean;
}
