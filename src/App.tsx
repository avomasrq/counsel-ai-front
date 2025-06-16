import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmartProfileBuilder from "./pages/features/SmartProfileBuilder";
import AIUniversityMatching from "./pages/features/AIUniversityMatching";
import ApplicationChecklist from "./pages/features/ApplicationChecklist";
import ScoreAnalysis from "./pages/features/ScoreAnalysis";
import DocumentGuidance from "./pages/features/DocumentGuidance";
import ProgressTracking from "./pages/features/ProgressTracking";
import Checklist from "./pages/Checklist";
import Resources from "./pages/Resources";
import Universities from "./pages/Universities";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/smart-profile-builder" element={<SmartProfileBuilder />} />
          <Route path="/features/ai-university-matching" element={<AIUniversityMatching />} />
          <Route path="/features/application-checklist" element={<ApplicationChecklist />} />
          <Route path="/features/score-analysis" element={<ScoreAnalysis />} />
          <Route path="/features/document-guidance" element={<DocumentGuidance />} />
          <Route path="/features/progress-tracking" element={<ProgressTracking />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
