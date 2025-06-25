import React, { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useAuthStore } from "@/lib/auth";

// Lazily load page components
const HomePage = lazy(() => import("@/pages/HomePage"));
const PropertiesPage = lazy(() => import("@/pages/PropertiesPage"));
const PropertyDetailPage = lazy(() => import("@/pages/PropertyDetailPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogDetailPage = lazy(() => import("@/pages/BlogDetailPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const InvestmentTipsPage = lazy(() => import("@/pages/InvestmentTipsPage"));
const LegalGuidancePage = lazy(() => import("@/pages/LegalGuidancePage"));
const MarketTrendsPage = lazy(() => import("@/pages/MarketTrendsPage"));
const BuyingGuidesPage = lazy(() => import("@/pages/BuyingGuidesPage"));
const AdminLoginPage = lazy(() => import("@/pages/AdminLoginPage"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminProperties = lazy(() => import("@/pages/AdminProperties"));
const AdminBlogs = lazy(() => import("@/pages/AdminBlogs"));
const AdminMessages = lazy(() => import("@/pages/AdminMessages"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ProtectedRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) {
    window.location.href = '/admin/login';
    return null;
  }
  
  return <Component {...rest} />;
}

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/properties" component={PropertiesPage} />
        <Route path="/properties/:id" component={PropertyDetailPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogDetailPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/investment-tips" component={InvestmentTipsPage} />
        <Route path="/legal-guidance" component={LegalGuidancePage} />
        <Route path="/market-trends" component={MarketTrendsPage} />
        <Route path="/buying-guides" component={BuyingGuidesPage} />
        <Route path="/admin/login" component={AdminLoginPage} />
        <Route path="/admin/dashboard" component={() => <ProtectedRoute component={AdminDashboard} />} />
        <Route path="/admin/properties" component={() => <ProtectedRoute component={AdminProperties} />} />
        <Route path="/admin/blogs" component={() => <ProtectedRoute component={AdminBlogs} />} />
        <Route path="/admin/messages" component={() => <ProtectedRoute component={AdminMessages} />} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
