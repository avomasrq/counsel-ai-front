import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Book, User, Search, Clock, Menu, CheckCircle } from 'lucide-react';
import AuthModal from './auth/AuthModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const navItems = [
    {
      name: 'Profile',
      href: '/profile',
      icon: User
    },
    {
      name: 'Universities',
      href: '/universities',
      icon: Search
    },
    {
      name: 'Checklist',
      href: '/checklist',
      icon: CheckCircle
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: Book
    }
  ];

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Book className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gradient">CounselAI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm lg:text-base"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  onClick={() => handleAuthClick('signin')}
                  className="text-muted-foreground hover:text-primary text-sm lg:text-base px-3 lg:px-4"
                >
                  Sign In
                </Button>
                <Button 
                  className="gradient-primary text-white hover:opacity-90 transition-opacity text-sm lg:text-base px-4 lg:px-6"
                  onClick={() => handleAuthClick('signup')}
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-9 h-9">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-2 pb-4 border-b border-border">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                        <Book className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xl font-bold text-gradient">CounselAI</span>
                    </div>
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2 text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                    <div className="pt-4 space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full text-base py-3"
                        onClick={() => {
                          setIsOpen(false);
                          handleAuthClick('signin');
                        }}
                      >
                        Sign In
                      </Button>
                      <Button 
                        className="w-full gradient-primary text-white text-base py-3"
                        onClick={() => {
                          setIsOpen(false);
                          handleAuthClick('signup');
                        }}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Navigation;
