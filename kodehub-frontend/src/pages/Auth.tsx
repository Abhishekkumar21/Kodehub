import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

function Auth(){
    const [showPassword,setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    //login form state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //Signup from state
    const [name, setName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleLogin = (e:React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
    
        //simulating API Call
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Success!",
                description: "You have been logged in successfully."
            });           
            }, 1500);
        }

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if(!agreeTerms){
            toast({
                title: "Error",
                description: "Please agree to the terms and conditions.",
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);
         
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            toast({
            title: "Account created!",
            description: "Welcome to KodeHub. Your account has been created successfully.",
            });
            // In a real app, you would redirect or update state after successful signup
        }, 1500);
    }

        return (
            <div className="flex min-h-screen flex-col bg-background">
              <div className="container max-w-lg mx-auto px-4 py-10">
                <div className="mb-8">
                  <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to home
                  </Link>
                </div>
        
                <div className="flex justify-center mb-8">
                  <Link to="/" className="flex items-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-8 h-8 text-kodehub-purple" 
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <span className="text-xl font-bold ml-2 text-foreground">KodeHub</span>
                  </Link>
                </div>
        
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <Card>
                      <CardHeader>
                        <CardTitle>Welcome back</CardTitle>
                        <CardDescription>Login to your KodeHub account</CardDescription>
                      </CardHeader>
                      <form onSubmit={handleLogin}>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="login-email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="login-email"
                                type="email" 
                                placeholder="you@example.com" 
                                className="pl-10"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="login-password">Password</Label>
                              <Link to="#" className="text-sm text-kodehub-purple hover:text-kodehub-purple/90">
                                Forgot password?
                              </Link>
                            </div>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="login-password"
                                type={showPassword ? "text" : "password"} 
                                className="pl-10"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="flex flex-col space-y-4">
                          <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Log in"}
                          </Button>
                          
                          <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full" type="button">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="signup">
                    <Card>
                      <CardHeader>
                        <CardTitle>Create an account</CardTitle>
                        <CardDescription>Join KodeHub to share and discover code</CardDescription>
                      </CardHeader>
                      <form onSubmit={handleSignup}>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name"
                              placeholder="John Doe" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="signup-email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="signup-email"
                                type="email" 
                                placeholder="you@example.com" 
                                className="pl-10"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="signup-password">Password</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="signup-password"
                                type={showPassword ? "text" : "password"} 
                                className="pl-10"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
        
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="terms" 
                              checked={agreeTerms}
                              onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                            />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the{" "}
                              <a href="#" className="text-kodehub-purple hover:underline">
                                terms of service
                              </a>{" "}
                              and{" "}
                              <a href="#" className="text-kodehub-purple hover:underline">
                                privacy policy
                              </a>
                            </label>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="flex flex-col space-y-4">
                          <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Create account"}
                          </Button>
                          
                          <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full" type="button">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          );
        };
        
        export default Auth;